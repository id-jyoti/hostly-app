import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Emily Carter',
    role: 'CPA, Small Business Owner',
    feedback:
      "QuickHost transformed how we manage QuickBooks. Fast, secure, and their support is outstanding!",
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
  {
    id: 2,
    name: 'James Patel',
    role: 'IT Admin, Accounting Firm',
    feedback:
      "The reliability and uptime are unmatched. Our accounting workflow is seamless now.",
    avatar: 'https://i.pravatar.cc/100?img=52',
  },
  {
    id: 3,
    name: 'Sara Thompson',
    role: 'Bookkeeper',
    feedback:
      "I can access client files from anywhere without worrying about data loss. It’s a lifesaver!",
    avatar: 'https://i.pravatar.cc/100?img=65',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-primary mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg max-w-xl mx-auto"
        >
          Trusted by professionals and businesses who demand performance and reliability.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg transition duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-base italic leading-relaxed mb-6">
              “{t.feedback}”
            </p>
            <div className="mt-auto flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="text-sm font-bold text-dark">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-70"
      >
        <img src="/src/assets/clients/xero.png" alt="Xero" className="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="/src/assets/clients/qbo.png" alt="QuickBooks" className="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="/src/assets/clients/zoho.png" alt="Zoho" className="h-10 object-contain grayscale hover:grayscale-0 transition" />
        <img src="/src/assets/clients/freshbooks.png" alt="FreshBooks" className="h-10 object-contain grayscale hover:grayscale-0 transition" />
      </motion.div>
    </section>
  );
};

export default Testimonials;
