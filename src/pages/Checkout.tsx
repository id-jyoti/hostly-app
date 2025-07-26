// src/pages/Checkout.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout | QuickHost</title>
        <meta name="description" content="Complete your QuickHost subscription securely." />
      </Helmet>

      <section className="bg-gray-50 py-16 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Billing Info */}
          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Billing Information</h2>
            <form className="space-y-5">
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Email Address"
              />
              <input
                type="text"
                name="company"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Company (Optional)"
              />
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Phone"
              />
              <input
                type="text"
                name="address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Billing Address"
              />
            </form>
          </div>

          {/* Right: Plan Summary + Payment */}
          <div className="bg-white rounded-xl shadow p-8 md:sticky md:top-20 h-fit">
            <h2 className="text-xl font-bold text-primary mb-6">Plan Summary</h2>
            <div className="text-sm text-gray-700 space-y-4 mb-6">
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

            <h3 className="text-lg font-semibold text-primary mb-4">Payment Details</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="card"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                maxLength={19}
                placeholder="Card Number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  required
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  required
                  className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-700 transition"
              >
                Complete Checkout
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
