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
    { label: 'FAQs', path: '/faq' },
    { label: 'Login', path: '/login' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo only — no brand text */}
        <Link to="/" className="flex items-center">
          <img src="/src/assets/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-green-200 hover:text-primary"
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
          } sm:flex sm:items-center sm:gap-6 absolute sm:static left-0 right-0 top-full sm:top-auto bg-white sm:bg-transparent px-6 sm:px-0 py-4 sm:py-0 shadow sm:shadow-none`}
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
                  className="flex items-center text-sm font-medium text-blue-200 hover:text-primary transition"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg py-2 transition-all duration-200 ${
                    activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {item.dropdown.map((sub) => (
                    <NavLink
                      key={sub.path}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
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

          {/* CTA */}
          <Link
            to="/get-started"
            className="mt-4 sm:mt-0 sm:ml-4 inline-block px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
