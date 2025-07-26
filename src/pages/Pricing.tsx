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
import { motion } from 'framer-motion';
import pricingPlans from '../data/pricingPlans';

const planIcons: Record<string, any> = {
  basic: faStar,
  pro: faRocket,
  enterprise: faBuilding,
};

const Pricing = () => {
  const navigate = useNavigate();

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
        <meta
          name="description"
          content="Choose the right QuickBooks hosting plan for your team or enterprise."
        />
      </Helmet>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-primary mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Transparent pricing tailored to fit your business size and hosting needs.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const cardStyle = plan.highlighted
              ? 'bg-white border-2 border-primary shadow-xl scale-[1.02]'
              : 'bg-white border shadow-md';

            const buttonStyle = plan.highlighted
              ? 'bg-primary text-white hover:bg-blue-700'
              : 'border border-primary text-primary hover:bg-primary hover:text-white';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 transition duration-300 transform hover:scale-[1.03] hover:shadow-lg flex flex-col justify-between relative ${cardStyle}`}
              >
                {plan.highlighted && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="text-4xl text-primary mb-3">
                    <FontAwesomeIcon icon={planIcons[plan.id]} />
                  </div>
                  <h3 className="text-xl font-bold text-dark">{plan.name}</h3>
                  <p className="text-3xl font-semibold text-primary mb-6">{plan.price}</p>

                  <ul className="space-y-3 text-sm text-gray-600 mb-6 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleGetStarted(plan.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition ${buttonStyle}`}
                  aria-label={plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started with plan ' + plan.name}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Pricing;
