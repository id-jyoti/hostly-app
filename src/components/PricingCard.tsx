import React from 'react';

type Props = {
  planName: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

const PricingCard: React.FC<Props> = ({ planName, price, features, highlighted }) => {
  return (
    <div
      className={`relative p-8 border rounded-2xl shadow-md transition-all duration-300 ${
        highlighted
          ? 'border-primary bg-blue-50 scale-[1.03] ring-2 ring-primary'
          : 'bg-white hover:shadow-lg'
      }`}
    >
      {highlighted && (
        <span className="absolute top-4 right-4 text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full shadow">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold text-blue-900 mb-2">{planName}</h3>
      <p className="text-4xl font-extrabold text-gray-800 mb-4">{price}</p>

      <ul className="text-sm text-gray-700 space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
