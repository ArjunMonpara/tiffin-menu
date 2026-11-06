
import React from "react";
import PropTypes from "prop-types";

function SubscriptionPlan({ planName, days, pricePerDay }) {
  const totalPrice = days * pricePerDay;

  return (
    <div>
      <h3>{planName}</h3>
      <p>Duration: {days} days</p>
      <p>Price per day: ₹{pricePerDay}</p>
      <p>Total Price: ₹{totalPrice}</p>
    </div>
  );
}

SubscriptionPlan.propTypes = {
  planName: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  pricePerDay: PropTypes.number.isRequired
};

export default SubscriptionPlan;
