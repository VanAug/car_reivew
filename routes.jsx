import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home/Home'
import DisplayCars from './src/components/review/DisplayCars'
import FavoriteCar from './src/components/Favorites/FavoriteCar'
import CarInfo from './src/components/Car/CarInfo/CarInfo'

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