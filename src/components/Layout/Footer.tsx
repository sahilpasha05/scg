import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageView } from '../../types';

// Import logo - SAME AS HEADER
import logo from '../../assets/Society Ledgers Logo2.jpg';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [shiftWhatsAppUp, setShiftWhatsAppUp] = useState(false);

  useEffect(() => {
    // Intersection Observer to monitor footer visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShiftWhatsAppUp(entry.isIntersecting); // Update state when footer is in view
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is in view
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '919036940860';
    const message = 'Hi, I need assistance';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-transform duration-300 ${
          shiftWhatsAppUp ? 'translate-y-[-100px]' : 'translate-y-0'
        }`}
      >
        <button
          onClick={handleWhatsAppClick}
          className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4423/4423697.png"
            alt="WhatsApp"
            className="w-8 h-8 z-10"
          />
        </button>
      </div>

      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column - LOGO ONLY */}
            <div className="col-span-1 md:col-span-1">
              <div className="mb-6">
                <img
                  src={logo}
                  alt="Society Ledgers Logo"
                  className="h-14 w-auto object-contain drop-shadow-lg rounded-lg"
                />
              </div>
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                We support every partner society like a backbone on all accounting and tax compliance matters.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-brand-100">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <button
                    onClick={() => onNavigate(PageView.ABOUT)}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate(PageView.SERVICES)}
                    className="hover:text-white transition-colors"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate(PageView.TEAM)} className="hover:text-white transition-colors">
                    Our Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate(PageView.TESTIMONIALS)}
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate(PageView.CAREERS)}
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-brand-100">Expertise</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Society Accounting</li>
                <li>GST, TDS and Income Tax</li>
                <li>Audit Facilitation</li>
                <li>Legal Compliance</li>
                <li>Compliance Advisory</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6 text-brand-100">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="mt-0.5 text-brand-500 flex-shrink-0" />
                  <span>
                    LedgerWorks Private Limited<br />
                    # 134, Krishnappa Layout,<br />
                    Doddakannelli, Sarjapur Road,<br />
                    Bengaluru–560035
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-brand-500 flex-shrink-0" />
                  <a href="tel:+919036940860" className="hover:text-white transition-colors">
                    +91 90369 40860
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-brand-500 flex-shrink-0" />
                  <a href="mailto: admin@societyledgers.com" className="hover:text-white transition-colors">
                    admin@societyledgers.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Society Ledgers. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => onNavigate(PageView.PRIVACY)} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};