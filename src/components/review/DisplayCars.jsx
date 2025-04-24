import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import CarCard from '../Car/CarCard';

const DisplayCars = ({onAddFavourites}) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.clear();
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data); // initially display all
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = cars.filter(car => 
      car.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const displayCars = cars.map((car, index) => (
    <CarCard 
      key={index}
      car={car}
      onClick={()=>onAddFavourites(car)}
    />
  ))

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <h2>Main Display</h2>
      <div className="card-container">
        {filteredCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default DisplayCars;
