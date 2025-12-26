import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHONE_NUMBER = '919036940860';
const FULL_TEXT = 'Click to Connect';

export const WhatsAppButton: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [bottomOffset, setBottomOffset] = useState<number>(24);

  useEffect(() => {
    // Show the bubble quickly after page open for better UX
    const showTimer = setTimeout(() => setShowMessage(true), 150);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showMessage) return;
    setDisplayedText('');
    setIsTyping(true);
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      setDisplayedText(FULL_TEXT.slice(0, idx));
      if (idx >= FULL_TEXT.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
    return () => {
      clearInterval(interval);
      setIsTyping(false);
    };
  }, [showMessage]);

  useEffect(() => {
    // Robust mount guard using window flag
    const flag = '__whatsapp_floating_mounted__';
    const leftovers = document.querySelectorAll('#whatsapp-floating, .whatsapp-floating');
    leftovers.forEach(n => n.parentNode?.removeChild(n));

    if ((window as any)[flag]) return;
    (window as any)[flag] = true;

    return () => {
      delete (window as any)[flag];
      const leftoversCleanup = document.querySelectorAll('#whatsapp-floating, .whatsapp-floating');
      leftoversCleanup.forEach(n => n.parentNode?.removeChild(n));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (footerRect.top < viewportHeight) {
          const overlap = Math.max(0, viewportHeight - footerRect.top);
          const offset = Math.min(overlap + 24, 220);
          setBottomOffset(offset);
        } else {
          setBottomOffset(24);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = 'Hi, I need assistance';
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      id="whatsapp-floating"
      className="fixed right-6 flex items-center gap-3 transition-all duration-300"
      style={{ bottom: `${bottomOffset}px`, right: '1.5rem', overflow: 'visible', zIndex: 99999 }}
    >
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 max-w-[220px] z-50 pointer-events-auto absolute whitespace-nowrap"
            style={{
              right: 'calc(100% + 16px)',
              top: '50%',
              transform: 'translateY(-50%)',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p className="text-sm font-medium text-slate-800 leading-tight">
              {displayedText}
              {isTyping && <span className="ml-1 inline-block text-slate-800 animate-pulse">|</span>}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleWhatsAppClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        <img
          src="https://cdn-icons-png.flaticon.com/128/4423/4423697.png"
          alt="WhatsApp"
          className="w-8 h-8 relative z-10"
        />
        {showMessage && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
};