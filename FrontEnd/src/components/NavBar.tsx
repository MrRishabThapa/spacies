import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Ai insights", path: "/Ai" },
    { name: "News", path: "/news" },
  ];

  return (
    <nav className="flex justify-between items-center  px-8 bg-transparent">
      <div className="flex items-center space-x-4">
        <img
          src="/spacies.svg"
          alt="DNA"
          className="w-50 h-35  flex items-center justify-center"
        />
      </div>

      <div className="flex space-x-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-[#19191E]-lg font-normal hover:text-[#6c7670] ${
                isActive ? "text-blue-950 " : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <Link
        to="/signup"
        className="border px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
      >
        Sign up
      </Link>
    </nav>
  );
};

export default Navbar;
