
import React from "react";
import PropTypes from "prop-types";

function DishItem({
  name,
  price,
  foodType = "Veg",
  spice = "Medium"
}) {
  return (
    <li>
      {name} - ₹{price} | {foodType} | Spice: {spice}
    </li>
  );
}

DishItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  foodType: PropTypes.oneOf(["Veg", "Jain", "Non-veg"]),
  spice: PropTypes.string
};

export default DishItem;
