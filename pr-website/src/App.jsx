import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InstagramWorkPage from './pages/InstagramWorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import CarCursorTrail from './components/CarCursorTrail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InstagramWorkPage />} />
        <Route path="/instagram-work" element={<InstagramWorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppButton />
      <CarCursorTrail />
    </BrowserRouter>
  );
}
