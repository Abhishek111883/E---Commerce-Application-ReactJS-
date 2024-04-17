import PropTypes from "prop-types";
import { Categorycontext } from "../context/Categorycontext";
import { useContext } from "react";
import Item from "../components/item/Item";
import "./css/Categories.css";
import sort from "../components/assets/dropdown_icon.png";
import Footer from "../components/footer/Footer";

const Categories = (props) => {
  const { all_products } = useContext(Categorycontext);
  return (
    <div className="category">
      <img className="banner" src={props.banner} alt="" />

      <div className="category-indexsort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="sort">
          Sort by <img src={sort} alt="" />
        </div>
      </div>

      <div className="products">
        {all_products
          .filter((product) => product.category === props.catergory)
          .map((product, i) => (
            <Item
              key={i}
              id={product.id}
              image={product.image}
              name={product.name}
              newprice={product.new_price}
              oldprice={product.old_price}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
};

Categories.propTypes = {
  banner: PropTypes.string.isRequired,
  catergory: PropTypes.string.isRequired,
};

export default Categories;
