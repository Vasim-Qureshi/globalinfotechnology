// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white opacity-90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">
          <a href="/">
            global<span className="text-blue-600">infotechnology</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="block hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="block hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#support" className="hover:text-blue-600">
              Support
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-blue-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#partner" className="block hover:text-blue-600">
              Partner
            </a>
          </li>
          <li>
            <a href="#about" className="block hover:text-blue-600">
              AboutUs
            </a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <a href="#" className="block hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="block hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="block hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#support" className="block hover:text-blue-600">
                Support
              </a>
            </li>
            <li>
              <a href="#blog" className="block hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#partner" className="block hover:text-blue-600">
                Partner
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-blue-600">
                AboutUs
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
