import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DisplayCars from "./components/Display/DisplayCars";
import FavoriteCar from "./components/Favorites/FavoriteCar";
import CarInfo from "./components/Car/CarInfo/CarInfo";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

const AppRoutes = () => {
  return (
    <Routes>

      <Route 
        path="/" 
        element={<Home />} 
      />

      <Route
        path="signup"
        element={<SignUp />}
      />

      <Route
        path="signin"
        element={<SignIn />}
      />

      <Route
        path="display"
        element={<DisplayCars  />}
      />

      <Route
        path="favorites"
        element={<FavoriteCar  />}
      />

      <Route 
        path="car/:name" 
        element={<CarInfo />} 
      />

    </Routes>
  );
};

export default AppRoutes;
