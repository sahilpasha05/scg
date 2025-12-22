import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../../types';
import { NAV_ITEMS } from '../../constants';

// Import logo
import logo from '../../assets/Society Ledgers Logo2.jpg';

interface HeaderProps {
  currentView: PageView;
  onNavigate:       (view: PageView) => void;
}

export const Header:         React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior:         'smooth' });
  };

  return (
    <>
      {/* Mobile Header - Transparent Background */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 pointer-events-auto">
          {/* Flexbox container for perfect alignment */}
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            
            {/* Logo - Extends horizontally, responsive */}
            <motion.   div
              initial={{ opacity: 0, x:    -20 }}
              animate={{ opacity:     1, x:  0 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer group flex-1 max-w-[65%] sm:max-w-[70%]"
              onClick={() => handleNavClick(PageView.   HOME)}
            >
              <img 
                src={logo} 
                alt="Society Ledgers Logo"
                className="w-full h-auto max-h-12 sm:max-h-14 object-contain object-left group-hover:scale-105 transition-transform duration-300 drop-shadow-lg rounded-lg"
              />
            </motion.  div>

            {/* Toggle Button - Right Side */}
            <motion.  button
              initial={{ opacity: 0, x:    20 }}
              animate={{ opacity:   1, x:  0 }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 sm:w-12 sm: h-12 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors shadow-lg border border-slate-200 flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.   button>
          </div>
        </div>
      </header>

      {/* Desktop Header - Floating Pill */}
      <header className="hidden lg:block fixed top-3 sm:top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-center px-2 sm:px-4">
          <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto w-full" style={{ maxWidth: '85%' }}>
            
            {/* Desktop Logo */}
            <motion.div
              initial={{ y:     -100, opacity: 0 }}
              animate={{ y:  0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness:   100 }}
              className="cursor-pointer group flex-shrink-0"
              onClick={() => handleNavClick(PageView.  HOME)}
            >
              <img 
                src={logo} 
                alt="Society Ledgers Logo"
                className="h-12 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg rounded-lg"
              />
            </motion.div>

            {/* Desktop Navigation Bar */}
            <motion.div 
              initial={{ y:   -100, opacity: 0 }}
              animate={{ y:     0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.1 }}
              className="flex items-center justify-between flex-1 pl-3 sm:pl-6 pr-2 sm:pr-4 py-2 sm: py-3 rounded-full border border-white/20 shadow-xl shadow-slate-900/5 backdrop-blur-xl bg-white/95 transition-all duration-300"
            >
              {/* Desktop Nav */}
              <nav className="flex items-center gap-2 bg-slate-100/60 px-2 py-1.5 rounded-full border border-slate-200/50 flex-1 max-w-5xl mx-auto">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={`nav-${item.view}-${index}`}
                    onClick={() => handleNavClick(item.   view)}
                    className={`
                      flex-1 px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-300 whitespace-nowrap
                      ${currentView === item.view 
                        ? 'bg-white text-brand-600 shadow-md font-semibold' 
                        :     'text-slate-700 hover:text-slate-900 hover:bg-white/80'}
                    `}
                  >
                    {item.   label}
                  </button>
                ))}
              </nav>

              {/* Desktop CTA Button */}
              <button 
                onClick={() => handleNavClick(PageView.  CONTACT)}
                className="flex items-center gap-2 bg-slate-900 hover:bg-brand-600 text-white px-6 py-2. 5 rounded-full text-sm font-bold transition-all hover: shadow-lg hover:   shadow-brand-500/25 active:scale-95 whitespace-nowrap"
              >
                Get Expert Help
              </button>
            </motion.   div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown - Fixed visibility */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.   div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity:     0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] lg:   hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity:   1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y:     -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-[60] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden lg:hidden max-w-lg mx-auto"
              style={{ maxHeight:   'calc(100vh - 5rem)' }}
            >
              <div className="flex flex-col p-3 overflow-y-auto max-h-[calc(100vh-5rem)]">
                {/* Navigation Links */}
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={`mobile-nav-${item.view}-${index}`}
                    onClick={() => handleNavClick(item.view)}
                    className={`
                      w-full text-left px-4 py-3.5 sm:py-4 rounded-xl text-base font-medium transition-all duration-200
                      ${currentView === item.   view 
                        ? 'bg-brand-600 text-white shadow-md' 
                        : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.label}</span>
                      {currentView === item.view && <ArrowRight size={18} className="text-white" />}
                    </div>
                  </button>
                ))}
                
                {/* Divider */}
                <div className="h-px bg-slate-200 my-3" />
                
                {/* Mobile CTA Button */}
                <button 
                  onClick={() => handleNavClick(PageView.   CONTACT)}
                  className="w-full bg-slate-900 text-white px-4 py-4 rounded-xl font-bold text-base shadow-lg flex justify-center items-center gap-2 hover:bg-brand-600 active:bg-brand-700 transition-all duration-200"
                >
                  Get Expert Help <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};