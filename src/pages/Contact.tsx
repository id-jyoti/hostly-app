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
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">We're Here to Help</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about plans, pricing, onboarding, or anything else — our team is standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone Support */}
          <div className="p-6 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition text-center">
            <FontAwesomeIcon icon={faPhone} className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">24/7 availability from our expert support team.</p>
            <a
              href="tel:+11234567890"
              className="inline-block px-5 py-2 bg-primary text-white rounded hover:bg-blue-700 transition"
            >
              +1 (123) 456-7890
            </a>
          </div>

          {/* Live Chat */}
          <div className="p-6 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition text-center">
            <FontAwesomeIcon icon={faComments} className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Talk to an agent instantly for quick help.</p>
            <a
              href="#"
              className="inline-block px-5 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              Start Chat
            </a>
          </div>

          {/* Email & Address */}
          <div className="p-6 border rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition text-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email & Location</h3>
            <p className="text-gray-600 mb-2">
              support@quickhost.com
            </p>
            <p className="text-gray-600">
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
