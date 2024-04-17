import { useContext } from "react";
import Footer from "../components/footer/Footer";
import { Categorycontext } from "../context/Categorycontext";

import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";
import Product_view from "../components/product_view/Product_view";
import Related from "../components/Related_products/Related";

const Product = () => {
  const { all_products } = useContext(Categorycontext);
  const { id } = useParams();
  const product = all_products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <Breadcrum products={product} />

      <Product_view products={product} />

      <Related allproducts={all_products} product={product} />

      <Footer />
    </div>
  );
};

export default Product;
