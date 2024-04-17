import all_products from "../components/assets/all_product";
import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";

export const Categorycontext = createContext(null);

const defaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }

  return cart;
};

const CategoryProvider = (props) => {
  const [cartitem, setCartitem] = useState(() => {
    // Initialize from local storage or use default cart if not available
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || defaultcart();
  });

  useEffect(() => {
    // Update local storage whenever cartitem changes
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

  const contextvalue = {
    all_products,
    cartitem,
    addtocart,
    removefromcart,
    totalcart,
    totalcount,
  };

  useEffect(() => {
    console.log("Updated cartitem:", cartitem);
  }, [cartitem]); // Log cartitem whenever it changes

  function addtocart(id) {
    setCartitem((prevCart) => ({ ...prevCart, [id]: prevCart[id] + 1 }));
  }

  function removefromcart(id) {
    setCartitem((prevCart) => ({ ...prevCart, [id]: prevCart[id] - 1 }));
  }

  function totalcart() {
    let totalAmount = 0;

    for (let item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = all_products.find((product) => {
          return product.id === parseInt(item); // Corrected: added return here
        });
        totalAmount += itemInfo.new_price * cartitem[item];
      }
    }

    return totalAmount; // Moved return statement outside of the loop
  }

  function totalcount() {
    let totalCount = 0;

    for (let item in cartitem) {
      if (cartitem[item] > 0) {
        totalCount += cartitem[item];
      }
    }

    return totalCount;
  }

  return (
    <Categorycontext.Provider value={contextvalue}>
      {props.children}
    </Categorycontext.Provider>
  );
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoryProvider;
