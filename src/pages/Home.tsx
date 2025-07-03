import React, { useState } from 'react';
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
    </>
  );
};

export default Home;
