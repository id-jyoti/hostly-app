import React, { useState } from 'react';
import pricingPlans from '../data/PricingPlans';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';

const Pricing = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">Pricing Plans</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Simple pricing. No hidden fees. Choose a plan that fits your needs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            planName={plan.name}
            price={plan.price}
            features={plan.features}
            highlighted={plan.highlighted}
          />
        ))}
      </div>

      <div className="mt-20">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default Pricing;
