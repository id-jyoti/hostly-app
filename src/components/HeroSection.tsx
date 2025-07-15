import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-desktop.png";

// ✅ Proper TypeScript props definition
type HeroSectionProps = {
  title: string;
  subtitle?: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Decorative Image */}
      <div className="absolute inset-0 opacity-20 z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover object-center mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-100 drop-shadow-md">
          Effortless <span className="text-yellow-300">QuickBooks Hosting</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          {subtitle ||
            "Experience secure, fast, and reliable hosting with 24/7 support and seamless access from anywhere."}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={ctaPrimary.href}
            className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl hover:bg-yellow-300 transition shadow"
          >
            {ctaPrimary.text}
          </Link>

          {ctaSecondary && (
            <Link
              to={ctaSecondary.href}
              className="px-6 py-3 border border-yellow-400 text-yellow-300 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition font-medium"
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
