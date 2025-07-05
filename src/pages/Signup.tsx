import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.plan || 'Not selected';

  const handleContinue = () => {
    navigate('/checkout', {
      state: { plan: selectedPlan },
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Hostly</title>
        <meta name="description" content="Sign up for secure QuickBooks hosting with Hostly." />
      </Helmet>

      <section className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Sign Up</h1>
        <p className="text-gray-600 mb-4">You're signing up for: <strong>{selectedPlan}</strong></p>

        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-700 transition"
        >
          Continue to Checkout
        </button>

        <p className="text-sm text-gray-500 mt-8">
          Already have an account? <a href="#" className="text-primary underline">Log in</a>
        </p>
      </section>
    </>
  );
};

export default Signup;
