import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Courses", path: "/courses" },
    { name: "Placement Support", path: "/placement" },
    { name: "Internship Programs", path: "/internship" },
    { name: "Centre Of Excellence", path: "/coe" },
    { name: "Training & Upskilling", path: "/training" },
    { name: "CodeChef Training", path: "/codechef" },
    { name: "Edutech Solutions", path: "/edutech" },
  ];
  

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 px-6 py-4 z-50">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text" onClick={closeMenu}>
          ICL
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-blue-900 hover:underline transition ${
                isActive(item.path) ? "text-blue-900 font-bold underline" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-900 transition ${
                  isActive(item.path) ? "bg-blue-100 text-blue-900 font-bold" : "text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
