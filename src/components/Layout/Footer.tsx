import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageView } from '../../types';

// Import logo - SAME AS HEADER
import logo from '../../assets/Society Ledgers Logo2.jpg';

interface FooterProps {
  onNavigate:  (view: PageView) => void;
}

export const Footer:  React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column - LOGO ONLY */}
          <div className="col-span-1 md: col-span-1">
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
              <li><button onClick={() => onNavigate(PageView.ABOUT)} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate(PageView. SERVICES)} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate(PageView.TEAM)} className="hover:text-white transition-colors">Our Team</button></li>
              <li><button onClick={() => onNavigate(PageView.TESTIMONIALS)} className="hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => onNavigate(PageView.CAREERS)} className="hover:text-white transition-colors">Careers</button></li>
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
                <span className="text-slate-400">+91 90369 40860</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <span className="text-slate-400">admin@societyledgers.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-brand-500 flex-shrink-0" />
                <span className="text-slate-400">Locate Us : <a href="https://maps.app.goo.gl/ZSCeQBmo6sywXMgi9" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors break-all">https://maps.app.goo.gl/ZSCeQBmo6sywXMgi9</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Society Ledgers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate(PageView.PRIVACY)} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};