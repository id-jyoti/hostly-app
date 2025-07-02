import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-gray-600 mt-2">We're happy to answer questions or provide a demo.</p>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
