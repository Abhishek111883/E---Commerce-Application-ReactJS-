import { useContext, useState, useEffect } from "react";
import hosnest from "../assets/Honest.png";
import cart_icon from "../assets/cart_icon.png";
import "./Nav.css";
import { Link } from "react-router-dom";

import Toogle from "../toogle/Toogle";
import { Categorycontext } from "../../context/Categorycontext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar() {
  const [menu, setmenu] = useState("Home");

  const { totalcount, darkMode, toggleDarkMode } = useContext(Categorycontext);
  console.log("Total count:", totalcount());

  const authToken = localStorage.getItem("auth-token");

  useEffect(() => {
    // Display toast message when authToken changes
    if (authToken) {
      toast.success("Welcome to Honest Harbour", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [authToken]); // Listen for changes in authToken

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    // Redirect to the home page after logout
    window.location.replace("/");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

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
          {authToken ? (
            <button onClick={handleLogout}>Logout</button>
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
