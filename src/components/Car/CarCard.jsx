import React, { useEffect, useState } from 'react';
import './car.css';

const CarCard = () => {
  const [cars, setCars] = useState([]);
  const [expandedCars, setExpandedCars] = useState({}); // Track expansion per car

  // Fetch car data on component mount
  useEffect(() => {
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

  // Handle Read More / Read Less toggle
  const handleReadMore = (index) => {
    setExpandedCars(prev => ({
      ...prev,
      [index]: !prev[index], // Toggle expanded state for this car
    }));
  };

  // Truncate text if it's longer than the specified limit
  const truncateText = (text, limit) => {
    if (!text) return '';
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  // Render car card
  return (
    <div className="card-container">
      {cars.length === 0 ? (
        <p>Loading cars...</p>
      ) : (
        cars.map((car, index) => (
          <div className="car-card" key={car.id || index}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
            <p><strong>Year:</strong> {car.year}</p>

            {/* Car Info */}
            <p>
              <strong>Info:</strong>
              {expandedCars[index] ? car.info : truncateText(car.info, 30
              )}
            </p>

            {/* Specifications */}
            <h4>Specifications</h4>
            <ul>
              <li><strong>Engine:</strong> {expandedCars[index] ? car.specs?.engine : truncateText(car.specs?.engine, 0)}</li>
              <li><strong>Power:</strong> {expandedCars[index] ? car.specs?.power : truncateText(car.specs?.power, 0)}</li>
              <li><strong>Torque:</strong> {expandedCars[index] ? car.specs?.torque : truncateText(car.specs?.torque, 0)}</li>
              <li><strong>Drivetrain:</strong> {expandedCars[index] ? car.specs?.drivetrain : truncateText(car.specs?.drivetrain, 0)}</li>
              <li><strong>Transmission:</strong> {expandedCars[index] ? car.specs?.transmission : truncateText(car.specs?.transmission, 0)}</li>
              <li><strong>Acceleration:</strong> {expandedCars[index] ? car.specs?.acceleration || car.specs?.["0-100"] : truncateText(car.specs?.acceleration || car.specs?.["0-100"], 0)}</li>
              <li><strong>Top Speed:</strong> {expandedCars[index] ? car.specs?.top_speed || car.specs?.["top Speed"] : truncateText(car.specs?.top_speed || car.specs?.["top Speed"], 0)}</li>
              <li><strong>Fuel Type:</strong> {expandedCars[index] ? car.specs?.fuel_type || car.specs?.["fuel type"] : truncateText(car.specs?.fuel_type || car.specs?.["fuel type"], 0)}</li>
            </ul>

            {/* Pros */}
            {car.pros && (
              <>
                <h4>Pros</h4>
                <ul>
                  {Object.entries(car.pros).map(([title, detail], idx) => (
                    <li key={idx}>
                      <strong>{title}:</strong> {expandedCars[index] ? detail : truncateText(detail, 0)}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Cons */}
            {car.cons && (
              <>
                <h4>Cons</h4>
                <ul>
                  {Object.entries(car.cons).map(([title, detail], idx) => (
                    <li key={idx}>
                      <strong>{title}:</strong> {expandedCars[index] ? detail : truncateText(detail, 0)}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Read More / Read Less button */}
            <button onClick={() => handleReadMore(index)}>
              {expandedCars[index] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CarCard;
