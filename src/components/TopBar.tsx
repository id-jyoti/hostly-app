// src/components/TopBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-[#10131a] text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center gap-4 sm:gap-6">
        <Link to="/login" className="hover:text-white transition">
          Login
        </Link>
        <Link to="/partner" className="hover:text-white transition">
          Become a Partner
        </Link>
        <a
          href="tel:+11234567890"
          className="hidden sm:inline-flex items-center gap-1 hover:text-white transition font-medium"
        >
          +1 (123) 456-7890
        </a>
      </div>
    </div>
  );
};

export default TopBar;
