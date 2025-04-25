import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./components/context/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
