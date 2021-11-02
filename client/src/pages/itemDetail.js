import React, {useState, useEffect} from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Item() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.sampleapis.com/coffee/hot');

    const items = await data.json();

    console.log(items);
    setItems(items);
  };

  return (
    <div>
        {items.map(item => (
          <h1 key={item.title}>
            <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </h1>
        ))}
    </div>
  );
}

export default Item;
