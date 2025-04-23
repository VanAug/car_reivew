import React from "react";
import "../Home/home.css";

function Home() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="homeContainer">
      <div className="overLayText">
        <h2>Rev Ride , home of reveiws</h2>
        <button onClick={handleClick} className="button">
          Review
        </button>
      </div>
    </div>
  );
}
export default Home;
