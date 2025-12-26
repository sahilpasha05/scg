import React, { useState } from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    societyName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.message) {
      alert('Please fill in Name, Mobile Number, and Message');
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage =
      `*New Contact Inquiry - Society Ledgers*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Mobile:* +91 ${formData.mobile}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Society Name:* ${formData.societyName || 'Not provided'}\n\n` +
      `*Message:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/919036940860?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      alert('WhatsApp opened! Please send the message.\n\nThank you for contacting us!');
      setFormData({
        name: '',
        mobile: '',
        email: '',
        societyName: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Talk Compliance</h1>
            <p className="text-lg text-slate-600 mb-10">
              Get in touch with a trusted Accounting & Compliance Companion
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
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg shadow-md">
                    <Phone size={18} />
                    +91 90369 40860
                  </div>
                  <p className="text-xs text-slate-400 mt-2">Mon-Sat, 10am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg shadow-md">
                    <Mail size={18} />
                    admin@societyledgers.com
                  </div>
                </div>
              </div>

              {/* Plain Google Maps Link */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 mb-2">Locate Us</h4>
                  <p>
                    <a
                      href="https://maps.app.goo.gl/7FXkbsrudWS7MFjh6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:underline"
                    >
                      https://maps.app.goo.gl/ZSCeQBmo6sywXMgi9
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
            <p className="text-slate-600 mb-6 text-sm">Fill in the form and we'll get back to you via WhatsApp</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 font-medium select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-r-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message <span className="text-red-500">*</span></label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-75 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Submit <Send size={18} />
                  </>
                )}
              </button>
              <p className="text-xs text-slate-500 text-center">
                Your message will be sent via WhatsApp to <span className="font-semibold text-brand-600">+91 90369 40860</span>
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};