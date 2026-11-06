
import React from "react";
import DishItem from "./DishItem";

function MenuList() {
  return (
    <div>
      <h2>Today's Thali</h2>
      <ul>
        <DishItem name="Gujarati Dal" price={42} foodType="Veg" spice="Medium" />
        <DishItem name="Sev Tameta" price={63} foodType="Jain" spice="Hot" />
        <DishItem name="Chapati" price={21} foodType="Veg" />
        <DishItem name="Jeera Rice" price={52.5} foodType="Veg" spice="Mild" />
        <DishItem name="Paneer Masala" price={80} foodType="Veg" spice="Hot" />
      </ul>
    </div>
  );
}

export default MenuList;
