import React from 'react';
import { SERVICES } from '../constants';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { motion } from 'framer-motion';

export const Services:  React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper background="dark">
         <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
                Comprehensive accounting and compliance solutions designed specifically for the unique regulatory needs of Resident Welfare Associations.  
            </p>
         </div>
      </SectionWrapper>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col gap-24">
            {SERVICES.map((service, idx) => (
                <motion. div 
                  key={idx}
                  initial={{ opacity: 0, y:  50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                >
                    {/* Image Section - Left */}
                    <div className="w-full md:w-1/2">
                        <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                           <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                           <img 
                              src={service.image} 
                              alt={service.title} 
                              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" 
                           />
                           {/* Icon Overlay */}
                           <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-brand-600 shadow-md">
                              {React.cloneElement(service.icon as React. ReactElement<any>, { size:  24 })}
                           </div>
                        </div>
                    </div>

                    {/* Content Section - Right */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                        <div className="h-1 w-20 bg-brand-500 rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </motion. div>
            ))}
        </div>
      </div>

      <div className="bg-slate-50 py-16 text-center">
         <div className="container mx-auto px-4">
             <div className="mb-4">
               <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">Preferred Partner</span>
             </div>
             <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">We’re a preferred partner of MyGate</h3>
             <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto mb-8 font-semibold">
               We’re a preferred accounting and compliance service partner of MyGate, India’s leading community management platform.
             </p>
         </div>
      </div>
    </div>
  );
};