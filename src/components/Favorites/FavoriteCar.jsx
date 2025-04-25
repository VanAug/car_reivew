import { useEffect, useState } from "react";
import Search from "../Search/Search";
import "./favorite.css";
import CarCard from "../Car/CarCard";

const FavoriteCar = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Favorites")
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, []);

  const displayFavorites = favorites.map((favorite) => (
    <CarCard
      car={favorite}
      key={favorite.id}
      view="favorite"
    />
  ))
  return (
    <div>
      <Search />
      <h2 className="heading">My Favourite Cars</h2>
      <div className="favGrid">
        <div className="favouriteContainer">{displayFavorites}</div>
      </div>
    </div>
  );
};

export default FavoriteCar;
