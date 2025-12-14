import { 
  BookOpen, 
  FileCheck, 
  Scale, 
  Landmark, 
  Gavel, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Users,
  Layers,
  FileBarChart,
  Lightbulb,
  Award
} from 'lucide-react';
import { type NavItem, PageView, type ServiceItem, type StrengthItem, type TeamMember, type Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: PageView.HOME },
  { label: 'About Us', view: PageView.ABOUT },
  { label: 'Services', view: PageView. SERVICES },
  { label: 'Core Strengths', view:  PageView.CORE_STRENGTHS },
  { label: 'Team', view: PageView. TEAM },
  { label:  'Testimonials', view:  PageView.TESTIMONIALS },
  { label: 'Contact', view: PageView.CONTACT },
];

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1920", // Apartment Complex
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1920", // Accounting/Finance
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920", // Modern Building
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1920"  // Professional Meeting
];

export const SERVICES:  ServiceItem[] = [
  {
    title: "Society Accounting & Bookkeeping",
    description: "End-to-end management of your society's accounts with precision and transparency.  We handle daily vouchers, expense tracking, and bank reconciliation.",
    icon: <BookOpen className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Annual Audit & Reporting",
    description: "Comprehensive statutory audits and detailed financial reporting for AGM readiness. We ensure your balance sheets are accurate and compliant with state regulations.",
    icon: <FileCheck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Income Tax Compliance",
    description:  "Expert handling of TDS, ITR filing, and tax planning specific to housing societies. We minimize liability while ensuring 100% adherence to tax laws.",
    icon: <Scale className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "GST Advisory & Filing",
    description: "Navigation of complex GST regulations for RWAs.  From registration to monthly filing and input tax credit reconciliation, we handle it all.",
    icon: <Landmark className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Registrar & Legal Compliance",
    description: "Adherence to Societies Acts, Model Bye-Laws, and Registrar requirements. We assist with amendment of bye-laws, election conduct, and dispute resolution.",
    icon: <Gavel className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Budgeting & Financial Advisory",
    description: "Strategic financial planning to optimize maintenance charges and sinking funds. We help you plan for major repairs and long-term sustainability.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export const STRENGTHS: StrengthItem[] = [
  {
    title: "Niche Expertise",
    description: "We don't do everything. We specialize exclusively in Housing Societies & RWAs.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-600" />
  },
  {
    title: "Tech-Led Efficiency",
    description: "Seamless integration with platforms like MyGate and cloud-based accounting tools.",
    icon: <Zap className="w-6 h-6 text-brand-600" />
  },
  {
    title: "Timely Reporting",
    description: "Monthly MIS and financial snapshots delivered on time, every time.",
    icon: <Clock className="w-6 h-6 text-brand-600" />
  },
  {
    title: "Personalized Advisory",
    description: "We aren't just accountants; we are your strategic compliance partners.",
    icon: <Users className="w-6 h-6 text-brand-600" />
  }
];

export const DETAILED_STRENGTHS: StrengthItem[] = [
  {
    title: "Niche Expertise in Society Accounting",
    description: "Unlike generic accounting firms, Society Ledgers is built specifically for housing societies.  We understand the nuances of registration, accounting, income tax matters, GST matters, annual returns, and audits for societies, and carry the expertise to handle all of them.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "100% Compliance-Driven Services",
    description: "\"Keeping you compliant\" is our core service commitment. We ensure societies remain in good standing with government authorities and regulators.  Our structured workflows, standard operating procedures, and compliance calendars help prevent missed deadlines and downstream consequences.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title:  "Technology-Led Efficiency",
    description: "Our in-house communication engine makes it easy to share documents, track progress, and access reports through a secure digital interface.  These technology-driven processes save time, eliminate paperwork chaos, and maintain a complete digital audit trail.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "End-to-End Support",
    description: "We manage everything from day-to-day bookkeeping, invoice raising, expense recording, and bank reconciliation to GST compliance, TDS compliance, annual accounts finalization, audit coordination, and advisory services.  Think of us as your virtual finance office—ready when you need it.",
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: "Timely and Transparent Reporting",
    description: "With Society Ledgers, there are no surprises. You receive well-structured statutory summaries and timely compliance updates, ensuring a high level of transparency, especially around regulatory matters.",
    icon: <FileBarChart className="w-8 h-8" />
  },
  {
    title: "Personalized Advisory",
    description: "Small advice makes a big difference. With deep expertise in society accounting and compliance, we act as a trusted partner for advisory needs including vendor selection, project budgeting, fund raising, and complex compliance scenarios.",
    icon: <Lightbulb className="w-8 h-8" />
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "CA Arvind K.  Agrawal",
    role: "Chief Mentor",
    qualification: "FCA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "Mr. Arvind Kumar Agrawal is a Fellow Member of the Institute of Chartered Accountants of India.  Before completing his CA in 1990, he had a strong academic record.  He is also a Chartered Trust and Estate Planner certified by the American Academy of Financial Management, USA. He carries rich experience in finance processes, audit, Income Tax, and GST consulting and is passionate about IT-enabled enhancements in professional practice."
  },
  {
    name: "CA Anoop K. Agrawal",
    role: "Principal Consultant (Operations)",
    qualification: "FCA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Mr.  Anoop Kumar Agrawal has been a Fellow Member of the Institute of Chartered Accountants of India since 2000. He provides professional services including audit, management consultancy, tax consultancy, accounting services, statutory compliance consulting, and secretarial services. Prior to starting his CA practice in 2012, he worked on financial process review and improvement projects for domestic and international companies."
  },
  {
    name: "Mr. Kunal Maheshwari",
    role: "Principal Consultant (Technology)",
    qualification: "M.Tech (IIT Madras)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Kunal Maheshwari is an AI consultant and serial entrepreneur with over 20 years of engineering leadership experience. An IIT Madras graduate, he has built and scaled products, teams, and businesses, including the All Is Well App."
  },
  {
    name: "Mr. Pavan Gururaj Bhardwaj",
    role: "Industry Advisor",
    qualification: "Industry Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Pavan Bhardwaj is an entrepreneur and founder of Esteem Enterprises, providing Power, Solar, Water, and Home Automation solutions. He served two terms as Founder President of his apartment association in Hoodi (Bengaluru) and is an Assistant Chief Traffic Warden with the BCP Traffic Warden Organisation."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mr. Satish Rustagi",
    role: "Management Committee",
    societyName: "Sattva Senorita Apartments",
    units: 423,
    content: "The team at Society Ledgers don't just handle the accounts; they provide proactive advice that helps us make informed decisions. Their insights carry immense value.  For our 423-unit society, they completely transformed the way accounting was handled and brought in significant process improvements and compliance rigor, with complete process ownership. We have thoroughly enjoyed our association with them for over 5 years."
  },
  {
    name: "Mrs. Preethi Subramanian",
    role: "Management Committee",
    societyName:  "NVT LifeSquare Villas",
    units: 65,
    content: "Though we are a small association with only 65 villa units, the Society Ledgers team streamlined our accounting processes and advised us to migrate from Tally to MyGate for real-time visibility of accounts and elimination of data duplication. They planned and executed the migration meticulously and identified compliance gaps in our earlier setup, providing appropriate solutions.  We are very happy with our association with them for accounting and compliance services."
  },
  {
    name: "Mr. Anand Agrawal",
    role: "Management Committee",
    societyName: "DSR Whitewaters",
    units: 400,
    content: "As an RWA of 400+ units, we feel fortunate to have engaged Society Ledgers.  From the early stages, their value addition was evident.  They identified an important GST compliance gap and helped us correct it through detailed data analysis and corrective measures. Their depth of knowledge and experience in RWA compliance matters is truly commendable."
  },
  {
    name: "Mr. B. M. Rajan",
    role: "Management Committee",
    societyName: "Sobha Daffodil Condominiums",
    content: "In our 7 years of association with Society Ledgers, we have been impressed with their compliance-oriented approach, responsiveness, and accuracy. Their proactive working style ensures we rarely need to follow up on accounting or compliance matters. They transitioned us from periodic accounting to real-time accounting, significantly improving compliance levels and stakeholder satisfaction.  Their processes also helped us identify non-compliant vendors, enabling corrective actions.  We look forward to a long-term association with them."
  }
];