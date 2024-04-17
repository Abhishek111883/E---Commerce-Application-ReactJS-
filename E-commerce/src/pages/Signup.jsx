import "./css/Signup.css";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  const showPassword = () => {
    setShowPass(!showPass);
  };

  return (
    <div>
      <div className="background">
        <div className="registration">
          <h1>Register</h1>
          <input type="text" placeholder="Username" />
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
          <button type="submit" className="Registerbutton">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
