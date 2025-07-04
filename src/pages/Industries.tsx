import React from 'react';
import IndustryCard from '../components/IndustryCard';
import industries from '../data/industries';
import { Helmet } from 'react-helmet-async';

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries | QuickHost</title>
        <meta name="description" content="Explore QuickBooks hosting solutions tailored for your industry." />
      </Helmet>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">Industries We Serve</h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Discover how QuickHost supports a variety of industries with reliable cloud hosting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              name={industry.title} // ✅ FIXED: Using title as name
              description={industry.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Industries;
