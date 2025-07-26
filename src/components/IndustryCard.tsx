import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

type IndustryCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
    >
      <div className="text-4xl text-blue-600 mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default IndustryCard;
