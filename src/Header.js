
import React from "react";

const serviceName = "Shree Tiffin House";
const city = "Rajkot";
const since = 2022;

function Header() {
  const years = new Date().getFullYear() - since;

  return (
    <div>
      <h1>{serviceName}</h1>
      <p>Serving homes in {city} for {years} years</p>
    </div>
  );
}

export default Header;
