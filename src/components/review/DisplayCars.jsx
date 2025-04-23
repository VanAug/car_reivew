import React, { useEffect, useState } from 'react';
import Search from '../Search/Search';
import CarCard from '../Car/CarCard';

const DisplayCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.clear();
    fetch('http://localhost:3000/cars')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch cars');
        return res.json();
      })
      .then(data => {
        setCars(data.cars || data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Search />
      <h2>Main Display</h2>
      <div className="card-container">
        {cars.length === 0 ? (
          <p>Loading cars...</p>
        ) : (
          cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayCars;
