import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Drawer from './Drawer';

const ChefHatIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-8 h-8"
  >
    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
    <line x1="6" y1="17" x2="18" y2="17"/>
  </svg>
);

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="nav-blur fixed top-0 left-0 right-0 z-30 pt-safe-top">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/menu" className="flex items-center gap-3">
              <ChefHatIcon />
              <div>
                <h1 className="text-xl font-bold tracking-tight">Cultura Mixta</h1>
                <p className="text-sm text-gray-600 font-medium">Family Restaurant</p>
              </div>
            </Link>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 hover:bg-white/50 rounded-full transition-all active:scale-95"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Navbar; 