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
    <section className="py-28 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-blue-900"
        >
          Trusted by Professionals Nationwide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg max-w-xl mx-auto mt-4"
        >
          See how QuickHost is powering growth, security, and peace of mind.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="bg-white rounded-2xl px-6 py-8 border border-gray-100 shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-indigo-600 text-3xl mb-4">“</div>
            <p className="text-gray-700 text-base italic leading-relaxed mb-6">
              {t.feedback}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
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
        className="mt-20 flex flex-wrap justify-center items-center gap-10 opacity-80"
      >
        <img src="/src/assets/clients/xero.svg" alt="Xero" className="h-12 hover:mix-blend-color-burn transition" />
        <img src="/src/assets/clients/qbo.jpg" alt="QuickBooks" className="h-12 hover:mix-blend-color-burngrayscale-50 transition" />
        <img src="/src/assets/clients/zoho.png" alt="Zoho" className="h-12 hover:mix-blend-color-burn transition" />
        <img src="/src/assets/clients/fbo.png" alt="FreshBooks" className="h-12 hover:mix-blend-color-burn transition" />
      </motion.div>
    </section>
  );
};

export default Testimonials;
