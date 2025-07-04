import React from 'react';

export interface IndustryCardProps {
  icon: string;
  name: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, name, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-dark mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default IndustryCard;
