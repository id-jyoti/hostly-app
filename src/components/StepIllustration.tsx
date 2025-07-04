import React from 'react';
import { steps } from '../data/steps';
import { motion } from 'framer-motion';

const StepIllustration = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">How It Works</h2>
        <p className="text-gray-600 mt-2">Just three easy steps to get started with QuickHost</p>
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
