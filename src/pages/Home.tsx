import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import QuickBooksEcosystem from '../components/QuickBooksEcosystem';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      <HeroSection
        title="Effortless QuickBooks Hosting"
        subtitle="Secure. Reliable. Always Accessible."
        ctaPrimary={{ text: "Get Started", href: "/contact" }}
        ctaSecondary={{ text: "View Pricing", href: "/pricing" }}
      />

      <FeatureGrid />
      <QuickBooksEcosystem />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
