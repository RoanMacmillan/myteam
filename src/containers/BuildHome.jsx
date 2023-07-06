import React from "react";
import items from '../data/container.json'

const Build = () => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.heading} />
          <h2>{item.heading}</h2>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Build;



