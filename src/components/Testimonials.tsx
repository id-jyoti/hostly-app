import React, { useState } from 'react';
import testimonials from '../data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What Our Clients Say</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-xl shadow"
          >
            <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
            <p className="font-semibold text-primary">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          className="mt-6 px-5 py-2 border text-primary border-primary rounded-xl hover:bg-primary hover:text-white transition"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
