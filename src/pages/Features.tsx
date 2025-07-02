import React, { useState } from 'react';
import features from '../data/features';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Features | Hostly</title>
        <meta
          name="description"
          content="Explore all hosting features for secure, scalable QuickBooks access with Hostly."
        />
      </Helmet>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">All Hosting Features</h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From security to scalability, explore all the tools that power your QuickBooks hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
