import React from'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/dk/Navbar';
import EnNavbar from './components/navbar/en/Navbar';
import GrlNavbar from './components/navbar/grl/Navbar';

import Footer from './components/Footer';

import Home from './pages/dk/home/Home';
import About from './pages/dk/about/About';
import Contact from './pages/dk/contact/Contact';

import EnHome from './pages/en/home/Home';
import EnAbout from './pages/en/about/About';
import EnContact from './pages/en/contact/Contact';

import GrlHome from './pages/grl/home/Home';
import GrlAbout from './pages/grl/about/About';
import GrlContact from './pages/grl/contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/en/" element={<EnHome />} />
        <Route path="/en/about" element={<EnAbout />} />
        <Route path="/en/contact" element={<EnContact />} />

        <Route path="/grl/" element={<GrlHome />} />
        <Route path="/grl/about" element={<GrlAbout />} />
        <Route path="/grl/contact" element={<GrlContact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
