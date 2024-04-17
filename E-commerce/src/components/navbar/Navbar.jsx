import { useContext, useState } from "react";
import hosnest from "../assets/Honest.png";
import cart_icon from "../assets/cart_icon.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import Toogle from "../toogle/Toogle";
import { Categorycontext } from "../../context/Categorycontext";

function NavBar() {
  const [menu, setmenu] = useState("Home");

  const { totalcount, darkMode, toggleDarkMode } = useContext(Categorycontext);
  console.log("Total count:", totalcount());

  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={hosnest} />
        </div>

        <ul className="menu">
          <li onClick={() => setmenu("Home")}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
            {menu === "Home" && <hr />}
          </li>
          <li onClick={() => setmenu("Mens")}>
            <Link to="/mens" style={{ textDecoration: "none", color: "black" }}>
              Mens
            </Link>
            {menu === "Mens" && <hr />}
          </li>
          <li onClick={() => setmenu("Womens")}>
            <Link
              to="/womens"
              style={{ textDecoration: "none", color: "black" }}
            >
              Womens
            </Link>
            {menu === "Womens" && <hr />}
          </li>
          <li onClick={() => setmenu("Kids")}>
            <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
              Kids
            </Link>
            {menu === "Kids" && <hr />}
          </li>
          <li onClick={() => setmenu("jewellery")}>
            <Link
              to="/jewellery"
              style={{ textDecoration: "none", color: "black" }}
            >
              jewellerys
            </Link>
            {menu === "jewellery" && <hr />}
          </li>
        </ul>

        <div className="cart">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <button>Login</button>
            </Link>
          )}

          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <img src={cart_icon} />
          </Link>
          <div className="cart-count"> {totalcount()}</div>

          <Toogle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
