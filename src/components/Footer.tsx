import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1c1f26] text-white pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold mb-3 text-white">QuickHost</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Secure and scalable QuickBooks hosting trusted by businesses worldwide. Built for performance and peace of mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-base font-semibold mb-3 text-white">Explore</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/features" className="hover:text-white transition">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
            <li><Link to="/industries" className="hover:text-white transition">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h5 className="text-base font-semibold mb-3 text-white">Get in Touch</h5>
          <p className="text-sm text-gray-300">Email: <a href="mailto:support@quickhost.com" className="hover:text-white">support@quickhost.com</a></p>
          <p className="text-sm text-gray-300">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} QuickHost. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
