import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './carinfo.css';

const CarInfo = () => {
  const { name } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch('https://car-server-backend.onrender.com/api/cars')
      .then(res => res.json())
      .then(data => {
        const matchedCar = data.find(c => c.name.toLowerCase() === name.toLowerCase());
        setCar(matchedCar);
      });
  }, [name]);

  if (!car) return <h2 className="carinfo-notfound">Loading or Car not found</h2>;

  return (
    <div className="carinfo-container">
      <h1 className="carinfo-title">{car.name}</h1>
      <img src={car.image} alt={car.name} className="carinfo-image" />
      <p className="carinfo-year">{car.year}</p>
      <p className="carinfo-info">{car.info}</p>

      <section className="carinfo-section">
        <h3>Specifications</h3>
        <ul className="carinfo-list">
          {Object.entries(car.specs).map(([key, value]) =>
            typeof value === 'object' ? (
              <li key={key}>
                <strong>{key}:</strong>
                <ul>
                  {Object.entries(value).map(([subKey, subVal]) => (
                    <li key={subKey}><strong>{subKey}:</strong> {subVal}</li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={key}><strong>{key}:</strong> {value}</li>
            )
          )}
        </ul>
      </section>

      <section className="carinfo-section">
        <h3>Pros</h3>
        <ul className="carinfo-list">
          {Object.entries(car.pros).map(([title, desc]) => (
            <li key={title}><strong>{title}:</strong> {desc}</li>
          ))}
        </ul>
      </section>

      <section className="carinfo-section">
        <h3>Cons</h3>
        <ul className="carinfo-list">
          {Object.entries(car.cons).map(([title, desc]) => (
            <li key={title}><strong>{title}:</strong> {desc}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CarInfo;
