// src/pages/Home.tsx
import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import QuickBooksEcosystem from "../components/QuickBooksEcosystem";

// Lazy-loaded components
const FeatureGrid = lazy(() => import("../components/FeatureGrid"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const CTASection = lazy(() => import("../components/CTASection"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hostly | Secure QuickBooks Hosting</title>
        <meta
          name="description"
          content="Hostly offers secure, scalable, and always-available QuickBooks hosting for businesses of all sizes."
        />
        {/* ❌ Removed image preload — handled in index.html only */}
      </Helmet>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection
          title="Effortless QuickBooks Hosting"
          subtitle="Secure. Reliable. Always Accessible."
          ctaPrimary={{ text: "Get Started", href: "/signup" }}
          ctaSecondary={{ text: "View Pricing", href: "/pricing" }}
        />

        {/* Lazy Loaded FeatureGrid */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <Suspense fallback={<div className="text-center py-10">Loading features...</div>}>
              <FeatureGrid />
            </Suspense>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <QuickBooksEcosystem />
          </div>
        </section>

        {/* Lazy Loaded Testimonials */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Suspense fallback={<div className="text-center py-10">Loading testimonials...</div>}>
              <Testimonials />
            </Suspense>
          </div>
        </section>

        {/* Lazy Loaded CTA */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Suspense fallback={<div className="text-center py-10">Loading CTA...</div>}>
              <CTASection />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
