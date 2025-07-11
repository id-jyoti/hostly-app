// src/layouts/MainLayout.tsx
import React from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Outlet /> {/* ✅ This renders child routes */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
