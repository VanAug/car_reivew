import React from "react";
import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  );
};

export default App;
