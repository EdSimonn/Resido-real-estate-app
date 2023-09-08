/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 items-center">
            {/* logo */}
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold text-xl">Resido</span>
              </a>
            </div>

            {/* primary nav */}
            <ul className="hidden md:flex items-center space-x-1">
              <li className="py-5 px-3 text-md text-gray-700 hover:text-gray-900">
                <Link to="/">Home</Link>
              </li>
              <li className="py-5 px-3 text-md text-gray-700 hover:text-gray-900">
                <Link to="/listings">Listings</Link>
              </li>
              <li className="py-5 px-3 text-md text-gray-700 hover:text-gray-900">
                Features
              </li>
            </ul>
          </div>

          {/* mobile button and login/signup */}
          <div className=" flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <a href="" className="py-5 px-3 text-md">
                Login
              </a>
              <a
                href=""
                className="py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded transition duration-300 text-md"
              >
                Register
              </a>
            </div>

            <button
              className="md:hidden flex ml-auto"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden px-9">
          <li className="py-2 text-md text-gray-700 hover:text-gray-900">
            <Link to="/">Home</Link>
          </li>
          <li className="py-2 text-md text-gray-700 hover:text-gray-900">
            <Link to="/listings">Listings</Link>
          </li>
          <li className="py-2 text-md text-gray-700 hover:text-gray-900">
            Features
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.tsx
// import React, { useState } from 'react';

// const Navbar: React.FC = () => {
// const [isOpen, setIsOpen] = useState(false);

// const toggleNavbar = () => {
//   setIsOpen(!isOpen);
// };
