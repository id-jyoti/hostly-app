// src/components/FAQAccordion.tsx
import React from 'react';

type FAQ = {
  question: string;
  answer: string;
};

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
          <details>
            <summary className="font-medium cursor-pointer text-primary">{faq.question}</summary>
            <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
