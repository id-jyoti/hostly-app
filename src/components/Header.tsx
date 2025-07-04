import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navItems = [
    {
      label: 'Features',
      path: '/features',
      dropdown: [
        { label: 'QuickBooks Desktop', path: '/features/desktop' },
        { label: 'QuickBooks Enterprise', path: '/features/enterprise' },
      ],
    },
    { label: 'Pricing', path: '/pricing' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/src/assets/logo.jpeg"
            alt="Logo"
            className="h-10 w-auto max-w-[130px] object-contain"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary focus:outline-none"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static bg-white left-0 right-0 top-full sm:top-auto z-40 sm:z-auto py-4 sm:py-0 shadow sm:shadow-none`}
        >
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group px-4 sm:px-0"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button className="flex items-center text-sm font-medium text-white-700 hover:text-primary">
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 w-48 z-50 transition-opacity duration-200 ${
                    showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                      onClick={() => {
                        setIsOpen(false);
                        setShowDropdown(false);
                      }}
                    >
                      {sub.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 sm:px-0 sm:py-0 text-sm font-medium ${
                    isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
