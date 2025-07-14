import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faComments,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | QuickHost</title>
        <meta name="description" content="Get in touch with QuickHost — 24/7 support via phone, chat, or email." />
      </Helmet>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact QuickHost</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? Our team is available 24/7 to help you get started or solve any issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Call Us */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition text-center">
            <FontAwesomeIcon icon={faPhone} className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-sm text-gray-600 mb-4">24/7 access to our expert support team.</p>
            <a
              href="tel:+11234567890"
              className="inline-block bg-primary text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              +1 (123) 456-7890
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition text-center">
            <FontAwesomeIcon icon={faComments} className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-sm text-gray-600 mb-4">Get help instantly via live chat support.</p>
            <a
              href="#"
              className="inline-block border border-primary text-primary px-5 py-2 rounded hover:bg-primary hover:text-white transition"
            >
              Start Chat
            </a>
          </div>

          {/* Email & Address */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition text-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email & Location</h3>
            <p className="text-sm text-gray-600 mb-2">
              <a href="mailto:support@quickhost.com" className="hover:text-primary transition">
                support@quickhost.com
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              123 Hosting Lane, Tech City, USA
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
