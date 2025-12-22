import React, { useState } from 'react';
import { Briefcase, Clock, ArrowRight, Upload, User, Phone, Mail, FileText, Send } from 'lucide-react';
import { SectionWrapper } from '../components/UI/SectionWrapper';

export const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    position: '',
    message:  ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target. name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      setResume(file);
    }
  };

  const handleSubmit = async (e: React. FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !resume) {
      alert('Please fill in Name, Phone Number and upload your Resume');
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
      `*Message:* ${formData.message || 'None'}\n\n` +
      `*Resume:* ${resume.name} (${(resume.size / 1024).toFixed(2)} KB)\n\n` +
      `_I will share my resume document separately._`;

    const whatsappUrl = `https://wa.me/919036940860?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show instruction
    setTimeout(() => {
      alert('WhatsApp opened!  Please:\n1. Send the message\n2. Attach your resume file in the chat\n\nThank you for your application!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone:  '',
        experience: '',
        position: '',
        message: ''
      });
      setResume(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Be part of a specialized team that's transforming society accounting and compliance. 
            We're looking for passionate professionals who want to make a real impact.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md: p-12 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid md: grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Niche Expertise</h3>
              <p className="text-slate-600">
                Work in a specialized domain focused exclusively on housing societies and RWAs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Work-Life Balance</h3>
              <p className="text-slate-600">
                Flexible working hours and a supportive environment that values your time
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Growth Opportunities</h3>
              <p className="text-slate-600">
                Continuous learning and clear career progression paths
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Submit Your Application
              </h2>
              <p className="text-slate-600">
                Fill in your details and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    placeholder="your. email@example.com"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Position Applied For
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select a position</option>
                    <option value="Senior Accountant">Senior Accountant</option>
                    <option value="Junior Accountant">Junior Accountant</option>
                    <option value="Tax Consultant">Tax Consultant</option>
                    <option value="Compliance Executive">Compliance Executive</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Years of Experience
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="experience"
                    value={formData. experience}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
                    placeholder="e.g., 3 years"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Upload Resume <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,. docx"
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-brand-500 hover:bg-brand-50 transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                      {resume ? (
                        <div>
                          <p className="text-sm font-semibold text-brand-600">{resume.name}</p>
                          <p className="text-xs text-slate-500 mt-1">
                            {(resume.size / 1024).toFixed(2)} KB
                          </p>
                          <p className="text-xs text-slate-400 mt-2">Click to change file</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm font-semibold text-slate-700">Click to upload resume</p>
                          <p className="text-xs text-slate-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Cover Letter / Additional Message
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us why you'd be a great fit..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled: cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Opening WhatsApp...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Application via WhatsApp
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center mt-4">
                Your application will be sent via WhatsApp to <span className="font-semibold text-brand-600">+91 8147260587</span>. 
                Please attach your resume file in the WhatsApp chat after sending the message.
              </p>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};