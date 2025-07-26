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
    <section className="py-24 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mt-3 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Just three easy steps to get started with QuickHost.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-extrabold text-4xl mb-4">{`0${step.id}`}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StepIllustration;
