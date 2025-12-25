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
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-900/50 backdrop-blur-sm text-brand-200 text-xs font-semibold mb-6 border border-brand-500/30">
            Trusted by multiple Housing Societies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Experts</h1>
          <p className="text-xl text-slate-300">
            A unique blend of Qualified Accountants, Technology Experts, and Industry Advisors
            interested in your society's financial health and compliance well-being.
          </p>
        </div>
      </SectionWrapper>

      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                      style={{
                        width: '413px',  // Set fixed width
                        height: '531px', // Set fixed height
                        objectPosition: 'center', // Center the image
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-slate-500 font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{member.bio}</p>
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
              Our core leadership is supported by a robust operational framework designed for
              consistency and quality execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Delivery Supervisor */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-start">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-xl mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Service Delivery Supervisor</h3>
              <p className="text-slate-600 leading-relaxed">
                Dedicated supervisors oversee the execution of all accounting and compliance tasks,
                ensuring that SOPs are strictly followed and quality benchmarks are met for every
                society.
              </p>
            </div>

            {/* Team of Associates */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-start">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-xl mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Team of Associates</h3>
              <p className="text-slate-600 leading-relaxed">
                Skilled accounting and compliance executives handle day-to-day bookkeeping, voucher
                processing, and regulatory compliance efficiently.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};