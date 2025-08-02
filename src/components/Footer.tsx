// src/components/Footer.tsx
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
      className="bg-[#0f1117] text-white pt-20 pb-10 mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-white">QuickHost</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Secure and scalable QuickBooks hosting trusted by professionals. Built for reliability, access, and growth.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h5 className="text-base font-semibold text-white mb-4">Explore</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
            <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-base font-semibold text-white mb-4">Contact Us</h5>
          <p className="text-sm text-gray-400 mb-2">
            Email: <a href="mailto:support@quickhost.com" className="text-blue-300 hover:text-white">support@quickhost.com</a>
          </p>
          <p className="text-sm text-gray-400">Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h5 className="text-base font-semibold text-white mb-4">Stay Connected</h5>
          <div className="flex items-center space-x-4 mb-5">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Website">
              <Globe className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-400 mb-2">Subscribe for product news & insights</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} QuickHost. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
