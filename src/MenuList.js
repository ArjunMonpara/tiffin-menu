
import React from "react";

const dishes = [
  { name: "Gujarati Dal", price: 40 },
  { name: "Sev Tameta", price: 60 },
  { name: "Chapati", price: 20 },
  { name: "Jeera Rice", price: 50 }
];

function MenuList() {
  return (
    <div>
      <h2>Today's Thali</h2>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            {dish.name} - ₹
            <span style={{ color: "green" }}>
              {(dish.price * 1.05).toFixed(2)}
            </span>
            {" (including 5% GST)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
