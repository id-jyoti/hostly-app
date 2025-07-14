// src/pages/Pricing.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faRocket,
  faBuilding,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      title: 'Basic',
      price: '$19/mo',
      icon: faStar,
      description: 'For freelancers & solo entrepreneurs.',
      features: ['1 user license', '5GB storage', 'Basic support', 'Nightly backups'],
      highlight: false,
    },
    {
      id: 'pro',
      title: 'Pro',
      price: '$49/mo',
      icon: faRocket,
      description: 'Most popular plan for small teams.',
      features: [
        '5 user licenses',
        '25GB storage',
        'Priority support',
        'Daily backups',
        'Multi-device access',
      ],
      highlight: true,
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 'Custom',
      icon: faBuilding,
      description: 'For large organizations with custom needs.',
      features: [
        'Unlimited users',
        'Unlimited storage',
        'Dedicated manager',
        'Custom integrations',
        '99.99% uptime SLA',
      ],
      highlight: false,
    },
  ];

  const handleGetStarted = (planId: string) => {
    if (planId === 'enterprise') {
      navigate('/contact');
    } else {
      navigate(`/checkout?plan=${planId}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing | QuickHost</title>
        <meta name="description" content="Choose the right QuickBooks hosting plan for your team or enterprise." />
      </Helmet>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing tailored to fit your business size and needs.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const cardStyle = plan.highlight
              ? 'bg-white border-2 border-primary shadow-xl scale-[1.03]'
              : 'bg-white border shadow-md';

            const buttonStyle = plan.highlight
              ? 'bg-primary text-white hover:bg-blue-700'
              : 'border border-primary text-primary hover:bg-primary hover:text-white';

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 transition duration-300 transform hover:shadow-lg flex flex-col justify-between ${cardStyle}`}
              >
                <div>
                  <div className="text-4xl text-primary mb-3">
                    <FontAwesomeIcon icon={plan.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <p className="text-3xl font-semibold text-primary mb-6">{plan.price}</p>

                  <ul className="space-y-3 text-sm text-gray-600 mb-6 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleGetStarted(plan.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition ${buttonStyle}`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;
