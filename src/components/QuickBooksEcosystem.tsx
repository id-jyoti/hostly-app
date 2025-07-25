// src/components/QuickBooksEcosystem.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const QuickBooksEcosystem = () => {
  return (
    <>
      <Helmet>
        <title>QuickBooks Ecosystem | Hostly</title>
        <meta
          name="description"
          content="Integrate QuickBooks with your favorite tools through the Hostly ecosystem, securely and efficiently."
        />
      </Helmet>

      <div className="px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Connected QuickBooks Ecosystem
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Easily integrate QuickBooks with your favorite tools and services. All hosted securely.
          </p>

          <motion.img
            src="/assets/quickbooks.png"
            alt="QuickBooks Ecosystem"
            className="mx-auto w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </>
  );
};

export default QuickBooksEcosystem;
