import React from 'react';
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
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-blue-200 px-4">
      {/* Optional Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-white to-blue-200 pointer-events-none z-0" />

      {/* Central Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl text-center backdrop-blur-lg bg-white/60 border border-blue-200 rounded-2xl p-10 shadow-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 drop-shadow-sm mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-700 mb-8">{subtitle}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={ctaPrimary.href}
            className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-700 transition font-semibold shadow"
          >
            {ctaPrimary.text}
          </Link>

          {ctaSecondary && (
            <Link
              to={ctaSecondary.href}
              className="px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition font-medium"
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
