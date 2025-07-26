import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-desktop.png";

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
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-25 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover object-center mix-blend-overlay"
        />
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-blue-100 drop-shadow">
          Effortless{" "}
          <span className="text-yellow-400">QuickBooks Hosting</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
          {subtitle ||
            "Experience secure, lightning-fast, and scalable cloud hosting for QuickBooks — backed by expert support, 24/7."}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to={ctaPrimary.href}
            className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold text-lg rounded-xl hover:bg-yellow-300 transition shadow-lg"
          >
            {ctaPrimary.text}
          </Link>

          {ctaSecondary && (
            <Link
              to={ctaSecondary.href}
              className="px-8 py-3 border-2 border-yellow-400 text-yellow-300 text-lg font-medium rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition shadow-md"
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
