import React from 'react';
import { Helmet } from 'react-helmet-async';
import faqs from '../data/faqs';
import FAQAccordion from '../components/FAQAccordion';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>FAQs | Hostly</title>
        <meta name="description" content="Frequently asked questions about Hostly’s hosting services." />
      </Helmet>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h1>
        <FAQAccordion faqs={faqs} />
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-2 rounded-xl bg-primary text-white hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default FAQ;
