import React, { useState } from 'react';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Features = lazy(() => import('../pages/Features'));
const Pricing = lazy(() => import('../pages/Pricing'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Industries = lazy(() => import('../pages/Industries'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/features', element: <Features /> },
  { path: '/pricing', element: <Pricing /> },
  { path: '/how-it-works', element: <HowItWorks /> },
  { path: '/industries', element: <Industries /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
];
