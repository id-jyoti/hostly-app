import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faRocket,
  faBuilding,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 'basic',
      title: 'Basic',
      price: '$19/month',
      icon: faStar,
      features: [
        '1 user license',
        '5GB storage',
        'Basic support',
        'Nightly backups'
      ],
      highlight: false,
    },
    {
      id: 'pro',
      title: 'Pro',
      price: '$49/month',
      icon: faRocket,
      features: [
        '5 user licenses',
        '25GB storage',
        'Priority support',
        'Daily backups',
        'Multi-device access'
      ],
      highlight: true,
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 'Custom Pricing',
      icon: faBuilding,
      features: [
        'Unlimited users',
        'Unlimited storage',
        'Dedicated manager',
        'Custom integrations',
        '99.99% uptime SLA'
      ],
      highlight: false,
    },
  ];

  const handleGetStarted = (planId: string) => {
    if (planId === 'enterprise') {
      navigate('/contact');
    } else {
      navigate('/checkout', { state: { plan: planId } });
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing | Hostly</title>
        <meta name="description" content="Choose the perfect hosting plan for your business needs." />
      </Helmet>

      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Plans</h1>
        <p className="text-gray-600 mb-10">Simple pricing for businesses of all sizes.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const cardStyle = plan.highlight
              ? 'border-primary bg-blue-50'
              : 'bg-white';

            const buttonStyle = plan.highlight
              ? 'bg-primary text-white hover:bg-blue-700 cursor-pointer'
              : 'border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer';

            return (
              <div
                key={plan.id}
                className={`border rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-[1.01] duration-200 hover:ring-2 hover:ring-primary flex flex-col justify-between ${cardStyle}`}
              >
                <div>
                  <div className="text-3xl text-primary mb-4">
                    <FontAwesomeIcon icon={plan.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{plan.title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{plan.price}</p>

                  <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleGetStarted(plan.id)}
                  className={`mt-auto w-full px-4 py-2 rounded-xl font-medium transition ${buttonStyle}`}
                >
                  Get Started
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
