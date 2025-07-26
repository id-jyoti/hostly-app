import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import QuickBooksEcosystem from '../components/QuickBooksEcosystem';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hostly | Secure QuickBooks Hosting</title>
        <meta
          name="description"
          content="Hostly offers secure, scalable, and always-available QuickBooks hosting for businesses of all sizes."
        />
      </Helmet>

      <main className="overflow-x-hidden">
        {/* ✅ Hero */}
        <HeroSection
          title="Effortless QuickBooks Hosting"
          subtitle="Secure. Reliable. Always Accessible."
          ctaPrimary={{ text: "Get Started", href: "/signup" }}
          ctaSecondary={{ text: "View Pricing", href: "/pricing" }}
        />

        {/* ✅ Features */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
              Why Businesses Choose Hostly
            </h2>
            <FeatureGrid />
          </div>
        </section>

        {/* ✅ QuickBooks Ecosystem */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <QuickBooksEcosystem />
          </div>
        </section>

        {/* ✅ Testimonials */}
        <section className="bg-blue-50 py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
              What Our Clients Say
            </h2>
            <Testimonials />
          </div>
        </section>

        {/* ✅ Final CTA */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <CTASection />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
