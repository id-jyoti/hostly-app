import React, { useState } from 'react';
import { motion } from 'framer-motion';

const QuickBooksEcosystem = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Connected QuickBooks Ecosystem
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Easily integrate QuickBooks with your favorite tools and services. All hosted securely.
        </p>

        <motion.img
          src="/assets/quickbooks-ecosystem.png" // Replace with your actual image
          alt="QuickBooks Ecosystem"
          className="mx-auto w-full max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default QuickBooksEcosystem;
