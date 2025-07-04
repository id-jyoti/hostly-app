import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/features', label: 'Features' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/industries', label: 'Industries' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* ✅ Logo using static path */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/src/assets/logo.jpeg"
            alt="Logo"
            className="h-10 w-auto max-w-[130px] object-contain"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
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

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex space-x-0 sm:space-x-6 sm:items-center sm:space-y-0 absolute sm:static bg-white left-0 right-0 top-full sm:top-auto z-40 sm:z-auto py-4 sm:py-0 shadow sm:shadow-none`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 sm:px-0 sm:py-0 text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
