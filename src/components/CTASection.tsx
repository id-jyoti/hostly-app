import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-400 via-blue-950 to bg-gray-800 text-white py-24 px-6 overflow-hidden">
      {/* Background SVG Pattern (optional) */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('/assets/bg-pattern.svg')] bg-cover bg-center" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center will-change-transform"
        >

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
          <span className="text-yellow-300">Ready</span> to Elevate Your QuickBooks Experience?
        </h2>
        <p className="text-lg text-gray-200 mb-10">
          Launch your secure QuickBooks hosting today — no setup fees, no hidden costs.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow hover:bg-yellow-300 transition"
          >
            Talk to Sales
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-3 border border-yellow-400 text-yellow-300 font-medium rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            View Pricing
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
