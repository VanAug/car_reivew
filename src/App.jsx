import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { AuthProvider } from "./components/context/AuthContext";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
