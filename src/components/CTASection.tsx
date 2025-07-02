import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 px-4 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">Get your QuickBooks hosting set up in minutes. No credit card required.</p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-white text-primary rounded-xl hover:bg-gray-100 transition font-medium"
        >
          Contact Sales
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
