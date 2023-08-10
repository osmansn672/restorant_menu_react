// Menu.js
import React, { useState } from "react";

const MenuItem = ({ name, description, price, image }) => (
  <div className="menu-item">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: ${price}</p>
  </div>
);

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("coffee"); // Varsayılan olarak kahve menüsü gösteriliyor

  const menuItems = {
    coffee: [
      {
        name: "Coffee",
        description: "A classic cup of coffee.",
        price: 3.99,
        image: "/images/coffee.jpg"
      },
      {
        name: "Latte",
        description: "Espresso with steamed milk.",
        price: 4.99,
        image: "/images/latte.jpg"
      }
      // ...
    ],
    food: [
      {
        name: "Burger",
        description: "Juicy beef patty with fresh veggies.",
        price: 8.99,
        image: "/images/burger.jpg"
      },
      {
        name: "Pizza",
        description: "Delicious pizza with various toppings.",
        price: 10.99,
        image: "/images/pizza.jpg"
      }
      // ...
    ]
  };

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-tabs">
        <button onClick={() => setActiveMenu("coffee")}>Coffee</button>
        <button onClick={() => setActiveMenu("food")}>Food</button>
      </div>
      <div className="menu-items">
        <h3>{activeMenu === "coffee" ? "Kahveler" : "Yiyecekler"}</h3>
        {menuItems[activeMenu].map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
