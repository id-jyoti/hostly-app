import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const FeatureEnterprise = () => {
  return (
    <>
      <Helmet>
        <title>QuickBooks Enterprise | Hostly</title>
        <meta
          name="description"
          content="Host QuickBooks Enterprise with scalable infrastructure, top-tier security, and seamless multi-user access."
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <FontAwesomeIcon icon={faServer} className="text-5xl text-primary mb-4" />
          <h1 className="text-4xl font-bold text-primary">QuickBooks Enterprise Hosting</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Power your business with the flexibility of QuickBooks Enterprise in the cloud —
            secure, fast, and fully managed.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-700 text-sm max-w-4xl mx-auto">
          <li>✔️ Unlimited users & locations</li>
          <li>✔️ High-speed performance</li>
          <li>✔️ Dedicated server infrastructure</li>
          <li>✔️ Real-time collaboration</li>
          <li>✔️ Custom integrations (CRM, payroll, etc.)</li>
          <li>✔️ SLA-backed 99.99% uptime guarantee</li>
        </ul>
      </section>
    </>
  );
};

export default FeatureEnterprise;
