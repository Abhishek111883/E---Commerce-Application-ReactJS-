import "./Related.css";
import PropTypes from "prop-types";
import Item from "../item/Item";

const Related = (props) => {
  const { allproducts, product } = props; // Destructuring props directly

  // Check if allproducts and category are defined before accessing them
  if (!allproducts || !product.category) {
    return null; // Return early or render a placeholder if data is not available yet
  }

  return (
    <div className="related">
      <h2>You might also like</h2>
      <hr />

      <div className="related-products">
        {allproducts
          .filter(
            (products) =>
              products.category === product.category &&
              products.id !== product.id
          ) // Filter allproducts by category and exclude the current product (if available
          .map((products) => (
            <Item
              key={products.id} // Using unique product id as the key
              id={products.id}
              image={products.image}
              name={products.name}
              newprice={products.new_price}
              oldprice={products.old_price}
            />
          ))}
      </div>
    </div>
  );
};

Related.propTypes = {
  allproducts: PropTypes.array.isRequired,
  product: PropTypes.object.isRequired,
};

export default Related;
