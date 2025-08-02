// src/components/FeatureGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import features from '../data/features';

const FeatureGrid = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-5">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Powerful Features Built for You
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Everything you need to host and run QuickBooks securely, reliably, and at scale.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
         <motion.div
           key={feature.id}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.1, duration: 0.5 }}
           viewport={{ once: true }}
           className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-start will-change-transform"
         >
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 text-xl mb-4">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
