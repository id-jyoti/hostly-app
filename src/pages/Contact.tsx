import React from 'react';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Hostly</title>
        <meta
          name="description"
          content="Get in touch with the Hostly team. We'd love to help you with QuickBooks hosting solutions."
        />
      </Helmet>

      <div className="py-16 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We're happy to answer questions or provide a demo.
          </p>
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
