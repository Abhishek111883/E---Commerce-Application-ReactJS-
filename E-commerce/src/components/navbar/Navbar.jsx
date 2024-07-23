import { useContext, useState, useEffect } from "react";
import honest from "../assets/Honest.png";
import darkhonest from "../assets/Dark_Honest.png";
import cart_icon from "../assets/cart_icon.png";
import "./Nav.css";
import { Link } from "react-router-dom";

import Toogle from "../toogle/Toogle";
import { Categorycontext } from "../../context/Categorycontext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeContext } from "../../context/DarkModecontext";

function NavBar() {
  const [menu, setmenu] = useState("Home");

  const { totalcount, emptycart } = useContext(Categorycontext);
  const { isDarkMode } = useContext(DarkModeContext);
  // console.log("Total count:", totalcount());

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
    // window.location.replace("/");
    emptycart();
  };

  const linkStyle = {
    textDecoration: "none",
    color: isDarkMode ? "white" : "black",
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
          <img src={isDarkMode ? darkhonest : honest} />
        </div>

        <ul className="menu">
          <li onClick={() => setmenu("Home")}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            {menu === "Home" && <hr />}
          </li>
          <li onClick={() => setmenu("Mens")}>
            <Link to="/mens" style={linkStyle}>
              Mens
            </Link>
            {menu === "Mens" && <hr />}
          </li>
          <li onClick={() => setmenu("Womens")}>
            <Link to="/womens" style={linkStyle}>
              Womens
            </Link>
            {menu === "Womens" && <hr />}
          </li>
          <li onClick={() => setmenu("Kids")}>
            <Link to="/kids" style={linkStyle}>
              Kids
            </Link>
            {menu === "Kids" && <hr />}
          </li>
          <li onClick={() => setmenu("jewellery")}>
            <Link to="/jewellery" style={linkStyle}>
              jewellerys
            </Link>
            {menu === "jewellery" && <hr />}
          </li>
        </ul>

        <div className="cart">
          {authToken ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" style={linkStyle}>
              <button>Login</button>
            </Link>
          )}

          <Link to="/cart" style={linkStyle}>
            <img src={cart_icon} />
          </Link>

          <div className="cart-count">{totalcount()}</div>

          <Toogle />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
