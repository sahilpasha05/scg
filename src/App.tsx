import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { CoreStrengths } from './pages/CoreStrengths';
import { Team } from './pages/Team';
import { Testimonials } from './pages/Testimonials';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { PageView } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from './components/UI/WhatsAppButton';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case PageView.HOME:
        return <Home onNavigate={setCurrentView} />;
      case PageView.ABOUT:
        return <About />;
      case PageView.SERVICES:
        return <Services />;
      case PageView.CORE_STRENGTHS:
        return <CoreStrengths />;
      case PageView.TEAM: 
        return <Team />;
      case PageView.TESTIMONIALS:
        return <Testimonials />;
      case PageView. CAREERS:
        return <Careers />;
      case PageView.CONTACT:
        return <Contact />;
      case PageView.PRIVACY:
        return <Privacy />;
      default: 
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-brand-100 selection:text-brand-900">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion. div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={setCurrentView} />
      <WhatsAppButton />
    </div>
  );
};

export default App;