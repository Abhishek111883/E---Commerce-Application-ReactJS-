import logo from "../assets/Honest.png";
import "./Footer.css";
import insta from "../assets/instagram_icon.png";
import pinterset from "../assets/pintester_icon.png";
import whatsapp from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" />
      <h5>Follow Us</h5>
      <div className="social-links">
        <button className="insta">
          <img src={insta} alt="" />
        </button>
        <button className="pin">
          <img src={pinterset} alt="" />
        </button>
        <button className="what">
          <img src={whatsapp} alt="" />
        </button>
      </div>
      <div className="address">
        <h5>Address</h5>
        <p>1234 Street Name | City Name, ST 12345</p>
      </div>
      <p>© 2024 Honest. All rights reserved.</p>
    </div>
  );
};

export default Footer;
