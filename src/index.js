import ReactDOM from 'react-dom/client';
import React, { lazy } from'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Footer from './components/Footer';

import Navbar from './components/navbar/Navbar';
import EnNavbar from './components/navbar/NavbarEn';
import GrlNavbar from './components/navbar/NavbarGrl';


const Home = lazy(() => import('./pages/dk/Home'));
const About = lazy(() => import('./pages/dk/About'));
const Contact = lazy(() => import('./pages/dk/Contact'));

const EnHome = lazy(() => import('./pages/en/Home'));
const EnAbout = lazy(() => import('./pages/en/About'));
const EnContact = lazy(() => import('./pages/en/Contact'));

const GrlHome = lazy(() => import('./pages/grl/Home'));
const GrlAbout = lazy(() => import('./pages/grl/About'));
const GrlContact = lazy(() => import('./pages/grl/Contact'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path='/en/' element={<EnNavbar />}>
        <Route path="/en/" element={<EnHome />} />
        <Route path="/en/about" element={<EnAbout />} />
        <Route path="/en/contact" element={<EnContact />} />
      </Route>

      <Route path='/grl/' element={<GrlNavbar />}>
        <Route path="/grl/" element={<GrlHome />} />
        <Route path="/grl/about" element={<GrlAbout />} />
        <Route path="/grl/contact" element={<GrlContact />} />
      </Route>

    </Routes>
    <Footer />
  </Router>
);