import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/deshit-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if link is active
  const isActive = (path) => location.pathname === path;

  // Base classes for all links
  const baseLinkClass = "block transition-colors duration-500 ease-in-out";

  return (
    <header
      className={`transition-all duration-700 ease-in-out
        ${
          scrolled
            ? "sticky top-0 left-0 right-0 bg-white shadow-lg backdrop-blur-md z-50"
            : "absolute top-4 left-0 right-0 bg-transparent z-50"
        }
      `}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4 relative">
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center">
            <img className="w-[153px] h-[32px]" src={logo} alt="DeshIT" />
          </div>

          {/* Hamburger */}
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

          {/* Mobile Logo */}
          <div className="flex-1 flex justify-center lg:hidden">
            <img className="w-[153px] h-[32px]" src={logo} alt="DeshIT" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 absolute right-0">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Products", path: "/products" },
              { name: "Projects", path: "/projects" },
              { name: "Company", path: "/company" },
              { name: "Contact", path: "/contact" },
              { name: "Training", path: "/training" },
            ].map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`${baseLinkClass} ${
                    isActive(path)
                      ? "text-orange-500"
                      : scrolled
                      ? "text-black hover:text-orange-500"
                      : "text-black hover:text-orange-500"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="text-black lg:hidden mt-2 bg-white shadow-lg rounded-lg p-4 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "Projects", path: "/projects" },
              { name: "Company", path: "/company" },
              { name: "Contact", path: "/contact" },
              { name: "Training", path: "/training" },
            ].map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`${baseLinkClass} ${
                  isActive(path) ? "text-orange-500" : "text-gray-600 hover:text-orange-500"
                }`}
                onClick={() => setIsOpen(false)} // close menu on link click
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
