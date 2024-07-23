import Footer from "../components/footer/Footer";
import "./css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import { Zoom, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlekeydown = (e) => {
    if (e.key == "Enter") {
      login();
    }
  };

  const login = async () => {
    const { email, password } = formdata;

    if (!email || !password) {
      toast.error("Please fill in all fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      return;
    }

    // console.log(formdata);
    let result = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.success) {
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      localStorage.setItem("auth-token", result.token);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error(result.message, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <div className="background">
        <div className="login">
          <h1>Login</h1>
          <input
            name="email"
            value={formdata.email}
            onChange={handleChange}
            onKeyDown={handlekeydown}
            type="email"
            placeholder="Email"
          />

          <div className="password">
            <input
              name="password"
              value={formdata.password}
              onChange={handleChange}
              onKeyDown={handlekeydown}
              type={showPass ? "text" : "password"}
              placeholder="Password"
            />
            <button className="showPass" onClick={showPassword}>
              {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </div>

          <button type="submit" className="loginButton" onClick={() => login()}>
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
