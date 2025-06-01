import React, { useState } from 'react';
import { FiHome, FiUser, FiLogIn, FiLogOut, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle this for auth state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://via.placeholder.com/150x50?text=Logo"
                alt="Your Logo"
              />
              <span className="ml-2 text-xl font-semibold text-gray-800">BrandName</span>
            </a>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <FiHome className="mr-1" /> Home
            </a>

            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                aria-expanded={isDropdownOpen}
              >
                <FiUser className="mr-1" /> Account <FiChevronDown className="ml-1" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {!isLoggedIn ? (
                    <>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onClick={toggleAuth}
                      >
                        <FiLogIn className="mr-2" /> Sign In
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <FiUser className="mr-2" /> Register
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onClick={toggleAuth}
                      >
                        <FiLogOut className="mr-2" /> Sign Out
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      >
                        <FiUser className="mr-2" /> Profile
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
              aria-expanded={isDropdownOpen}
            >
              <FiUser className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isDropdownOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 flex items-center"
            >
              <FiHome className="mr-2" /> Home
            </a>

            {!isLoggedIn ? (
              <>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 flex items-center"
                  onClick={toggleAuth}
                >
                  <FiLogIn className="mr-2" /> Sign In
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 flex items-center"
                >
                  <FiUser className="mr-2" /> Register
                </a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 flex items-center"
                  onClick={toggleAuth}
                >
                  <FiLogOut className="mr-2" /> Sign Out
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 flex items-center"
                >
                  <FiUser className="mr-2" /> Profile
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;