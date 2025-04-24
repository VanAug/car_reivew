import React from "react";
import "./carCard.css";
import { Link } from "react-router-dom";

const CarCard = ({ car, onClick, isFavorited, view }) => {
  const shortInfo = car.info.length > 100 ? car.info.substring(0, 100) + '...' : car.info;

  // Handle Read More / Read Less toggle
  const handleReadMore = (index) => {
    setExpandedCars(prev => ({
      ...prev,
      [index]: !prev[index], // Toggle expanded state for this car
    }));
  };

  // Truncate text if it's longer than the specified limit
  const truncateText = (text, limit) => {
    if (!text) return '';
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  // Render car card
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
          {view === "display" && (
            isFavorited ? "Favorited" : "Favorite"
          )}

          {view === "favorite" && (
            isFavorited ? "" : "Remove"
          )}
          
        </button>
        <Link to={`/car/${car.name}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
