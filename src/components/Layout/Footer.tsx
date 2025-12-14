import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageView } from '../../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand olumn */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white text-brand-900 w-10 h-10 flex items-center justify-center rounded-lg font-bold text-lg tracking-tight shadow-md">
                SL
              </div>
              <span className="font-bold text-xl">Society Ledgers</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted technology-enabled compliance and accounting partner. exclusively for housing societies and RWAs across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-brand-100">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><button onClick={() => onNavigate(PageView.ABOUT)} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate(PageView.SERVICES)} className="hover:text-white transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate(PageView.TEAM)} className="hover:text-white transition-colors">Our Team</button></li>
              <li><button onClick={() => onNavigate(PageView.TESTIMONIALS)} className="hover:text-white transition-colors">Testimonials</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-brand-100">Expertise</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Society Accounting</li>
              <li>Taxation & GST</li>
              <li>Statutory Audit</li>
              <li>Legal Compliance</li>
              <li>Financial Advisory</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-brand-100">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-brand-500 flex-shrink-0" />
                <span>123, Compliance Tower, Business District, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <a href="mailto:contact@societyledgers.com" className="hover:text-white transition-colors">contact@societyledgers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Society Ledgers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate(PageView.PRIVACY)} className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};