import "./css/Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Zoom, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlekeydown = (e) => {
    if (e.key == "Enter") {
      signup();
    }
  };

  const signup = async () => {
    const { email, password, name } = formdata;

    if (!email || !password || !name) {
      toast.error("Please fill in all fields", {
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
      return;
    }
    let result = await fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    if (result.success) {
      toast.success("Registration successful", {
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
        <div className="registration">
          <h1>Register</h1>
          <input
            type="text"
            name="name"
            onKeyDown={handlekeydown}
            value={formdata.name}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            onKeyDown={handlekeydown}
            value={formdata.email}
            onChange={handleChange}
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
          <button
            type="submit"
            onClick={() => signup()}
            className="Registerbutton"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
