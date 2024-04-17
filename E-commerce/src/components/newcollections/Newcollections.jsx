import "./Newcollections.css";
import Item from "../item/Item";
import new_collection from "../assets/new_collections";

const Newcollections = () => {
  return (
    <div className="newcollection">
      <h1>New Collections</h1>
      <hr />
      <div className="newcollection-items">
        {new_collection.map((item, i) => (
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

export default Newcollections;
