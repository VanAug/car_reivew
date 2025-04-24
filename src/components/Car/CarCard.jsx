import React from "react";
import "./carCard.css";
import { Link } from "react-router-dom";

const CarCard = ({ car, onClick, isFavorited }) => {
  const shortInfo = car.info.length > 100 ? car.info.substring(0, 100) + '...' : car.info;

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <h2>{car.name}</h2>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Engine:</strong> {car.specs.engine}</p>
      <p><strong>Power:</strong> {car.specs.power}</p>
      <p>{shortInfo}</p>

      <div className="car-card-buttons">
        <button 
          onClick={() => onClick && onClick(car)} 
          disabled={isFavorited}
        >
          {isFavorited ? "Favorited" : "Favorite"}
        </button>
        <Link to={`/car/${car.name}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
