// src/App.tsx
import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        {routing}
      </Suspense>
    </>
  );
}

export default App;
