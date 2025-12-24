import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { SectionWrapper } from '../components/UI/SectionWrapper';

export const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    position: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone Number');
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage =
      `*New Career Application - Society Ledgers*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Position:* ${formData.position || 'Any suitable position'}\n` +
      `*Experience:* ${formData.experience || 'Not specified'}\n` +
      `*Message:* ${formData.message || 'None'}\n`;

    const whatsappUrl = `https://wa.me/919036940860?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setTimeout(() => {
      alert('WhatsApp is opened! Please ensure to send your application message.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        position: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Join Our Team</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Be part of a specialized team that's transforming society accounting and compliance. We're looking for passionate
            professionals who want to make a real impact.
          </p>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Position Applied For */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Position Applied For</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                >
                  <option value="">Select a position</option>
                  <option value="Senior Accountant">Senior Accountant</option>
                  <option value="Junior Accountant">Junior Accountant</option>
                  <option value="Tax Consultant">Tax Consultant</option>
                  <option value="Compliance Executive">Compliance Executive</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="e.g., 3 years"
                />
              </div>

              {/* Cover Letter / Additional Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Cover Letter / Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  placeholder="Tell us why you'd be a great fit..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Opening WhatsApp...' : (
                  <>
                    <Send />
                    Send Application via WhatsApp
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Your application will be sent via WhatsApp to <span className="font-semibold text-brand-600">+91 9036940860</span>.
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};