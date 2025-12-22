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
  // Profile images array matching the order in TESTIMONIALS
  const profileImages = [
    satishRustagiImg,      // 0 - Satish Rustagi (413x531 - portrait)
    preethiSubramanianImg, // 1 - Preethi (1101x1197)
    anandAgrawalImg,       // 2 - Anand Agrawal
    rajanBMImg,            // 3 - Rajan BM
    biplobDasImg,          // 4 - Biplob Das (547x785 - tall portrait)
    abhishekKumarImg       // 5 - Abhishek Kumar
  ];

  // Get image size - Satish, Anand, Biplob: 128px, Others: 96px
  const getImageSize = (index: number) => {
    if (index === 0) { // Satish Rustagi
      return "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md: h-32"; // Responsive:  96px -> 112px -> 128px
    }
    if (index === 2) { // Anand Agrawal
      return "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"; // Responsive: 96px -> 112px -> 128px
    }
    if (index === 4) { // Biplob Das
      return "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"; // Responsive: 96px -> 112px -> 128px
    }
    return "w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24"; // Responsive: 80px -> 88px -> 96px for others
  };

  // Get image style
  const getImageStyle = (index: number) => {
    if (index === 2) { // Anand Agrawal - scale-110
      return {
        transform:  'scale(1.1)',
        objectPosition: 'center top'
      };
    }
    if (index === 4) { // Biplob Das - scale-100 (normal)
      return {
        transform:  'scale(1)', // scale-100 = normal size
        objectPosition: 'center top'
      };
    }
    return {};
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
            {TESTIMONIALS. map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y:  20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 hover: shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                {/* Profile Header */}
                <div className="flex items-start gap-4 sm:gap-5 mb-6 border-b border-slate-50 pb-6">
                  <img 
                    src={profileImages[i % profileImages. length]} 
                    alt={t.name}
                    className={`${getImageSize(i)} flex-shrink-0 rounded-full object-cover border-3 border-brand-200 shadow-lg`}
                    style={getImageStyle(i)}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 text-base sm:text-lg leading-tight mb-1">{t.name}</p>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      <span className="block sm:inline">{t.societyName}</span>
                      {t.units && <span className="text-slate-400 block sm:inline"> • {t. units} Units</span>}
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