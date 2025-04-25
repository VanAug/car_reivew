import React, { useState } from 'react';
import './addcar.css';

const AddCar = () => {
    const initialForm = {
        name: '',
        year: '',
        info: '',
        image: '',
        specs: {
          engine: '',
          power: '',
          torque: '',
          drivetrain: '',
          transmission: '',
          acceleration: '',
          topSpeed: '',
          fuelType: '',
          dimensions: {
            Length: '',
            Width: '',
            Height: '',
            Wheelbase: '',
          }
        },
        pros: {
          ExceptionalPerformance: '',
          GoodHandling: '',
          Practicality: '',
          ComfortableRide: '',
        },
        cons: {
          FirmRide: '',
          LimitedRearHeadroom: '',
          FuelEconomy: '',
          MaintenanceCosts: '',
        }
      };
    const [car, setCar] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const nestedKeys = name.split('.');
    if (nestedKeys.length === 1) {
      setCar({ ...car, [name]: value });
    } else if (nestedKeys.length === 2) {
      setCar({
        ...car,
        [nestedKeys[0]]: {
          ...car[nestedKeys[0]],
          [nestedKeys[1]]: value
        }
      });
    } else if (nestedKeys.length === 3) {
      setCar({
        ...car,
        [nestedKeys[0]]: {
          ...car[nestedKeys[0]],
          [nestedKeys[1]]: {
            ...car[nestedKeys[0]][nestedKeys[1]],
            [nestedKeys[2]]: value
          }
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://car-server-backend.onrender.com/api/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car)
    })
      .then(res => res.json())
      .then(data => {
        alert('Car added successfully!');
        console.log(data);
        setCar(initialForm); // Clear the form
      })
      .catch(err => console.error('Error adding car:', err));
  };

  return (
    <div className="add-car-container">
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit} className="add-car-form">
        <input name="name" placeholder="Car Name" value={car.name} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={car.image} onChange={handleChange} />
        <input name="year" placeholder="Year" value={car.year} onChange={handleChange} required />
        <textarea name="info" placeholder="Short Description" value={car.info} onChange={handleChange} required />


        <h3>Specs</h3>
        <input name="specs.engine" placeholder="Engine" value={car.specs.engine} onChange={handleChange} />
        <input name="specs.power" placeholder="Power" value={car.specs.power} onChange={handleChange} />
        <input name="specs.torque" placeholder="Torque" value={car.specs.torque} onChange={handleChange} />
        <input name="specs.drivetrain" placeholder="Drivetrain" value={car.specs.drivetrain} onChange={handleChange} />
        <input name="specs.transmission" placeholder="Transmission" value={car.specs.transmission} onChange={handleChange} />
        <input name="specs.acceleration" placeholder="Acceleration (0-100)" value={car.specs.acceleration} onChange={handleChange} />
        <input name="specs.topSpeed" placeholder="Top Speed" value={car.specs.topSpeed} onChange={handleChange} />
        <input name="specs.fuelType" placeholder="Fuel Type" value={car.specs.fuelType} onChange={handleChange} />

        <h4>Dimensions</h4>
        <input name="specs.dimensions.Length" placeholder="Length" value={car.specs.dimensions.Length} onChange={handleChange} />
        <input name="specs.dimensions.Width" placeholder="Width" value={car.specs.dimensions.Width} onChange={handleChange} />
        <input name="specs.dimensions.Height" placeholder="Height" value={car.specs.dimensions.Height} onChange={handleChange} />
        <input name="specs.dimensions.Wheelbase" placeholder="Wheelbase" value={car.specs.dimensions.Wheelbase} onChange={handleChange} />

        <h3>Pros</h3>
        <input name="pros.ExceptionalPerformance" placeholder="Pro 1" value={car.pros.ExceptionalPerformance} onChange={handleChange} />
        <input name="pros.GoodHandling" placeholder="Pro 2" value={car.pros.GoodHandling} onChange={handleChange} />
        <input name="pros.Practicality" placeholder="Pro 3" value={car.pros.Practicality} onChange={handleChange} />
        <input name="pros.ComfortableRide" placeholder="Pro 4" value={car.pros.ComfortableRide} onChange={handleChange} />

        <h3>Cons</h3>
        <input name="cons.FirmRide" placeholder="Con 1" value={car.cons.FirmRide} onChange={handleChange} />
        <input name="cons.LimitedRearHeadroom" placeholder="Con 2" value={car.cons.LimitedRearHeadroom} onChange={handleChange} />
        <input name="cons.FuelEconomy" placeholder="Con 3" value={car.cons.FuelEconomy} onChange={handleChange} />
        <input name="cons.MaintenanceCosts" placeholder="Con 4" value={car.cons.MaintenanceCosts} onChange={handleChange} />


        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
