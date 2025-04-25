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
// https://cdn.pixabay.com/photo/2016/03/30/20/20/auto-1291492_640.jpg