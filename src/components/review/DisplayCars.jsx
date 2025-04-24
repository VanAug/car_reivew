import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import CarCard from '../Car/CarCard';

const DisplayCars = ({onAddFavourites}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.clear();
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        setCars(data);
      })
  }, []);

  const displayCars = cars.map((car, index) => (
    <CarCard 
      key={index}
      car={car}
      onClick={()=>onAddFavourites(car)}
    />
  ))

  return (
    <div>
      <Search />
      <h2>Main Display</h2>
      <div className="card-container">
        {displayCars}
      </div>
    </div>
  );
};

export default DisplayCars;
