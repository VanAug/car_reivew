// Favorites.jsx
import React, { useEffect, useState } from 'react';
import './favorite.css'; // Make sure to import the CSS
import CarCard from '../Car/CarCard';

const Favorites = () => {
  const [cars, setCars] = useState([]);
  const userId = localStorage.getItem('sessionUserId');

  useEffect(() => {
    if (!userId) return;
  
    fetch(`https://car-server-backend.onrender.com/api/users/${userId}`)
      .then(res => res.json())
      .then(async (userData) => {
        const favoriteIds = userData.favorites || [];
        const favCars = await Promise.all(
          favoriteIds.map(id => 
            fetch(`https://car-server-backend.onrender.com/api/cars/${id}`).then(res => res.json())
          )
        );
        setCars(favCars);
      })
      .catch(err => console.error("Error fetching favorites:", err));
  }, [userId]);

  return (
    <div className="favouriteContainer">
      <h2>Your Favorite Cars</h2>
      {cars.length === 0 ? (
        <p>You have no favorite cars yet.</p>
      ) : (
        <div className="carList">
          {cars.map(car => (
            <CarCard 
            key={car.id} 
            car={car} 
            view="favorite" 
          />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;