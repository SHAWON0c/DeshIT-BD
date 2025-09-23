import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/deshit-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`transition-all duration-700 ease-in-out
    ${scrolled 
      ? "sticky top-0 left-0 right-0 bg-white shadow-lg backdrop-blur-md z-50" 
      : "absolute top-4 left-0 right-0 bg-transparent z-50"
    }
  `}
>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4 relative">
          {/* ===== Desktop Logo (Left) ===== */}
          <div className="hidden lg:flex items-center">
            <img className="w-[153px] h-[32px]" src={logo} alt="DeshIT" />
          </div>

          {/* ===== Hamburger (Left on Mobile) ===== */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none absolute left-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* ===== Mobile Logo (Centered) ===== */}
          <div className="flex-1 flex justify-center lg:hidden">
            <img className="w-[153px] h-[32px]" src={logo} alt="DeshIT" />
          </div>

          {/* ===== Desktop Menu (Right Side) ===== */}
          <ul className="hidden lg:flex items-center space-x-8 absolute right-0">
            <li>
              <Link
                to="/"
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-800" : "text-black hover:text-gray-200"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-800" : "text-black hover:text-gray-200"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="text-black font-medium"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-800" : "text-black hover:text-gray-200"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-800" : "text-black hover:text-gray-200"
                }`}
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-800" : "text-black hover:text-gray-200"
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/training"
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-800" : "text-black hover:text-gray-200"
                }`}
              >
                Training
              </Link>
            </li>
          </ul>
        </nav>

        {/* ===== Mobile Menu Dropdown ===== */}
        {isOpen && (
          <div className=" text-black lg:hidden mt-2 bg-white shadow-lg rounded-lg p-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link to="/products" className="block text-red-500 font-medium">
              Products
            </Link>
            <Link to="/projects" className="block text-gray-600 hover:text-gray-800">
              Projects
            </Link>
            <Link to="/company" className="block text-gray-600 hover:text-gray-800">
              Company
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-gray-800">
              Contact
            </Link>
            <Link to="/training" className="block text-gray-600 hover:text-gray-800">
              Training
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
