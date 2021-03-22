import React, { useState, useEffect } from "react";

const Shopping = ({ add }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const data = fetch("http://localhost:8000/items")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  if (items) {
    return (
      <div>
        {items.map((item) => (
          <div>
            <h2>{item.title}</h2>
            <img src={item.src} alt="test" />
            <p>{item.price}</p>
            <button onClick={() => add()}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Test</div>;
  }
};

export default Shopping;
