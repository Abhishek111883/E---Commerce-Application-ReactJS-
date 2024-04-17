import arrow from "../assets/arrow.png";
import heroimg from "../assets/hero_image.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Summer Collection</h1>
          <p>Get 50% off for all dresses</p>
          <p>for all online store orders</p>
          <p>use code: 2020</p>
          <div className="collection-btn">
            <Link
              to="/womens"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "30px",
                fontWeight: "600",
              }}
            >
              collection <img src={arrow} alt="" />
            </Link>
          </div>
        </div>
        <div className="img">
          <img src={heroimg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
