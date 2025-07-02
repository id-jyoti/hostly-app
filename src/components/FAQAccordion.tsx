import React, { useState } from 'react';
import faqs from '../data/faqs';

const FAQAccordion = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-2xl font-bold text-primary text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 cursor-pointer bg-white"
            onClick={() => setActive(idx === active ? null : idx)}
          >
            <h3 className="font-semibold text-primary">{faq.question}</h3>
            {active === idx && <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
