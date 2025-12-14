import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Talk Compliance</h1>
                <p className="text-lg text-slate-600 mb-10">
                    Get in touch with us to schedule a free initial consultation for your society.
                </p>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Our Office</h4>
                            <p className="text-slate-600 mt-1">
                                123, Compliance Tower,<br />
                                Business District, Sector 62,<br />
                                New Delhi - 110001
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Call Us</h4>
                            <p className="text-slate-600 mt-1">+91 98765 43210</p>
                            <p className="text-xs text-slate-400">Mon-Fri, 10am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Email Us</h4>
                            <p className="text-slate-600 mt-1">contact@societyledgers.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 font-medium select-none">
                                    +91
                                </span>
                                <input 
                                    type="tel" 
                                    className="w-full px-4 py-3 rounded-r-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                                    placeholder="98765 43210" 
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>

                    <button className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-all flex items-center justify-center gap-2">
                        Get Compliance Support <Send size={18} />
                    </button>
                </form>
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
};