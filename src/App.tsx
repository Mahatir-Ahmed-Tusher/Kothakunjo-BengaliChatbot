import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DomainsPage from './pages/DomainsPage';
import DomainChatPage from './pages/DomainChatPage';
import AboutPage from './pages/AboutPage';
import InstructionsPage from './pages/InstructionsPage';
import BanglaOriginPage from './pages/BanglaOriginPage';
import MiscellaneousPage from './pages/MiscellaneousPage';
import LanguageMovementPage from './pages/LanguageMovementPage';
import MentalHealthPage from './pages/MentalHealthPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/chat/:domainId" element={<DomainChatPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/bangla-origin" element={<BanglaOriginPage />} />
        <Route path="/language-movement" element={<LanguageMovementPage />} />
        <Route path="/miscellaneous" element={<MiscellaneousPage />} />
        <Route path="/mental-health" element={<MentalHealthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App