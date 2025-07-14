// src/pages/Signup.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.plan || 'Not Selected';

  const handleContinue = () => {
    navigate('/checkout', {
      state: { plan: selectedPlan },
    });
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Hostly</title>
        <meta name="description" content="Create your Hostly account and get started with QuickBooks hosting." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Create Your Hostly Account</h1>
            <p className="text-gray-600 mt-2">
              Signing up for: <span className="font-semibold text-dark">{selectedPlan}</span>
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handleContinue}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Continue to Checkout
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{' '}
            <a
              href="https://accounts.rightworks.com/login/#/?redirect_uri=https:%2F%2Fapps.rightworks.com%2F%23%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Log in
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;
