import { useContext, useState } from "react";
import { Categorycontext } from "../../context/Categorycontext";
import remove_icon from "../assets/cart_cross_icon.png";
import "./Cartitems.css";

const Cartitems = () => {
  const { all_products, cartitem, removefromcart, addtocart, totalcart } =
    useContext(Categorycontext);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    if (couponCode === "NOW10") {
      setIsCouponApplied(true);
    } else {
      alert("Invalid coupon code");
    }
  };

  const calculateTotalWithDiscount = () => {
    const subtotal = totalcart();
    const discount = isCouponApplied ? subtotal * 0.1 : 0;
    const shipping = subtotal === 0 ? 0 : 5;
    return subtotal - discount + shipping;
  };

  return (
    <>
      <div className="cartitem-list">
        <div className="format">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        {all_products.map((product) => {
          if (cartitem[product.id] > 0) {
            return (
              <div className="categoryitems" key={product.id}>
                <img src={product.image} alt="" className="product-image" />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button
                  className="cart-quantity"
                  onClick={() => {
                    addtocart(product.id);
                  }}
                >
                  {cartitem[product.id]}
                </button>
                <p>${product.new_price * cartitem[product.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  className="remove-button"
                  onClick={() => {
                    removefromcart(product.id);
                  }}
                />
              </div>
            );
          }
        })}
      </div>

      <div className="carttotal">
        <div className="leftside">
          <h1>Cart Total</h1>
          <div className="subtotal">
            <p>SubTotal</p>
            <p>{"$" + totalcart()}</p>
          </div>
          <div className="shipping">
            <p>Shipping fee</p>
            <p>{totalcart() == 0 ? "Free" : "$5"}</p>
          </div>
          <div className="total">
            <p>Total</p>

            <p>{"$" + calculateTotalWithDiscount()}</p>
          </div>

          <button>Checkout Now</button>
        </div>
        <div className="rightside">
          <p>If you have a promo code :</p>
          <input
            type="text"
            placeholder="Enter your code here"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={handleApplyCoupon} disabled={isCouponApplied}>
            {isCouponApplied ? "Applied" : "Apply Promo Code"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartitems;
