// src/components/TopBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-[#10131a] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end gap-6 items-center">
        <Link to="/login" className="hover:text-white transition">
          Login
        </Link>
        <Link to="/partner" className="hover:text-white transition">
          Become a Partner
        </Link>
        <a
          href="tel:+11234567890"
          className="hover:text-white transition hidden sm:inline-block"
        >
          +1 (123) 456-7890
        </a>
      </div>
    </div>
  );
};

export default TopBar;
