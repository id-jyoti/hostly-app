import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faShieldAlt,
  faCloud,
  faUsers,
  faSyncAlt,
  faServer,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const FeatureDesktop = () => {
  return (
    <>
      <Helmet>
        <title>QuickBooks Desktop Hosting | QuickHost</title>
        <meta
          name="description"
          content="Secure and scalable QuickBooks Desktop cloud hosting. Remote access, data protection, and expert support — anytime, anywhere."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <FontAwesomeIcon icon={faDesktop} className="text-5xl text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QuickBooks Desktop Hosting
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Run your QuickBooks Desktop in the cloud with bank-level security, real-time access, and stress-free support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: faCloud,
              title: 'Cloud-Based Access',
              desc: 'Access your QuickBooks Desktop securely from anywhere — anytime.',
            },
            {
              icon: faShieldAlt,
              title: 'Enterprise-Grade Security',
              desc: 'Data is protected with encryption, firewalls, and intrusion detection.',
            },
            {
              icon: faUsers,
              title: 'Multi-User Collaboration',
              desc: 'Seamlessly work with your team in real-time on the same files.',
            },
            {
              icon: faSyncAlt,
              title: 'Daily Backups & Recovery',
              desc: 'Automatic backups and disaster recovery ensure peace of mind.',
            },
            {
              icon: faServer,
              title: 'High Availability Infrastructure',
              desc: '99.99% uptime with high-speed server infrastructure and scaling.',
            },
            {
              icon: faLock,
              title: 'Version Compatibility',
              desc: 'Supports all versions of QuickBooks Desktop without hassle.',
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
            href="/signup"
            className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Start Your Free Trial
          </a>
          <p className="text-xs text-gray-500 mt-2">No credit card required</p>
        </div>
      </section>
    </>
  );
};

export default FeatureDesktop;
