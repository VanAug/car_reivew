/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import CarCard from '../Car/CarCard';

const DisplayCars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      });

    fetch('http://localhost:3000/Favorites')
      .then(res => res.json())
      .then(data => setFavorites(data));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = cars.filter(car => 
      car.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleAddFavorite = (car) => {
    const alreadyFav = favorites.find((fav) => fav.id === car.id);
    if (!alreadyFav) {
      fetch('http://localhost:3000/Favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
      })
      .then(res => res.json())
      .then(newFav => setFavorites([...favorites, newFav]));
    }
  };

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <h2>Main Display</h2>
      <div className="card-container">
        {filteredCars.map((car) => (
          <CarCard 
            key={car.id} 
            car={car} 
            onClick={handleAddFavorite}
            isFavorited={favorites.some(fav => fav.id === car.id)}
            view="display"
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCars;
