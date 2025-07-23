import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#12151b] text-white pt-16 pb-8 mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-3">QuickHost</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Secure and scalable QuickBooks hosting trusted by professionals. Designed for performance and peace of mind.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-base font-semibold text-white mb-3">Explore</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
            <li><Link to="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
            <li><Link to="/industries" className="text-gray-400 hover:text-white">Industries</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-base font-semibold text-white mb-3">Contact</h5>
          <p className="text-sm text-gray-400 mb-2">
            Email: <a href="mailto:support@quickhost.com" className="text-blue-300 hover:text-white">support@quickhost.com</a>
          </p>
          <p className="text-sm text-gray-400">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h5 className="text-base font-semibold text-white mb-3">Connect</h5>
          <div className="flex items-center space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" aria-label="Website">
              <Globe className="w-5 h-5" />
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Subscribe for updates</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 mb-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="w-full bg-primary text-white py-2 rounded hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} QuickHost. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
