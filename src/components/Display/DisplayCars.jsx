/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import CarCard from '../Car/CarCard';

const DisplayCars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://car-server-backend.onrender.com/api/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = cars.filter(car => 
      car.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Handle adding car to the user's favorites
  const handleAddFavorite = (car, userId) => {
    fetch(`https://car-server-backend.onrender.com/api/users/${userId}`)
      .then((res) => res.json())
      .then((userData) => {
        const alreadyFav = userData.favorites.includes(car.id);
        if (!alreadyFav) {
          const updatedFavorites = [...userData.favorites, car.id];
          fetch(`https://car-server-backend.onrender.com/api/users/${userId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ favorites: updatedFavorites }),
          })
            .then((res) => res.json())
            .then((updatedUser) => {
              setFavorites(updatedUser.favorites); // Update state with IDs
            })
            .catch((error) => console.error('Error updating favorites:', error));
        }
      })
      .catch((error) => console.error('Error fetching user data:', error));
  };
  

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <h2 className='main'>Main Display</h2>
      <div className="card-container">
        {filteredCars.map((car) => (
          <CarCard 
            key={car.id} 
            car={car} 
            addFavorite={handleAddFavorite} 
            isFavorited={favorites.includes(car.id)}
            view="display" 
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCars;