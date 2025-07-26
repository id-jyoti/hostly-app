import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faCloudUploadAlt,
  faUserShield,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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

      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h1>
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            A simple 4-step process to get your QuickBooks hosted securely in the cloud.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl text-blue-600 mb-4">
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
