import React from 'react';
import { SectionWrapper } from '../components/UI/SectionWrapper';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

// Import testimonial images
import satishRustagiImg from '../assets/SatishRustagiSenorita.jpeg';
import preethiSubramanianImg from '../assets/PreethiSubramanianNVTLifesquare.jpeg';
import anandAgrawalImg from '../assets/Anand Agrawal DSR Whitewaters.jpeg';
import rajanBMImg from '../assets/Ranan BM Sobha Daffodil.jpg';
import biplobDasImg from '../assets/BiplobDasManaForesta.jpg';
import abhishekKumarImg from '../assets/AbhishekKumarMyGate.jpg';

export const Testimonials: React.FC = () => {
  // Updated profile images array with Rajan BM moved to the second position
  const profileImages = [
    satishRustagiImg, // Satish Rustagi
    rajanBMImg,       // Rajan BM (Moved to second position)
    anandAgrawalImg,  // Anand Agrawal
    preethiSubramanianImg, // Preethi Subramanian
    biplobDasImg,     // Biplob Das
    abhishekKumarImg, // Abhishek Kumar
  ];

  // Updated dynamic image styles
  const getImageStyle = (index: number): React.CSSProperties => {
    if (index === 2) {
      // Specific style for Anand Agrawal
      return {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        objectPosition: 'center top',
        transform: 'scale(1.1)', // Slight zoom-in
      };
    }
    if (index === 4) {
      // Specific adjustment for Biplob Das
      return {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        objectPosition: 'center top',
      };
    }
    if (index === 5) {
      // Adjustment for Abhishek Kumar to focus on face
      return {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        objectPosition: 'left center', // Focus on the left to highlight the face
        transform: 'scale(0.9)', // Slight zoom-out
      };
    }
    // Default profile image style for others
    return {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      objectPosition: 'center',
    };
  };

  return (
    <div className="pt-32 sm:pt-36 md:pt-20">
      <SectionWrapper background="dark">
        <div className="text-center max-w-3xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-900/50 backdrop-blur-sm text-brand-200 text-xs font-semibold mb-6 border border-brand-500/30">
            Trusted by Leading Societies
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Testimonials</h1>
          <p className="text-lg sm:text-xl text-slate-300">
            Experiences of some of the Societies that we serve, and affiliations that we have...
          </p>
        </div>
      </SectionWrapper>

      <div className="bg-slate-50 py-12 sm:py-16 md:py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                {/* Profile Header */}
                <div className="flex items-start gap-4 sm:gap-5 mb-6 border-b border-slate-50 pb-6">
                  <img
                    src={profileImages[i % profileImages.length]}
                    alt={t.name}
                    className="rounded-full border-3 border-brand-200 shadow-lg"
                    style={getImageStyle(i)} // Apply dynamic styles for specific profiles
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-tight mb-1">
                      {t.name}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      <span className="block sm:inline">{t.societyName}</span>
                      {t.units && (
                        <span className="text-slate-400 block sm:inline"> • {t.units} Units</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Content - Text Justified */}
                <div className="relative flex-grow">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
                    "{t.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};