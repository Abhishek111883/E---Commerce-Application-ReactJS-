import "./Popular.css";
import Item from "../item/Item";
import data from "../assets/data";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-items">
        {data.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            newprice={item.new_price}
            oldprice={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
