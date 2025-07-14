// src/pages/Checkout.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout | QuickHost</title>
      </Helmet>

      <section className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Billing Section */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">Billing Information</h2>
              <form className="space-y-4">
                <input className="w-full p-3 border rounded" placeholder="Full Name" />
                <input className="w-full p-3 border rounded" placeholder="Email Address" />
                <input className="w-full p-3 border rounded" placeholder="Company" />
                <input className="w-full p-3 border rounded" placeholder="Phone" />
                <input className="w-full p-3 border rounded" placeholder="Address" />
              </form>
            </div>

            {/* Plan Summary */}
            <div className="bg-gray-50 p-6 rounded-xl border">
              <h2 className="text-xl font-bold text-primary mb-4">Plan Summary</h2>
              <div className="text-gray-700 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <strong>Pro Hosting</strong>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <strong>$49/month</strong>
                </div>
                <div className="flex justify-between">
                  <span>Users:</span>
                  <strong>5</strong>
                </div>
                <div className="flex justify-between">
                  <span>Storage:</span>
                  <strong>25GB</strong>
                </div>
              </div>

              {/* Payment */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Payment</h3>
                <input className="w-full p-3 border rounded mb-3" placeholder="Card Number" />
                <div className="flex gap-3">
                  <input className="w-1/2 p-3 border rounded" placeholder="MM/YY" />
                  <input className="w-1/2 p-3 border rounded" placeholder="CVV" />
                </div>
                <button className="mt-5 w-full bg-primary text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  Complete Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
