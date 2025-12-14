import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { motion } from 'framer-motion';
import { Building2, FileText, CheckCircle, Scale, Headphones, Handshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Intro Section */}
      <SectionWrapper background="light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About Society Ledgers</h1>
          
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
             Society Ledgers is a dedicated team of accountants, tax consultants, and compliance professionals with extensive experience working with housing societies, apartment associations, and residential complexes.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-left mb-10">
             <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                With a strong understanding of the <span className="font-semibold text-slate-900">Societies Acts, Model Bye-Laws, Income Tax, and GST</span> provisions applicable to housing societies, we deliver services that are accurate, timely, and aligned with each society’s specific legal framework.
             </p>
             <p className="text-slate-800 leading-relaxed font-medium text-lg border-l-4 border-brand-500 pl-4">
                We don’t just manage numbers — we help housing societies build transparent, compliant, and smoothly functioning communities.
             </p>
          </div>
          
          {/* Official Partner */}
          <div className="inline-flex flex-col md:flex-row items-center justify-center bg-brand-50 border border-brand-100 px-8 py-6 rounded-xl gap-4">
             <span className="bg-brand-600 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">Official Partner</span>
             <p className="text-slate-700 font-medium text-center md:text-left">
                As a recommended service provider of <span className="font-bold text-slate-900">MyGate</span>, Society Ledgers is recognized as an exclusive accounting and compliance platform for residential societies.
             </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Housing Societies Trust Us */}
      <SectionWrapper background="white">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Housing Societies Trust Us</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Card 1 */}
             <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Building2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Focused Expertise in Housing Societies</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                    We work <span className="font-semibold text-brand-600">exclusively with housing societies</span>. We understand your pain points, compliance deadlines, and governance issues better than anyone else.
                </p>
             </motion.div>

             {/* Card 2 */}
             <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent, Member-Friendly Reporting</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                    We create clear financial reports and member statements that increase trust and transparency within the society. No jargon, just clarity.
                </p>
             </motion.div>

             {/* Card 3 */}
             <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">End-to-End Compliance Support</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                    From day-to-day bookkeeping to statutory filings and audit coordination — we manage it all under one roof so you don't have to coordinate with multiple vendors.
                </p>
             </motion.div>

             {/* Card 4 */}
             <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Headphones size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized & Prompt Support</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                    Whether your society has 20 flats or 1000+, we tailor our services to fit your needs. Prompt service is our promise.
                </p>
             </motion.div>

             {/* Card 5 */}
             <motion.div whileHover={{ y: -5 }} className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 md:col-span-2 lg:col-span-2 flex flex-col h-full">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Handshake size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Participation & Advisory</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                    We extend our active participation in formulating key policies and enabling key decisions, helping positively influence the finances and governance of the Association. We are more than just accountants; we are your strategic partners.
                </p>
             </motion.div>
         </div>
      </SectionWrapper>

      {/* Our Commitment */}
      <SectionWrapper background="dark">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Commitment</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-6">
                <p>
                    At <span className="text-white font-semibold">Society Ledgers</span>, we believe every housing society deserves financial clarity, legal compliance, and peace of mind.
                </p>
            </div>
         </div>
      </SectionWrapper>

      {/* Expertise List */}
      <SectionWrapper background="light">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Expertise in Society Regulations</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
                {[
                    "Co-operative Societies Act",
                    "Model Bye-Laws & Regulations",
                    "Income Tax Act (Society-specific provisions)",
                    "GST for Housing Societies",
                    "Registrar of Societies Compliance",
                    "Society Accounting Standards",
                    "AGM & Committee Governance",
                    "Financial Planning for Societies"
                ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-brand-200 hover:shadow-md transition-all"
                    >
                        <div className="flex-shrink-0 text-brand-600">
                            <Scale size={20} />
                        </div>
                        <span className="font-medium text-slate-800">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
};