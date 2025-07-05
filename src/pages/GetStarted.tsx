import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Get Started | Hostly</title>
        <meta name="description" content="Start your QuickBooks hosting journey with Hostly." />
      </Helmet>

      <section className="py-20 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Ready to Get Started?</h1>
        <p className="text-gray-600 mb-8">
          Sign up now to experience secure, scalable QuickBooks hosting with 24/7 expert support.
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-blue-700 transition"
        >
          Go to Sign-Up
        </button>
      </section>
    </>
  );
};

export default GetStarted;
