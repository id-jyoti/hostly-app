import React from 'react';
import industries from '../data/industries';
import IndustryCard from '../components/IndustryCard';
import { Helmet } from 'react-helmet-async';

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries | Hostly</title>
        <meta
          name="description"
          content="Hostly serves accounting, construction, retail, and healthcare industries with secure QuickBooks hosting."
        />
      </Helmet>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">Industries We Serve</h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            QuickBooks hosting tailored to industry-specific workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Industries;
