// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: 'Features',
      dropdown: [
        { label: 'QuickBooks Desktop', path: '/features/desktop' },
        { label: 'QuickBooks Enterprise', path: '/features/enterprise' },
      ],
    },
    { label: 'Pricing', path: '/pricing' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQs', path: '/faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/src/assets/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-700 hover:text-primary"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:gap-6 absolute sm:static bg-white sm:bg-transparent left-0 right-0 top-full sm:top-auto px-6 sm:px-0 py-4 sm:py-0 shadow sm:shadow-none`}
        >
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-primary transition"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 transition-all duration-200 ${
                    activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-primary"
                      onClick={() => {
                        setIsOpen(false);
                        setActiveDropdown(null);
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
                  `block px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          )}

          {/* CTA Links */}
          <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              to="/get-started"
              className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
