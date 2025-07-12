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
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/src/assets/logo.jpeg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-gray-600 hover:text-primary focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Items */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:items-center sm:space-x-6 absolute sm:static bg-white left-0 right-0 top-full sm:top-auto z-40 sm:z-auto px-6 sm:px-0 pb-6 sm:pb-0`}
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
                  className="flex items-center text-sm font-medium text-white hover:text-primary"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <div
                  className={`absolute left-0 mt-2 bg-white border rounded-lg shadow-md py-2 w-52 z-50 transition-all duration-200 ${
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
