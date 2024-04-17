import "./css/Signup.css";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const signup = async () => {
    let result = await fetch("http://localhost:5000/register", {
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
      alert("Registration successful");
      localStorage.setItem("auth-token", result.token);
      window.location.replace("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <div className="background">
        <div className="registration">
          <h1>Register</h1>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
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
