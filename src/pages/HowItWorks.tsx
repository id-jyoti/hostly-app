// src/pages/HowItWorks.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faCloudUploadAlt,
  faUserShield,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faFileAlt,
    title: '1. Sign Up',
    description: 'Create your Hostly account with a few quick details.',
  },
  {
    icon: faCloudUploadAlt,
    title: '2. Upload Your Files',
    description: 'Securely upload your QuickBooks data to our cloud servers.',
  },
  {
    icon: faUserShield,
    title: '3. Configure Access',
    description: 'Set user roles and permissions for your team.',
  },
  {
    icon: faChartLine,
    title: '4. Start Working',
    description: 'Access QuickBooks from anywhere and enjoy seamless performance.',
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | Hostly</title>
        <meta
          name="description"
          content="Understand how Hostly works in a few easy steps — from signup to cloud-hosted QuickBooks access."
        />
      </Helmet>

      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">How It Works</h1>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          A simple 4-step process to get your QuickBooks hosted securely in the cloud.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <FontAwesomeIcon icon={step.icon} className="text-4xl text-primary mb-4" />
              <h3 className="text-lg font-semibold text-dark mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
