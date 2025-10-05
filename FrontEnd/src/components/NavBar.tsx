import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using Lucide icons for hamburger

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Ai insights", path: "/Ai" },
    { name: "News", path: "/news" },
  ];

  // 🔹 Handle About scroll logic
  const handleAboutClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      const aboutSection = document.getElementById("about");
      aboutSection?.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false); // Close mobile menu when clicked
  };

  return (
    <nav
      style={{ fontFamily: "poppins , sans-serif" }}
      className="flex max-h-20 glassmorphism-card w-full justify-between shadow-none items-center z-50 px-8 bg-transparent fixed top-0 left-0"
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="/spacies.svg"
          alt="Spacies Logo"
          className="w-50 h-35 flex items-center justify-center"
        />
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex md:flex-row md:space-x-8 md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) =>
          link.name === "About Us" ? (
            <button
              key={link.name}
              onClick={handleAboutClick}
              className="text-[#19191E] text-lg font-normal hover:text-[#6c7670] transition px-4 py-2 md:py-0"
            >
              {link.name}
            </button>
          ) : (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-[#19191E] text-lg font-normal hover:text-[#6c7670] transition px-4 py-2 md:py-0 ${
                  isActive ? "text-[#5E8B22]" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          )
        )}

        {/* Sign Up Button */}
        <Link
          to="/signup"
          onClick={() => setIsOpen(false)}
          className="border border-[#19191E] text-[#19191E] px-4 py-2 rounded-md hover:bg-[#19191E] hover:text-[#b7d9a3] transition mt-2 md:mt-0"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
