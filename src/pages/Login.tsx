// src/pages/Login.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔐 Add real login logic here later
    navigate('/'); // or navigate('/dashboard') if applicable
  };

  return (
    <>
      <Helmet>
        <title>Login | Hostly</title>
        <meta name="description" content="Login to your Hostly account and manage your QuickBooks hosting." />
      </Helmet>

      <section className="py-20 px-4 max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Log In</h1>
        <p className="text-gray-600 mb-8">Access your Hostly account</p>

        <form onSubmit={handleLogin} className="space-y-6 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-between text-sm">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8 text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-primary underline">
            Sign up
          </a>
        </p>
      </section>
    </>
  );
};

export default Login;
