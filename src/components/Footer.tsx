import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-primary mb-2">QuickHost</h4>
          <p className="text-sm">Secure, reliable QuickBooks hosting for your business.</p>
        </div>

        <div>
          <h5 className="font-medium mb-2">Pages</h5>
          <ul className="space-y-1 text-sm">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium mb-2">Contact</h5>
          <p className="text-sm">Email: support@quickhost.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-primary"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary"><Globe className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} QuickHost. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
