import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = "", 
  id,
  background = 'white'
}) => {
  const bgColors = {
    white:  'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section 
      id={id}
      className={`py-20 md:py-32 overflow-hidden ${bgColors[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y:  30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin:  "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};