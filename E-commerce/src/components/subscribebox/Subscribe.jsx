import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-box">
      <h1>Subscribe to our Shop</h1>
      <p>Get the latest updates on new products and upcoming sales</p>
      <div className="subscribe-input">
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
