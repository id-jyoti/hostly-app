import React, { useState } from 'react';
import IndustryCard from '../components/IndustryCard';
import industries from '../data/industries';

const Industries = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">Industries We Serve</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Tailored hosting for the industries that rely on QuickBooks most.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {industries.map((ind) => (
          <IndustryCard
            key={ind.id}
            icon={ind.icon}
            title={ind.title}
            description={ind.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Industries;
