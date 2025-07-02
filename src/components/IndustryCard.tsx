import React, { useState } from 'react';
type Props = {
  icon: string;
  title: string;
  description: string;
};

const IndustryCard = ({ icon, title, description }: Props) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default IndustryCard;
