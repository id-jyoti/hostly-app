// src/components/StepIllustration.tsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Choose a Hosting Plan',
    description: 'Select the plan that best suits your business needs.',
  },
  {
    id: 2,
    title: 'Setup Your QuickBooks',
    description: 'We’ll help migrate and set up your QuickBooks environment securely.',
  },
  {
    id: 3,
    title: 'Access from Anywhere',
    description: 'Start managing your finances from any device, anywhere.',
  },
];

const StepIllustration = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">How It Works</h2>
        <p className="text-gray-600 mt-2">
          Just three easy steps to get started with QuickHost
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-light border border-gray-200 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold text-4xl mb-4">{`0${step.id}`}</div>
            <h3 className="text-xl font-semibold text-dark mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepIllustration;
