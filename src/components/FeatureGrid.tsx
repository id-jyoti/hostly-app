import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import features from '../data/features';

const FeatureGrid = () => {
  return (
    <section className="py-8 px-2 sm:px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">Powerful Features</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Everything you need to host and run QuickBooks efficiently and securely.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="text-primary text-xl mb-3">
              <FontAwesomeIcon icon={feature.icon} size="lg" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-1">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
