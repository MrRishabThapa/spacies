import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./pages/Hero";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LatestNews from "./pages/News";
import Chatbot from "./pages/ChatBot";

const AppContent = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Ai" element={<Chatbot />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="font-poppins">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
