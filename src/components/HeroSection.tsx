import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  subtitle: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
};

const HeroSection = ({ title, subtitle, ctaPrimary, ctaSecondary }: Props) => {
  return (
    <section className="bg-background py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to={ctaPrimary.href}
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-700 transition"
          >
            {ctaPrimary.text}
          </Link>
          {ctaSecondary && (
            <Link
              to={ctaSecondary.href}
              className="px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition"
            >
              {ctaSecondary.text}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
