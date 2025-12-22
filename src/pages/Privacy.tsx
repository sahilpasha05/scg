import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Introduction</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Society Ledgers (operated by LedgerWorks Private Limited) is committed to protecting your privacy.  
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                    visit our website <a href="https://scg-lilac. vercel.app/" className="text-brand-600 hover:underline">https://scg-lilac.vercel.app/</a> or 
                    use our services.  
                  </p>
                </div>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-brand-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Information We Collect</h2>
                  <div className="space-y-4 text-slate-600">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Personal Information</h3>
                      <p className="leading-relaxed">
                        When you contact us or use our services, we may collect:  
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                        <li>Name and contact details (email, phone number)</li>
                        <li>Society/organization name and address</li>
                        <li>Professional information relevant to our services</li>
                        <li>Career application information (resume, qualifications)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Usage Information</h3>
                      <p className="leading-relaxed">
                        We automatically collect certain information when you visit our website:  
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>IP address and location data</li>
                        <li>Pages visited and time spent on our website</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-brand-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">How We Use Your Information</h2>
                  <div className="space-y-2 text-slate-600">
                    <p className="leading-relaxed">We use the collected information for the following purposes:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Provide and maintain our accounting and compliance services</li>
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Process career applications and recruitment</li>
                      <li>Send service updates and important notices</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal and regulatory requirements</li>
                      <li>Prevent fraud and enhance security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Information Sharing and Disclosure</h2>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and providing services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Retention</h2>
              <p className="text-slate-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Rights</h2>
              <div className="space-y-2 text-slate-600 leading-relaxed">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Access: </strong> Request a copy of your personal data we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion: </strong> Request deletion of your personal data</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
                and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Third-Party Links</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
                content of these external sites. We encourage you to review their privacy policies.  
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children.  
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Changes to This Privacy Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. 
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-brand-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:  
              </p>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-600" />
                  <a href="mailto:admin@societyledgers.com" className="hover:text-brand-600">
                    admin@societyledgers. com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-600" />
                  <a href="tel:+919036940860" className="hover:text-brand-600">
                    +91 90369 40860
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-brand-600 mt-1" />
                  <div>
                    <p className="font-semibold">LedgerWorks Private Limited</p>
                    <p># 134, Krishnappa Layout, Doddakannelli,</p>
                    <p>Sarjapur Road, Bengaluru – 560035</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};