import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  // Dummy profile images - replace with actual images later
  const profileImages = [
    "src/assets/SatishRustagiSenorita.jpeg",
    "src/assets/PreethiSubramanianNVTLifesquare.jpeg",
    "src/assets/Anand Agrawal DSR Whitewaters.jpeg",
    "src/assets/Ranan BM Sobha Daffodil.jpg",
    "src/assets/BiplobDasManaForesta.jpg",
    "src/assets/AbhishekKumarMyGate.jpg"
  ];

  return (
    <div className="pt-20">
      <SectionWrapper background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-900/50 backdrop-blur-sm text-brand-200 text-xs font-semibold mb-6 border border-brand-500/30">
              Trusted by Leading Societies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h1>
          <p className="text-xl text-slate-300">
            Experiences of some of the Societies that we serve, and affiliations that we have... 
          </p>
        </div>
      </SectionWrapper>

      <div className="bg-slate-50 py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
           {/* Changed lg:grid-cols-3 to lg:grid-cols-2 for better balance with 4 long testimonials */}
           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {TESTIMONIALS.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                  >
                      {/* Profile Header */}
                      <div className="flex items-start gap-4 mb-6 border-b border-slate-50 pb-6">
                          <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-brand-200">
                              <img 
                                src={profileImages[i % profileImages.length]} 
                                alt={t.name}
                                className="w-full h-full object-cover"
                              />
                          </div>
                          <div>
                              <p className="font-bold text-slate-900 text-lg leading-tight">{t.name}</p>
                              <p className="text-sm text-slate-500 font-medium mb-1">
                                {t.societyName}
                                {t.units && <span className="text-slate-400"> • {t.units} Units</span>}
                              </p>
                          </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative flex-grow">
                        <p className="text-slate-600 leading-relaxed">
                          "{t.content}"
                        </p>
                      </div>
                  </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};