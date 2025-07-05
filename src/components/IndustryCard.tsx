import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IndustryCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-200 text-center">
      <div className="text-4xl text-primary mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default IndustryCard;
