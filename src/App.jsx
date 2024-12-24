import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import BrandFooter from './components/BrandFooter';
import Menu from './pages/Menu';
import About from './pages/About';
import Location from './pages/Location';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background pb-24">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/menu" replace />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="*" element={<Navigate to="/menu" replace />} />
        </Routes>
        <BrandFooter />
        <Analytics />
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
};

export default App; 