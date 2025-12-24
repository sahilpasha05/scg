import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { DETAILED_STRENGTHS } from '../constants';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const CoreStrengths: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Strengths</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            At <span className="text-white font-semibold">Society Ledgers</span>, we specialize in simplifying accounting and compliance for Resident Associations. Our platform combines domain expertise with digital convenience, helping societies stay compliant, transparent, and financially healthy—without the typical administrative burden.
          </p>
        </div>
      </SectionWrapper>

      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {DETAILED_STRENGTHS.map((strength, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group"
              >
                {/* Icon and Title Horizontal Alignment */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-brand-50 rounded-2xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    {strength.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{strength.title}</h3>
                </div>
                {/* Make Description Stretch to Maintain Equal Heights */}
                <p className="text-slate-600 leading-relaxed text-lg grow">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg border border-slate-100">
              <ShieldCheck className="text-brand-600" size={24} />
              <span className="text-xl font-bold text-slate-800">Built on Trust, Backed by Professionals</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};