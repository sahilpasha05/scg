import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
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

// Import testimonial images
import satishRustagiImg from '../assets/SatishRustagiSenorita.jpeg';
import preethiSubramanianImg from '../assets/PreethiSubramanianNVTLifesquare.jpeg';
import anandAgrawalImg from '../assets/Anand Agrawal DSR Whitewaters.jpeg';
import rajanBMImg from '../assets/Ranan BM Sobha Daffodil.jpg';
import biplobDasImg from '../assets/BiplobDasManaForesta.jpg';
import abhishekKumarImg from '../assets/AbhishekKumarMyGate.jpg';

interface HomeProps {
  onNavigate: (view: PageView) => void;
}

// WhatsApp Floating Button Component
const WhatsAppButton:  React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Click to Connect";
  
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (showMessage && displayedText. length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayedText(fullText. slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(typingTimer);
    }
  }, [showMessage, displayedText]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '919036940860';
    const message = 'Hi, I need assistance';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity:  1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-200 max-w-[200px]"
          >
            <p className="text-sm font-medium text-slate-800">
              {displayedText}
              {displayedText.length < fullText.length && (
                <span className="inline-block w-0.5 h-4 bg-slate-800 ml-1 animate-pulse"></span>
              )}
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
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
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

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Testimonial profile images array matching the order in TESTIMONIALS
  const profileImages = [
    satishRustagiImg,
    preethiSubramanianImg,
    anandAgrawalImg,
    rajanBMImg,
    biplobDasImg,
    abhishekKumarImg
  ];

  // Client logos array
  const clientLogos = [
    { src: manaForestaLogo, alt: 'Mana Foresta' },
    { src: dsrWhiteWatersLogo, alt: 'DSR White Waters' },
    { src: sobhaDaffodilLogo, alt: 'Sobha Daffodil' },
    { src: nvtlsLogo, alt: 'NVT LifeSquare' },
    { src: vdmLogo, alt: 'VDM' },
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

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % Math.ceil(TESTIMONIALS.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Get current 3 testimonials to display
  const getVisibleTestimonials = () => {
    const startIdx = currentTestimonialIndex * 3;
    const testimonials = [];
    for (let i = 0; i < 3; i++) {
      const idx = (startIdx + i) % TESTIMONIALS.length;
      testimonials.push({ ... TESTIMONIALS[idx], imageIdx: idx });
    }
    return testimonials;
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ?  Math.ceil(TESTIMONIALS.length / 3) - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % Math.ceil(TESTIMONIALS.length / 3));
  };

  return (
    <div className="w-full">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-48">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity:  1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/90 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/40 to-slate-900/80 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity:  1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-slate-300 mb-6 font-medium italic text-justify max-w-3xl mx-auto">
              Do you know that cost of non-compliance/not adequate compliance is significantly higher than cost of proper compliance?  
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Accounting & Compliance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-white">Reimagined. </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              We replace chaos with clarity.  A tech-enabled, specialized companion exclusively for Resident Associations and Societies (RWAs).
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
                <span>Compliance Focused</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Tech-Enabled</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Committed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Carousel */}
      <section className="bg-white border-b border-slate-100 py-12 overflow-hidden relative">
        <div className="container mx-auto px-4 mb-8 flex items-center justify-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Powering Communities with Best of Accounting and Compliance Experience
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
                      alt={logo. alt} 
                      className="h-16 w-auto max-w-[160px] object-contain transform group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us / Quote Section */}
      <SectionWrapper background="dark" className="relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Why <span className="text-brand-400">Society Ledgers? </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We place ourselves as the back bone to the societies, and protect them from surprises caused by non-compliance or inadequate compliance.
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
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M14. 017 21L14.017 18C14.017 16.896 14.389 15. 63 15.093 14.41C16.198 12.508 18.068 11.233 20.334 10.992V8H20.263C17.653 8 16.331 9.771 16.331 11.916V13H21. 085V21H14.017ZM6.678 21L6.678 18C6.678 16.896 7.051 15.63 7.755 14.41C8.86 12.508 10.73 11.233 12.996 10.992V8H12.925C10.315 8 8.993 9.771 8.993 11.916V13H13.747V21H6.678Z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                  At Society Ledgers, we believe every housing society deserves financial clarity, legal compliance, and peace of mind. We work closely with management committees to ensure that every rupee is accounted for and every regulatory requirement is met—so you can focus on building a better residential community.
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
      
      {/* Testimonials - Carousel */}
      <SectionWrapper background="light">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Voices from the Community</h2>
              <p className="text-slate-600 max-w-xl">Check out the experiences of our partner societies</p>
            </div>
            <div className="hidden md:block">
              <button onClick={() => onNavigate(PageView.TESTIMONIALS)} className="text-brand-600 font-bold hover:text-brand-800 transition-colors flex items-center gap-2">
                Read all stories <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative px-4">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} className="text-slate-700" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} className="text-slate-700" />
            </button>

            {/* Testimonials Grid */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonialIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity:  1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {getVisibleTestimonials().map((t, i) => (
                  <div key={`${currentTestimonialIndex}-${i}`} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    {/* Profile First */}
                    <div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-4">
                      <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-brand-200">
                        <img 
                          src={profileImages[t.imageIdx]} 
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.societyName}</p>
                      </div>
                    </div>
                    {/* Content */}
                    <p className="text-slate-600 mb-2 leading-relaxed flex-grow line-clamp-6">"{t.content}"</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentTestimonialIndex ?  'bg-brand-600 w-8' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial group ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};