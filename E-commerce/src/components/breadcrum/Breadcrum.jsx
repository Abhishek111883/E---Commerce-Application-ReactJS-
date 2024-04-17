import PropTypes from "prop-types";
import "./Breadcrum.css";
import arrow from "../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  // Check if products is null or undefined

  const { products } = props;

  if (!products) {
    return null; // If product is null, return null to prevent rendering
  }

  // console.log(products);

  return (
    <div className="breadcrum">
      Home <img src={arrow} alt="" /> Shop <img src={arrow} alt="" />{" "}
      {products.category} <img src={arrow} alt="" /> {products.name}
    </div>
  );
};

Breadcrum.propTypes = {
  products: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Breadcrum;
