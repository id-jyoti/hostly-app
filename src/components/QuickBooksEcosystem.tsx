// src/components/QuickBooksEcosystem.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const QuickBooksEcosystem = () => {
  const integrations = [
    { name: "Xero", logo: "/src/assets/clients/xero.svg" },
    { name: "FreshBooks", logo: "/src/assets/clients/fbo.png" },
    { name: "Zoho", logo: "/src/assets/clients/zoho.png" },
    { name: "QuickBooks", logo: "/src/assets/clients/qbo.jpg" },
  ];

  return (
    <>
      <Helmet>
        <title>QuickBooks Ecosystem | Hostly</title>
        <meta
          name="description"
          content="Integrate QuickBooks with your favorite tools through the Hostly ecosystem, securely and efficiently."
        />
      </Helmet>

      <section className="px-4 py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Connected QuickBooks Ecosystem
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Easily integrate QuickBooks with the apps and tools your business relies on — from accounting to CRM and beyond.
          </motion.p>

          {/* Ecosystem Image */}
          <motion.img
            src="/assets/quickbooks.png"
            alt="QuickBooks Ecosystem"
            className="mx-auto w-full max-w-4xl rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Integration Logos */}
          <motion.div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {integrations.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition"
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-12 object-contain"
                />
                <span className="text-sm text-gray-500">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default QuickBooksEcosystem;
