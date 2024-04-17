import Footer from "../components/footer/Footer";
import "./css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <div>
      <div className="background">
        <div className="login">
          <h1>Login</h1>
          <input type="email" placeholder="Email" />

          <div className="password">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <button className="showPass" onClick={showPassword}>
              {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>

          <button type="submit" className="loginButton">
            Login
          </button>

          <p>dont have a account?</p>

          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <button className="registerButton">Register</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
