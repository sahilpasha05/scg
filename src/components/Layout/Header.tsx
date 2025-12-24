import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../../types';
import { NAV_ITEMS } from '../../constants';
import logo from '../../assets/Society Ledgers Logo2.jpg';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 pointer-events-auto">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer group flex-1"
              onClick={() => handleNavClick(PageView.HOME)}
            >
              {/* Updated Logo for Mobile View */}
              <img
                src={logo}
                alt="Society Ledgers - Your Compliance Backbone"
                className="rounded-lg w-auto h-auto max-w-[90%] sm:max-w-[95%] max-h-14 sm:max-h-16 object-contain object-left ml-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
                style={{
                  imageRendering: 'crisp-edges',
                  marginLeft: '5%', // Subtle shift to the right
                }}
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors shadow-lg border border-slate-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block fixed top-3 xl:top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="flex justify-center px-4">
          <div className="flex items-center gap-3 xl:gap-4 pointer-events-auto w-full max-w-[95%] xl:max-w-[90%]">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className="cursor-pointer group flex-shrink-0"
              onClick={() => handleNavClick(PageView.HOME)}
            >
              <img
                src={logo}
                alt="Society Ledgers - Your Compliance Backbone"
                className="rounded-lg h-[56px] xl:h-[64px] w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </motion.div>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                delay: 0.1,
              }}
              className="flex items-center justify-between flex-1 pl-4 xl:pl-6 pr-3 xl:pr-4 py-3 xl:py-3.5 rounded-full border border-indigo-100/50 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl bg-gradient-to-r from-white/98 via-indigo-50/40 to-white/98 transition-all duration-300"
            >
              <nav className="flex items-center gap-1 xl:gap-1.5 bg-gradient-to-r from-slate-50/80 via-indigo-50/60 to-slate-50/80 px-2 py-1.5 rounded-full border border-indigo-100/70 shadow-inner flex-1">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.view)}
                    className={`
                      flex-1 px-2.5 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-sm xl:text-[15px] font-medium transition-all duration-300 whitespace-nowrap
                      ${
                        currentView === item.view
                          ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-500/30 font-semibold'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-white/90 hover:shadow-sm'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 z-[60] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden lg:hidden max-w-lg mx-auto"
            >
              <div className="flex flex-col p-3 overflow-y-auto max-h-[calc(100vh-5rem)]">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.view)}
                    className={`
                      w-full text-left px-4 py-3.5 sm:py-4 rounded-xl text-base font-medium transition-all duration-200
                      ${
                        currentView === item.view
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};