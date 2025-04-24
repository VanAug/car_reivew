import React, { useEffect, useState } from "react";
import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Favorites")
      .then((res) => res.json())
      .then((data) => setFavourites(data));
  }, []);

  function handleAddFavourites(car) {
    if (!favourites.some((fav) => fav.id === car.id)) {
      setFavourites([...favourites, car]);

      fetch("http://localhost:3000/Favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      });
      alert("car added succesfully");
    }
  }

  return (
    <Router>
      <NavBar />
      <AppRoutes
        favourites={favourites}
        onAddFavourites={handleAddFavourites}
      />
    </Router>
  );
};

export default App;
