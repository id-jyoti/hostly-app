// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | QuickHost</title>
        <meta name="description" content="Oops! The page you're looking for does not exist." />
      </Helmet>

      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-white">
        <motion.h1
          className="text-6xl font-extrabold text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Oops! The page you're looking for doesn’t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go to Homepage
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default NotFound;
