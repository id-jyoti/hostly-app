import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const Features = lazy(() => import('../pages/Features'));
const Pricing = lazy(() => import('../pages/Pricing'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Industries = lazy(() => import('../pages/Industries'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const GetStarted = lazy(() => import('../pages/GetStarted'));
const Signup = lazy(() => import('../pages/Signup'));
const Checkout = lazy(() => import('../pages/Checkout'));
const FAQ = lazy(() => import('../pages/FAQ'));
const FeatureDesktop = lazy(() => import('../pages/FeatureDesktop'));
const FeatureEnterprise = lazy(() => import('../pages/FeatureEnterprise'));
const Login = lazy(() => import('../pages/Login')); // ✅ Login page

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'features', element: <Features /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'industries', element: <Industries /> },
      { path: 'contact', element: <Contact /> },
      { path: 'get-started', element: <GetStarted /> },
      { path: 'signup', element: <Signup /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'features/desktop', element: <FeatureDesktop /> },
      { path: 'features/enterprise', element: <FeatureEnterprise /> },
      { path: 'login', element: <Login /> }, // ✅ Add Login route
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
