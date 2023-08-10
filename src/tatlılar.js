import React from "react";

const TatlıItem = ({ name, description, price, image }) => (
  <div className="food-item">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: ${price}</p>
  </div>
);

const Tatlılar = () => {
  const tatlıItems = [
    {
      name: "Ice Cream",
      description: "Refreshing ice cream with your choice of flavors.",
      price: 3.99,
      image: "/images/icecream.jpg"
    },
    {
      name: "Chocolate Cake",
      description: "Decadent chocolate cake with rich frosting.",
      price: 4.99,
      image: "/images/chocolate-cake.jpg"
    }
    // ... Diğer tatlılar
  ];

  return (
    <div className="foods">
      <h2>Our Desserts</h2>
      <div className="food-items">
        {tatlıItems.map((item, index) => (
          <TatlıItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Tatlılar;
