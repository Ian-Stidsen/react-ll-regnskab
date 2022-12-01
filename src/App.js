import React from'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Footer from './components/Footer';

import Home from './pages/dk/Home';
import About from './pages/dk/About';
import Contact from './pages/dk/Contact';

import EnHome from './pages/en/Home';
import EnAbout from './pages/en/About';
import EnContact from './pages/en/Contact';

import GrlHome from './pages/grl/Home';
import GrlAbout from './pages/grl/About';
import GrlContact from './pages/grl/Contact';

function App() {
  return (
    <Router>
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
