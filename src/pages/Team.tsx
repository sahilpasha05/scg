import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1. 5 rounded-full bg-brand-900/50 backdrop-blur-sm text-brand-200 text-xs font-semibold mb-6 border border-brand-500/30">
              Trusted by multiple Housing Societies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Experts</h1>
          <p className="text-xl text-slate-300">
            A unique blend of Qualified Accountants, Technology Experts, and Industry Advisors interested in your society's financial health and compliance well being.
          </p>
        </div>
      </SectionWrapper>

      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TEAM.map((member, idx) => (
              <motion. div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="sm:w-2/5 relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover min-h-[250px] transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-slate-500 font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-slate-600 leading-relaxed text-sm mb-6">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Operational Excellence</h2>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Our core leadership is supported by a robust operational framework designed for consistency and quality execution.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <motion. div 
                    whileHover={{ y: -5 }}
                    className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-start"
                >
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl mb-6">
                        <Briefcase size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Service Delivery Supervisor</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Dedicated supervisors oversee the execution of all accounting and compliance tasks, ensuring that standard operating procedures (SOPs) are strictly followed and quality benchmarks are met for every society. They act as the primary quality control layer.
                    </p>
                </motion.div>

                <motion.div 
                    whileHover={{ y:  -5 }}
                    className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-start"
                >
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl mb-6">
                        <Users size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Team of Associates</h3>
                    <p className="text-slate-600 leading-relaxed">
                        A team of skilled accounting and compliance executives to handle day-to-day bookkeeping, voucher processing, and statutory compliance, ensuring timely and best possible service delivery.
                    </p>
                </motion.div>
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
};