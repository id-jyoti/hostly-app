import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Light background across entire page */}
      <Header />

      {/* Main content area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
