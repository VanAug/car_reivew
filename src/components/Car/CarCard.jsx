// CarCard.jsx
import React from "react";
import "./carCard.css";
import { Link, useNavigate } from "react-router-dom";

const CarCard = ({ car, addFavorite, isFavorited, view }) => {
  const navigate = useNavigate();
  const shortInfo = car.info.length > 100 ? car.info.substring(0, 100) + '...' : car.info;

  const handleFavoriteClick = () => {
    const userId = localStorage.getItem('sessionUserId');
    
    if (!userId) {
      navigate('/signin'); 
      return;
    }

    if (addFavorite) {
      addFavorite(car, userId);
    }
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-content">
        <h2>{car.name}</h2>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Engine:</strong> {car.specs.engine}</p>
        <p><strong>Power:</strong> {car.specs.power}</p>
        <p className="car-info">{shortInfo}</p>
      </div>

      <div className="car-card-buttons">
        <button 
          onClick={handleFavoriteClick} 
          disabled={isFavorited}
        >
          {view === "display" && (isFavorited ? "Favorited" : "Favorite")}
          {view === "favorite" && (isFavorited ? "" : "Remove")}
        </button>
        <Link to={`/car/${car.name}`}>
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;