import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './components/Register';
import UnderMaintenance from './components/UnderMaintainance';
import About from './components/About';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/maintenance" element={<UnderMaintenance />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;