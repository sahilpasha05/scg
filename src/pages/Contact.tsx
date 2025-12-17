import React, { useState } from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgdepvr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Talk Compliance</h1>
                <p className="text-lg text-slate-600 mb-10">
                    Get in touch with your Accounting & Compliance Companion
                </p>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Our Office</h4>
                            <p className="text-slate-600 mt-1">
                                LedgerWorks Private Limited<br />
                                # 134, Krishnappa Layout,<br />
                                Doddakannelli, Sarjapur Road,<br />
                                Bengaluru–560035
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                            <Phone size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
                            <a 
                                href="tel:+919036940860"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                <Phone size={18} />
                                +91 90369 40860
                            </a>
                            <p className="text-xs text-slate-400 mt-2">Mon-Sat, 10am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                            <Mail size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                            <a 
                                href="mailto:admin@societyledgers.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                <Mail size={18} />
                                admin@societyledgers.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus: ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number *</label>
                            <div className="flex">
                                <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 font-medium select-none">
                                    +91
                                </span>
                                <input 
                                    type="tel" 
                                    name="mobile"
                                    required
                                    className="w-full px-4 py-3 rounded-r-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                        <input 
                            type="email" 
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                        <textarea 
                            rows={4} 
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all" 
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                            isSubmitted 
                                ?  'bg-green-600 text-white' 
                                : 'bg-brand-600 text-white hover:bg-brand-700'
                        } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitted ?  (
                            <>
                                <CheckCircle size={18} />
                                Message Sent Successfully!
                            </>
                        ) : isSubmitting ? (
                            'Sending.. .'
                        ) : (
                            <>
                                Submit <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
};