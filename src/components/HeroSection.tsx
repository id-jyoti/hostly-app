// src/components/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/bg.webp";
import { Helmet } from "react-helmet-async";

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
    <>
      <Helmet>
        <link rel="preload" href="/src/assets/bg.webp" as="image" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 bg-black/30">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center will-change-transform"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Effortless <span className="text-pink-600">QuickBooks Hosting</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-900 max-w-2xl mx-auto leading-relaxed mb-10">
            {subtitle ||
              "Experience secure, lightning-fast, and scalable cloud hosting for QuickBooks — backed by expert support, 24/7."}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to={ctaPrimary.href}
              aria-label={`Primary CTA: ${ctaPrimary.text}`}
              className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-xl hover:bg-yellow-300 transition shadow"
            >
              {ctaPrimary.text}
            </Link>

            {ctaSecondary && (
              <Link
                to={ctaSecondary.href}
                aria-label={`Secondary CTA: ${ctaSecondary.text}`}
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-600 text-lg font-medium rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition shadow"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
