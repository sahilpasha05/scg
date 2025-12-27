import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PHONE_NUMBER = '919036940860';

export const WhatsAppButton: React.FC = () => {
  const [bottomOffset, setBottomOffset] = useState<number>(24);

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
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 cursor-pointer z-[9999]"
      style={{ 
        bottom: `${bottomOffset}px`, 
        right: '24px'
      }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-10 h-10 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.488 2.025 7.788L0 32l8.413-2.113A15.888 15.888 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.388c-2.487 0-4.887-.681-7-1.95l-.5-.3-5.175 1.3 1.35-5.063-.325-.537A13.275 13.275 0 012.612 16c0-7.35 5.975-13.325 13.325-13.325S29.262 8.65 29.262 16 23.287 29.388 16 29.388z"/>
        <path d="M23.738 19.5c-.4-.2-2.363-1.175-2.738-1.3-.363-.138-.625-.2-.888.2-.262.4-1.012 1.3-1.237 1.563-.225.262-.45.3-.85.1s-1.65-.613-3.138-1.95c-1.162-1.038-1.95-2.313-2.175-2.713s-.025-.613.175-.813c.175-.175.4-.45.6-.675s.263-.375.4-.625.062-.475-.025-.675-.888-2.15-1.213-2.95c-.313-.775-.637-.675-.888-.687-.225-.012-.475-.012-.725-.012s-.663.087-.988.475-.3.675-1.3 2.125c-1 1.45-.1 2.925 1 4.5s3.163 4.838 7.2 6.563c1.013.425 1.8.675 2.425.863.987.313 1.888.263 2.6.163.787-.113 2.363-.975 2.7-1.925.325-.95.325-1.763.225-1.925-.1-.15-.35-.25-.75-.45z"/>
      </svg>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </motion.button>
  );
};