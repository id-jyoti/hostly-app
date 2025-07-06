import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const FeatureDesktop = () => {
  return (
    <>
      <Helmet>
        <title>QuickBooks Desktop | Hostly</title>
        <meta
          name="description"
          content="Secure, scalable QuickBooks Desktop hosting with anytime-anywhere access and expert support."
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <FontAwesomeIcon icon={faDesktop} className="text-5xl text-primary mb-4" />
          <h1 className="text-4xl font-bold text-primary">QuickBooks Desktop Hosting</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Run your QuickBooks Desktop in the cloud with enterprise-grade security, remote access,
            and 24/7 expert support — no more IT headaches.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-700 text-sm max-w-4xl mx-auto">
          <li>✔️ Remote access from any device</li>
          <li>✔️ Daily backups & disaster recovery</li>
          <li>✔️ Compatible with all versions</li>
          <li>✔️ Easy migration & onboarding</li>
          <li>✔️ Bank-level security (SSL, firewall, encryption)</li>
          <li>✔️ Multi-user collaboration in real-time</li>
        </ul>
      </section>
    </>
  );
};

export default FeatureDesktop;
