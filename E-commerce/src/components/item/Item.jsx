import PropTypes from "prop-types";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div>
      <div className="item">
        <Link to={`/products/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
        </Link>

        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">${props.newprice}</div>
          <div className="item-price-old">${props.oldprice}</div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  newprice: PropTypes.number.isRequired,
  oldprice: PropTypes.number.isRequired,
};

export default Item;
