import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-900/50 backdrop-blur-sm text-brand-200 text-xs font-semibold mb-6 border border-brand-500/30">
              Trusted by Leading Societies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h1>
          <p className="text-xl text-slate-300">
            Read what Management Committees and Resident Welfare Associations have to say about working with Society Ledgers.
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
                          <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-brand-100 to-blue-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-xl">
                              {t.name.charAt(0)}
                          </div>
                          <div>
                              <p className="font-bold text-slate-900 text-lg leading-tight">{t.name}</p>
                              <p className="text-sm text-slate-500 font-medium mb-1">{t.societyName}</p>
                              <div className="flex items-center gap-2">
                                 {t.role && <span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-md">{t.role}</span>}
                                 {t.units && <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">{t.units} Units</span>}
                              </div>
                          </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative flex-grow">
                        <Quote className="text-brand-100 w-12 h-12 absolute -top-4 -left-2 opacity-50 pointer-events-none" />
                        <p className="text-slate-600 leading-relaxed italic relative z-10 pl-4 border-l-2 border-brand-100">
                          "{t.content}"
                        </p>
                      </div>
                  </motion.div>
              ))}
           </div>

           <div className="mt-20 text-center">
              <p className="text-slate-500 text-sm mb-4">Have you worked with us?</p>
              <a href="mailto:feedback@societyledgers.com" className="text-brand-600 font-bold hover:underline">Share your feedback</a>
           </div>
        </div>
      </div>
    </div>
  );
};