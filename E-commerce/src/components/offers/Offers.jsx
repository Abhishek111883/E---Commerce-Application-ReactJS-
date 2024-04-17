import exclusive from "../assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-content">
        <h1>Exclusive</h1>
        <p>Attarctive Offers</p>
        <p>Disconts on top Brands</p>
        <div className="offers-btn">Shop Now</div>
      </div>
      <div className="imgonright">
        <img src={exclusive} alt="" />
      </div>
    </div>
  );
};

export default Offers;
