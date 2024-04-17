import Footer from "../components/footer/Footer";
import "./css/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log(formdata);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);

    if (result.success) {
      alert("Login successful");
      localStorage.setItem("auth-token", result.token);
      window.location.replace("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <div className="background">
        <div className="login">
          <h1>Login</h1>
          <input
            name="email"
            value={formdata.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />

          <div className="password">
            <input
              name="password"
              value={formdata.password}
              onChange={handleChange}
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
