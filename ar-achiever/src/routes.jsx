import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './components/Register';
import UnderMaintenance from './components/UnderMaintainance';
import About from './components/About';


const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Home Route Canvas */}
      <Route path="/" element={<Home />} />
      
      {/* Architectural Competition Registration Page */}
      <Route path="/register" element={<Register />} />
      
      {/* About Page */}
      <Route path="/about" element={<About />} />
      
      {/* Fallback route - under maintenance or 404 handler redirect */}
      <Route path="/maintenance" element={<UnderMaintenance />} />
      <Route path="*" element={<UnderMaintenance />} />
    </Routes>
  );
};

export default AppRoutes;