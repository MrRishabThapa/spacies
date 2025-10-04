import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./pages/Hero";
import Auth from "./pages/Auth";
function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/about"
            element={<div className="p-10">About Page</div>}
          />
          <Route
            path="/dashboard"
            element={<div className="p-10">Dashboard Page</div>}
          />
          <Route path="/Ai" element={<div className="p-10">AI Page</div>} />
          <Route path="/news" element={<div className="p-10">News Page</div>} />

          <Route path="/signup" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
