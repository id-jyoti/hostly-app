import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import QuickBooksEcosystem from '../components/QuickBooksEcosystem';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import { Helmet } from 'react-helmet-async';

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

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <HeroSection
            title="Effortless QuickBooks Hosting"
            subtitle="Secure. Reliable. Always Accessible."
            ctaPrimary={{ text: "Get Started", href: "/signup" }}
            ctaSecondary={{ text: "View Pricing", href: "/pricing" }}
          />
        </section>

        {/* Feature Grid */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <FeatureGrid />
          </div>
        </section>

        {/* QuickBooks Ecosystem */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <QuickBooksEcosystem />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <Testimonials />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-900 py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <CTASection />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
