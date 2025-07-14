import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1f2937] text-white py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl text-white font-extrabold leading-tight mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Set up your QuickBooks hosting in minutes — no credit card required.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold shadow hover:bg-gray-200 transition"
        >
          Contact Sales
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
