import PropTypes from "prop-types";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import "./Product_view.css";
import { Categorycontext } from "../../context/Categorycontext";
import { useContext } from "react";

const Product_view = (props) => {
  const { products } = props;
  const { addtocart } = useContext(Categorycontext);
  return (
    <div>
      <div className="product-container">
        <div className="product-left">
          <img src={products.image} alt="" />
        </div>

        <div className="product-right">
          <h1 style={{ margin: "0" }}>{products.name}</h1>
          <div className="description">
            <p>
              Indulge in our diverse range of clothing, where style meets
              comfort effortlessly. From sophisticated suits and elegant dresses
              to casual t-shirts and cozy loungewear, we have everything you
              need to curate a wardrobe that reflects your unique personality
              and lifestyle.
            </p>
          </div>
          <div className="product-prices">
            <div className="product-price-new">${products.new_price}</div>
            <div className="product-price-old">${products.old_price}</div>
          </div>

          <div className="stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(443)</p>
          </div>

          <div className="sizes">
            <h1 style={{ margin: "0" }}>Select size</h1>
            <div className="select_sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>

          <button
            onClick={() => {
              addtocart(products.id);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="description_box">
        <p>{products.description}</p>
      </div>
    </div>
  );
};

Product_view.propTypes = {
  products: PropTypes.object.isRequired,
};

export default Product_view;
