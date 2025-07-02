import React, { useState } from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
