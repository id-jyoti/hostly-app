// src/layouts/MainLayout.tsx
import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <TopBar />
      <Header />

      {/* Main content area with padding and responsive spacing */}
      <main className="flex-grow pt-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
