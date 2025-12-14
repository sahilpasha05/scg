import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { PageView } from '../types';
import { STRENGTHS, TESTIMONIALS, HERO_IMAGES } from '../constants';
import { SectionWrapper } from '../components/UI/SectionWrapper';

// Import client logos
import manaForestaLogo from '../assets/1 Mana Foresta.jpeg';
import dsrWhiteWatersLogo from '../assets/2 DSR White Waters2.png';
import sobhaDaffodilLogo from '../assets/3 Sobha Daffodil.jpg';
import nvtlsLogo from '../assets/4 NVTLS3.jpg';
import vdmLogo from '../assets/5 VDM.png';
import senoritaLogo from '../assets/6 Senorita2.jpg';
import dsrUltimaLogo from '../assets/7 DSR Ultima.jpeg';
import dsrRbhLogo from '../assets/8 DSRRBH.jpeg';

interface HomeProps {
  onNavigate:  (view: PageView) => void;
}

export const Home: React. FC<HomeProps> = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Client logos array
  const clientLogos = [
    { src: manaForestaLogo, alt: 'Mana Foresta' },
    { src: dsrWhiteWatersLogo, alt: 'DSR White Waters' },
    { src: sobhaDaffodilLogo, alt: 'Sobha Daffodil' },
    { src: nvtlsLogo, alt: 'NVT LifeSquare' },
    { src:  vdmLogo, alt:  'VDM' },
    { src: senoritaLogo, alt: 'Sattva Senorita' },
    { src: dsrUltimaLogo, alt: 'DSR Ultima' },
    { src: dsrRbhLogo, alt: 'DSR RBH' },
  ];

  // Background slider logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-48">
        
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity:  0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Gradient Mesh Overlay - Modern & darker for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/40 to-slate-900/80 z-10" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y:  30 }}
            animate={{ opacity:  1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Accounting & Compliance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-white">Reimagined. </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              We replace chaos with clarity.  A tech-enabled, specialized CA firm exclusively for RWAs and Apartment Associations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <button 
                onClick={() => onNavigate(PageView.SERVICES)}
                className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full font-medium text-lg transition-all backdrop-blur-md overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-brand-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>100% Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Tech-Enabled</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Zero Hidden Costs</span>
              </div>
            </div>
          </motion. div>
        </div>
      </section>

      {/* Logo Carousel */}
    {/* Logo Carousel */}
<section className="bg-white border-b border-slate-100 py-12 overflow-hidden relative">
  <div className="container mx-auto px-4 mb-8 flex items-center justify-center">
    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
      Powering Communities Across India
    </span>
  </div>
  
  <div className="relative w-full overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
    
    <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state: paused]">
      {[...Array(2)].map((_, setIndex) => (
        <div key={setIndex} className="flex space-x-20 mx-10">
          {clientLogos.map((logo, i) => (
            <div 
              key={`${setIndex}-${i}`} 
              className="group flex items-center justify-center min-w-[140px] opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 w-auto max-w-[160px] object-contain transform group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Why Us / Quote Section - Modern Bento Grid Style */}
      <SectionWrapper background="dark" className="relative">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Why <span className="text-brand-400">Society Ledgers? </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We don't just do the math. We build the financial infrastructure that keeps your community thriving.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {STRENGTHS.map((strength, idx) => (
                <div key={idx} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                  <div className="mb-4 text-brand-400 group-hover:text-brand-300 transition-colors bg-brand-900/20 w-fit p-3 rounded-xl">
                    {strength. icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{strength.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-indigo-600 transform rotate-2 rounded-3xl opacity-20 blur-xl"></div>
            <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star size={180} className="text-white fill-white rotate-12" />
              </div>
              
              <blockquote className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-500/20 text-brand-400 mb-8">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.896 14. 389 15.63 15.093 14.41C16.198 12.508 18.068 11.233 20.334 10.992V8H20.263C17.653 8 16.331 9.771 16.331 11.916V13H21.085V21H14.017ZM6.678 21L6.678 18C6.678 16.896 7.051 15.63 7.755 14.41C8.86 12.508 10.73 11.233 12.996 10.992V8H12.925C10.315 8 8.993 9.771 8.993 11.916V13H13.747V21H6.678Z"/>
                  </svg>
                </div>
                <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                  "The cost of proper compliance is far less than the cost of non-compliance."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-white/20"></div>
                  <footer className="text-brand-200 font-semibold tracking-wide uppercase text-xs">
                    Our Philosophy
                  </footer>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Testimonials - Card Slider */}
      <SectionWrapper background="light">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Voices from the Community</h2>
              <p className="text-slate-600 max-w-xl">Don't take our word for it. Here is what Society Secretaries and Treasurers have to say about our partnership.</p>
            </div>
            <div className="hidden md:block">
              <button onClick={() => onNavigate(PageView.TESTIMONIALS)} className="text-brand-600 font-bold hover:text-brand-800 transition-colors flex items-center gap-2">
                Read all stories <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid md: grid-cols-3 gap-6 px-4">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Profile First */}
                <div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-blue-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-lg">
                    {t. name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t. name}</p>
                    <p className="text-xs text-slate-500">{t.societyName}</p>
                  </div>
                </div>
                {/* Content */}
                <p className="text-slate-600 mb-2 leading-relaxed flex-grow">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Band */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-brand-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-900/20">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-900 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to professionalize <br/>your Society's finances?
              </h2>
              <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
                Join 500+ societies who have switched to a stress-free, fully compliant financial management system.
              </p>
              <button 
                onClick={() => onNavigate(PageView.CONTACT)}
                className="bg-white text-brand-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-50 shadow-xl transition-all transform hover:-translate-y-1 active: scale-95"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};