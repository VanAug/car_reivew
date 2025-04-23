import React, { useEffect, useState } from 'react';
import './car.css';

const CarCard = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.clear();
    fetch('http://localhost:3000/cars')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch cars');
        }
        return res.json();
      })
      .then(data => {
        setCars(data.cars || data);
      })
      .catch(err => console.error(err));
        }, []);

  return (
    <div className="card-container">
      {cars.length === 0 ? (
        <p>Loading cars...</p>
      ) : (
        cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
            <p><strong>Year:</strong> {car.year}</p>
            <p>{car.info}</p>
            <h4>Specifications</h4>
            <ul>
              <li><strong>Engine:</strong> {car.specs?.engine}</li>
              <li><strong>Power:</strong> {car.specs?.power}</li>
              <li><strong>Torque:</strong> {car.specs?.torque}</li>
              <li><strong>Drivetrain:</strong> {car.specs?.drivetrain}</li>
              <li><strong>Transmission:</strong> {car.specs?.transmission}</li>
              <li><strong>Acceleration:</strong> {car.specs?.acceleration || car.specs?.["0-100"]}</li>
              <li><strong>Top Speed:</strong> {car.specs?.top_speed || car.specs?.["top Speed"]}</li>
              <li><strong>Fuel Type:</strong> {car.specs?.fuel_type || car.specs?.["fuel type"]}</li>
            </ul>
            <h4>Pros</h4>
            <ul>
              {Object.entries(car.pros).map(([title, detail], idx) => (
                <li key={idx}><strong>{title}:</strong> {detail}</li>
              ))}
            </ul>
            <h4>Cons</h4>
            <ul>
              {Object.entries(car.cons).map(([title, detail], idx) => (
                <li key={idx}><strong>{title}:</strong> {detail}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default CarCard;
