
import React from "react";
import Header from "./Header";
import MenuList from "./MenuList";
import OrderNote from "./OrderNote";
import DeliveryInfo from "./DeliveryInfo";
import SubscriptionPlan from "./SubscriptionPlan";

function App() {
  const tiffin = {
    name: "Shree Tiffin House",
    city: "Rajkot",
    since: 2022
  };

  return (
    <div>
      <Header
        name={tiffin.name}
        city={tiffin.city}
        since={tiffin.since}
      />

      <MenuList />

      <OrderNote />

      <DeliveryInfo
        name={tiffin.name}
        city={tiffin.city}
        since={tiffin.since}
      />

      <h2>Subscription Plans</h2>

      <SubscriptionPlan
        planName="Weekly"
        days={6}
        pricePerDay={90}
      />

      <SubscriptionPlan
        planName="Fortnight"
        days={12}
        pricePerDay={88}
      />

      <SubscriptionPlan
        planName="Monthly"
        days={26}
        pricePerDay={85}
      />
    </div>
  );
}

export default App;
