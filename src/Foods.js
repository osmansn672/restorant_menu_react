// Foods.js
import React from "react";

const FoodItem = ({ name, description, price, image }) => (
  <div className="food-item">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: ${price}</p>
  </div>
);

const Foods = () => {
  const foodItems = []; // Boş bir dizi kullanarak yiyecekleri kaldırdık

  return (
    <div className="foods">
      <h2>Our Foods</h2>
      <div className="food-items">
        {foodItems.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
