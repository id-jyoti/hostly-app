import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faServer,
  faUsers,
  faChartLine,
  faSync,
  faPuzzlePiece,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const FeatureEnterprise = () => {
  return (
    <>
      <Helmet>
        <title>QuickBooks Enterprise Hosting | QuickHost</title>
        <meta
          name="description"
          content="Enterprise-grade QuickBooks hosting with scalable infrastructure, custom integrations, and dedicated support."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <FontAwesomeIcon icon={faServer} className="text-5xl text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QuickBooks Enterprise Hosting
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built for large teams and complex workflows — reliable, fast, and ready for anything.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: faUsers,
              title: 'Unlimited Users & Locations',
              desc: 'Easily collaborate across teams and departments from any location.',
            },
            {
              icon: faChartLine,
              title: 'High-Speed Performance',
              desc: 'Optimized infrastructure ensures smooth and lag-free usage.',
            },
            {
              icon: faServer,
              title: 'Dedicated Infrastructure',
              desc: 'Get your own isolated environment with enhanced performance and security.',
            },
            {
              icon: faPuzzlePiece,
              title: 'Custom Integrations',
              desc: 'Connect QuickBooks with CRMs, payroll, and your unique tools.',
            },
            {
              icon: faSync,
              title: 'Real-Time Collaboration',
              desc: 'Work together simultaneously with no file conflicts.',
            },
            {
              icon: faClock,
              title: '99.99% Uptime Guarantee',
              desc: 'Backed by SLA and constant monitoring to ensure availability.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <FontAwesomeIcon icon={item.icon} className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Request a Custom Quote
          </a>
          <p className="text-xs text-gray-500 mt-2">Talk to our enterprise team today</p>
        </div>
      </section>
    </>
  );
};

export default FeatureEnterprise;
