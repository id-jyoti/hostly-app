// src/pages/Checkout.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const plan = location.state?.plan || 'none';

  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">Checkout</h1>
      <p className="text-gray-600">You selected the <strong>{plan}</strong> plan.</p>
    </section>
  );
};

export default Checkout;
