import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 px-4 py-8">
        <Outlet /> {/* This is where page content renders */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
