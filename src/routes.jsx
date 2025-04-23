import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import DisplayCars from './components/review/DisplayCars'
import FavoriteCar from './components/Favorites/FavoriteCar'
import CarInfo from './components/Car/CarInfo/CarInfo'

const AppRoutes = () => {
  return (
    <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="display"
          element={<DisplayCars />}
        />
        <Route 
          path="favorites"
          element={<FavoriteCar />}
        />
        <Route
            path='car/:name'
            element={<CarInfo />}
        />
    </Routes>
  )
}

export default AppRoutes