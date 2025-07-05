import React from 'react';
import { Helmet } from 'react-helmet-async';
import industries from '../data/industries';
import IndustryCard from '../components/IndustryCard';

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries | Hostly</title>
        <meta
          name="description"
          content="Explore how Hostly supports industries with specialized QuickBooks solutions."
        />
      </Helmet>

      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Industries We Support</h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          From accounting firms to enterprise operations, we power every QuickBooks setup you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Industries;
