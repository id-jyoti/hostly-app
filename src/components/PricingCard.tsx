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
      className={`p-6 border rounded-xl shadow-sm transition hover:shadow-md ${
        highlighted ? 'border-primary bg-blue-50 scale-[1.03]' : 'bg-white'
      }`}
    >
      <h3 className="text-xl font-bold text-primary mb-2">{planName}</h3>
      <p className="text-3xl font-semibold mb-4">{price}</p>
      <ul className="text-sm space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>
      <button className="w-full py-2 bg-primary text-white rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
