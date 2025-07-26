import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Get Started | Hostly</title>
        <meta name="description" content="Start your QuickBooks hosting journey with Hostly." />
      </Helmet>

      <section className="py-24 px-4 text-center max-w-2xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-10 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sign up now to experience secure, scalable QuickBooks hosting with 24/7 expert support.
        </motion.p>

        <motion.button
          onClick={() => navigate('/signup')}
          className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-blue-700 transition font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Sign-Up
        </motion.button>
      </section>
    </>
  );
};

export default GetStarted;
