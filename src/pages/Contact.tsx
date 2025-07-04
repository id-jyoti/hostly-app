import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComments, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Hostly</title>
        <meta name="description" content="Get in touch with Hostly via call or live chat." />
      </Helmet>

      <section className="py-16 px-4 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-gray-600">We're here to help — reach us via phone or live chat.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Call Us */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-md transition">
            <FontAwesomeIcon icon={faPhone} className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Our support team is available 24/7.</p>
            <a
              href="tel:+11234567890"
              className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition"
            >
              +1 (123) 456-7890
            </a>
          </div>

          {/* Live Chat */}
          <div className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-md transition">
            <FontAwesomeIcon icon={faComments} className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-3">Start a live chat with a support agent now.</p>
            <a
              href="#"
              className="inline-block px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              Start Chat
            </a>
          </div>
        </div>

        {/* Optional Extra Info */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            support@hostly.com
          </p>
          <p className="mt-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            123 Hosting Lane, Tech City, USA
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
