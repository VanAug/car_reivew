// Favorites.jsx
import React, { useEffect, useState } from "react";
import "./favorite.css"; // Make sure to import the CSS
import CarCard from "../Car/CarCard";

const Favorites = () => {
  const [favorites, setfavorites] = useState([]);
  const userId = localStorage.getItem("sessionUserId");

  useEffect(() => {
    if (!userId) return;

    fetch(`https://car-server-backend.onrender.com/api/users/${userId}`)
      .then((res) => res.json())
      .then(async (userData) => {
        const favoriteIds = userData.favorites || [];
        const favCars = await Promise.all(
          favoriteIds.map((id) =>
            fetch(
              `https://car-server-backend.onrender.com/api/cars/${id}`
            ).then((res) => res.json())
          )
        );
        setfavorites(favCars);
      })
      .catch((err) => console.error("Error fetching favorites:", err));
  }, [userId]);

  const handleRemoveFavorite = (car, userId) => {
    fetch(`https://car-server-backend.onrender.com/api/users/${userId}`)
      .then((res) => res.json())
      .then((userData) => {
        const updatedFavorites = userData.favorites.filter(
          (favId) => favId !== car.id
        );

        fetch(`https://car-server-backend.onrender.com/api/users/${userId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ favorites: updatedFavorites }),
        })
          .then((res) => res.json())
          .then((updatedUser) => {
            // Fetch car details for the remaining favorite IDs
            const favoriteIds = updatedUser.favorites || [];
            Promise.all(
              favoriteIds.map((id) =>
                fetch(
                  `https://car-server-backend.onrender.com/api/cars/${id}`
                ).then((res) => res.json())
              )
            ).then((favCars) => {
              setfavorites(favCars); // Update state with car objects
            });
          })
          .catch((error) => console.error("Error removing favorite:", error));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  return (
    <div className="favorite-container">
      <h2 className="favorites-title">Your Favorite Cars</h2>
      {favorites.length === 0 ? (
        <p className="favorites-empty">You have no favorite cars yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              removeFavorite={handleRemoveFavorite}
              isFavorited={true}
              view="favorite"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
