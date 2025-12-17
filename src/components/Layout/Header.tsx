import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../../types';
import { NAV_ITEMS } from '../../constants';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window. addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Pill Header */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className={`
            pointer-events-auto
            flex items-center justify-between 
            pl-4 pr-2 py-2.5 
            rounded-full 
            border border-white/20 
            shadow-xl shadow-slate-900/5
            backdrop-blur-xl
            transition-all duration-300
            ${isScrolled || isMobileMenuOpen ? 'bg-white/90 w-full max-w-7xl' : 'bg-white/70 w-full max-w-6xl hover:bg-white/90'}
          `}
        >
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2 cursor-pointer group mr-8"
            onClick={() => handleNavClick(PageView.HOME)}
          >
            <div className="bg-brand-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs tracking-tight group-hover:scale-110 transition-transform duration-300 shadow-md border border-brand-500">
              SL
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm leading-none tracking-tight">Society Ledgers</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`
                  px-4 py-1. 5 rounded-full text-xs font-medium transition-all duration-300
                  ${currentView === item. view 
                    ? 'bg-white text-brand-600 shadow-sm font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 pl-4">
            <button 
              onClick={() => handleNavClick(PageView.CONTACT)}
              className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-brand-600 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:shadow-lg hover:shadow-brand-500/25 active:scale-95"
            >
              Get Expert Help
            </button>

            {/* Mobile Burger */}
            <button 
              className="md:hidden p-2 text-slate-800 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Dropdown (Detached Island) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity:  1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`
                    w-full text-left p-4 rounded-xl text-sm font-medium transition-colors
                    ${currentView === item.view ?  'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}
                  `}
                >
                  <div className="flex justify-between items-center">
                    {item.label}
                    {currentView === item.view && <ArrowRight size={14} />}
                  </div>
                </button>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <button 
                onClick={() => handleNavClick(PageView.CONTACT)}
                className="w-full bg-slate-900 text-white p-4 rounded-xl font-bold text-sm shadow-md flex justify-center items-center gap-2"
              >
                Get Expert Help <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};