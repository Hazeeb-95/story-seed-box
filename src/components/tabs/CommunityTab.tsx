import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Monitor,
  Smartphone,
  Calendar,
  HeartPulse,
  FileText,
  Network,
  Star,
  MapPin,
  Users,
  Clock,
  Shield,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Heart,
  Handshake,
  ChevronDown,
  ChevronUp,
  Check,
  Phone,
  Mail,
} from "lucide-react";

// Custom hook for scroll-triggered animations
const useInView = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Animated counter component
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Care delivery model card
const CareDeliveryCard = ({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  delay: number;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`glassmorphism-card p-8 h-full flex flex-col transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-white/90">
            <Check className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
      >
        {ctaText}
      </Button>
    </div>
  );
};

// Care manager profile card
const CareManagerCard = ({
  name,
  credentials,
  specialization,
  location,
  quote,
  imageIndex,
  delay,
}: {
  name: string;
  credentials: string;
  specialization: string;
  location: string;
  quote: string;
  imageIndex: number;
  delay: number;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center"
      >
        <Users className="h-10 w-10 text-primary" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 text-center">{name}</h4>
      <p className="text-sm text-gray-600 text-center mb-2">{credentials}</p>
      <p className="text-sm text-primary text-center mb-3">{specialization}</p>
      <div className="flex justify-center mb-3 gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-gray-700 italic text-center">"{quote}"</p>
      <p className="text-xs text-gray-500 text-center mt-2">{location}</p>
    </div>
  );
};

// Journey step component
const JourneyStep = ({
  icon: Icon,
  step,
  title,
  description,
  isLast,
  delay,
}: {
  icon: React.ElementType;
  step: number;
  title: string;
  description: string;
  isLast: boolean;
  delay: number;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div className="flex flex-col items-center relative" ref={ref}>
      <div
        className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center shadow-lg transition-all duration-500 ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <Icon className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
      </div>
      <div
        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-coral text-white text-sm font-bold flex items-center justify-center transition-all duration-500 ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ transitionDelay: `${delay + 100}ms` }}
      >
        {step}
      </div>
      <h4
        className={`text-lg font-semibold text-gray-900 mt-4 text-center transition-all duration-500 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${delay + 150}ms` }}
      >
        {title}
      </h4>
      <p
        className={`text-sm text-gray-600 text-center mt-2 max-w-[200px] transition-all duration-500 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${delay + 200}ms` }}
      >
        {description}
      </p>
      {!isLast && (
        <div
          className={`hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-primary to-purple -z-10 transition-all duration-700 origin-left ${
            isInView ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transitionDelay: `${delay + 300}ms` }}
        />
      )}
    </div>
  );
};

// FAQ Item component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 py-6 cursor-pointer hover:bg-gray-50/50 transition-colors px-4 -mx-4 rounded-lg">
      <div className="flex justify-between items-center" onClick={onClick}>
        <h4 className="text-lg font-semibold text-gray-900 pr-4">{question}</h4>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
        )}
      </div>
      <div
        className={`mt-4 text-gray-700 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

// Testimonial card
const TestimonialCard = ({
  quote,
  name,
  location,
  careType,
}: {
  quote: string;
  name: string;
  location: string;
  careType: string;
}) => {
  return (
    <div className="min-w-[350px] md:min-w-[400px] bg-white rounded-2xl p-8 shadow-lg snap-center flex-shrink-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="text-sm text-primary font-medium">{careType}</p>
    </div>
  );
};

// City card for coverage map
const CityCard = ({
  city,
  careManagers,
  clinics,
  coverage,
}: {
  city: string;
  careManagers: number;
  clinics: number;
  coverage: string;
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-primary" />
        <span className="font-medium text-gray-900">{city}</span>
      </div>
      <div className="flex gap-4 text-sm text-gray-600">
        <span>{careManagers} CMs</span>
        <span>{clinics} Clinics</span>
        <span className="text-primary">{coverage}</span>
      </div>
    </div>
  );
};

export const CommunityTab = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: heroTextRef, isInView: isHeroInView } = useInView(0.1);

  const careDeliveryModels = [
    {
      icon: Home,
      title: "Care2Home",
      description:
        "Community Care Managers visit you at home with portable diagnostic devices. Get comprehensive health screening, instant results, and personalized treatment plans—all from your living room.",
      features: [
        "90+ diagnostic parameters",
        "15-minute comprehensive screening",
        "Same-day medication delivery",
        "Insurance coordination included",
      ],
      ctaText: "Schedule Home Visit",
    },
    {
      icon: Building2,
      title: "Smart Community Clinics",
      description:
        "Advanced diagnostic centers in your neighborhood. Walk-in or book appointments for comprehensive care powered by AI-driven precision diagnostics.",
      features: [
        "No wait times with smart scheduling",
        "Full-body health examination",
        "Collaborative specialist care",
        "Health & Wealth Card rewards",
      ],
      ctaText: "Find Nearest Clinic",
    },
    {
      icon: Monitor,
      title: "Care Kiosks",
      description:
        "Self-service health stations in shopping malls, gyms, and public spaces. Quick vitals check, basic diagnostics, and AI-assisted health guidance on the go.",
      features: [
        "Available 24/7",
        "Instant health vitals",
        "Connect to care manager",
        "Track health over time",
      ],
      ctaText: "Locate Kiosks",
    },
  ];

  const careManagers = [
    {
      name: "Priya Sharma",
      credentials: "RN, CCM Certified",
      specialization: "Cardiac Care Specialist",
      location: "Serving Chennai for 3+ years",
      quote: "I love bringing healthcare directly to families who need it most.",
    },
    {
      name: "Rahul Verma",
      credentials: "MBBS, Community Health",
      specialization: "Geriatric Care Expert",
      location: "Serving Mumbai for 2+ years",
      quote: "Every home visit is an opportunity to make a real difference.",
    },
    {
      name: "Anita Desai",
      credentials: "MSN, Public Health",
      specialization: "Maternal & Child Health",
      location: "Serving Bangalore for 4+ years",
      quote: "Preventive care in the community saves lives and builds trust.",
    },
    {
      name: "Mohammed Khan",
      credentials: "RN, Diabetes Educator",
      specialization: "Chronic Disease Management",
      location: "Serving Hyderabad for 2+ years",
      quote: "Managing chronic conditions is easier when care comes to you.",
    },
    {
      name: "Lakshmi Nair",
      credentials: "BSN, Oncology Certified",
      specialization: "Palliative Care",
      location: "Serving Kochi for 3+ years",
      quote: "Compassionate care at home provides comfort when it matters most.",
    },
    {
      name: "Vikram Singh",
      credentials: "MBBS, Emergency Medicine",
      specialization: "Acute Care Response",
      location: "Serving Delhi NCR for 2+ years",
      quote: "Quick response and proper care can be life-saving.",
    },
  ];

  const journeySteps = [
    {
      icon: Smartphone,
      title: "Request Care",
      description: "Call, app, or walk-in to request a Community Care Manager visit",
    },
    {
      icon: Calendar,
      title: "Match & Schedule",
      description: "AI matches you with the right care manager based on your needs",
    },
    {
      icon: HeartPulse,
      title: "Care Delivered",
      description: "Care manager arrives with diagnostic equipment for screening",
    },
    {
      icon: FileText,
      title: "Instant Results",
      description: "Get results in 15-20 minutes with AI-assisted analysis",
    },
    {
      icon: Network,
      title: "Follow-Up",
      description: "Continuous monitoring, medication delivery, and specialist referrals",
    },
  ];

  const faqItems = [
    {
      question: "How quickly can a Care Manager come to my home?",
      answer:
        "Care Managers are typically available within 2-4 hours for routine visits, and within 1 hour for urgent care requests. In metro areas, same-hour service is often available.",
    },
    {
      question: "What diagnostic tests can be done at home?",
      answer:
        "Our portable diagnostic equipment can perform 90+ tests including complete blood count, blood chemistry, cardiac markers, thyroid function, diabetes panel, liver and kidney function tests, and basic imaging.",
    },
    {
      question: "How much does Care2Home cost?",
      answer:
        "Comprehensive home visits start at ₹1,500 for basic screening and ₹3,500 for full diagnostic panels. Subscription plans are available for regular care needs, offering significant savings.",
    },
    {
      question: "Is this covered by insurance?",
      answer:
        "Yes, we work with major insurance providers. Many preventive care services are covered under health insurance plans. Our team handles all insurance coordination and claims processing.",
    },
    {
      question: "What qualifications do Care Managers have?",
      answer:
        "All Care Managers are licensed healthcare professionals (RNs, LPNs, or medical graduates) with additional certification in community care management and training on our diagnostic equipment.",
    },
    {
      question: "Can I request the same Care Manager for follow-ups?",
      answer:
        "Absolutely! You can request your preferred Care Manager for continuity of care. Our system tracks your care history and preferences to ensure personalized service.",
    },
    {
      question: "What happens in an emergency?",
      answer:
        "Our Care Managers are trained in emergency response. They can stabilize patients, coordinate with emergency services, and ensure you get to the appropriate care facility quickly.",
    },
    {
      question: "How do I pay for services?",
      answer:
        "We accept all major payment methods including credit/debit cards, UPI, net banking, and cash. T-Pay wallet users get additional discounts and instant payment confirmation.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The Care Manager came to my home with all the equipment. Within 20 minutes, I had my results and treatment plan. This saved me a full day of clinic visits.",
      name: "Sunita Reddy",
      location: "Hyderabad",
      careType: "Care2Home - Comprehensive Checkup",
    },
    {
      quote:
        "My elderly father doesn't have to travel anymore for his diabetes monitoring. The CCM visits weekly and adjusts his care plan as needed.",
      name: "Amit Patel",
      location: "Ahmedabad",
      careType: "Care2Home - Chronic Disease Management",
    },
    {
      quote:
        "The Smart Clinic near my office made my annual checkup so convenient. In and out in 30 minutes with full results on my app.",
      name: "Neha Gupta",
      location: "Bangalore",
      careType: "Smart Clinic Visit",
    },
    {
      quote:
        "As a working mother, finding time for health checkups was impossible. Care2Home changed everything—care comes to us now.",
      name: "Meera Krishnan",
      location: "Chennai",
      careType: "Care2Home - Family Health",
    },
    {
      quote:
        "Telth's CCM network has extended our reach to underserved communities. Our patients get better outcomes with the continuous care model.",
      name: "Dr. Rajesh Kumar",
      location: "Apollo Hospitals, Delhi",
      careType: "Healthcare Provider",
    },
  ];

  const cities = [
    { city: "Mumbai", careManagers: 85, clinics: 12, coverage: "Full" },
    { city: "Delhi NCR", careManagers: 72, clinics: 15, coverage: "Full" },
    { city: "Bangalore", careManagers: 68, clinics: 10, coverage: "Full" },
    { city: "Chennai", careManagers: 54, clinics: 8, coverage: "Full" },
    { city: "Hyderabad", careManagers: 48, clinics: 7, coverage: "Full" },
    { city: "Pune", careManagers: 35, clinics: 5, coverage: "Full" },
    { city: "Kolkata", careManagers: 42, clinics: 6, coverage: "Partial" },
    { city: "Ahmedabad", careManagers: 28, clinics: 4, coverage: "Partial" },
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0A1628] to-[#028090] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div ref={heroTextRef} className="space-y-8">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ${
                  isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Healthcare That Comes to Your Community
              </h1>
              <p
                className={`text-lg sm:text-xl text-gray-200 leading-relaxed transition-all duration-700 delay-100 ${
                  isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Professional care managers bringing advanced diagnostics and personalized treatment to your doorstep. No appointments. No waiting rooms. Just care when you need it.
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-200 ${
                  isHeroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Button
                  size="lg"
                  className="px-8 py-6 h-auto bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Find Care in Your Area
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 h-auto border-2 border-[#00A896] text-white rounded-xl font-semibold hover:bg-[#00A896]/10 transition-all duration-300 bg-transparent text-lg"
                >
                  Become a Care Manager
                </Button>
              </div>
            </div>

            {/* Right: Visual */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isHeroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="relative animate-float">
                <div className="w-full aspect-square max-w-lg mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center animate-pulse-glow">
                      <HeartPulse className="h-16 w-16 text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-bold">Community Care</p>
                      <p className="text-white/70">Healthcare at your doorstep</p>
                    </div>
                    <div className="flex justify-center gap-8 pt-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-teal-300">500+</p>
                        <p className="text-sm text-white/70">Care Managers</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-coral">50+</p>
                        <p className="text-sm text-white/70">Cities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CARE DELIVERY MODELS */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 via-[#00A896]/20 to-[#FF6B6B]/20" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Community Care, Three Ways
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you want to receive care—at home, at a clinic, or on the go
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {careDeliveryModels.map((model, index) => (
              <CareDeliveryCard
                key={model.title}
                icon={model.icon}
                title={model.title}
                description={model.description}
                features={model.features}
                ctaText={model.ctaText}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMUNITY CARE MANAGERS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Text Content */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Your Community Care Team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meet the healthcare professionals bringing advanced care to your doorstep. Our Community Care Managers (CCMs) are trained in data-driven smart care, equipped with hospital-grade diagnostic tools, and dedicated to your health journey.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter end={500} suffix="+" />
                  </p>
                  <p className="text-sm text-gray-600">Care Managers</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter end={50} suffix="+" />
                  </p>
                  <p className="text-sm text-gray-600">Cities Served</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter end={10000} suffix="+" />
                  </p>
                  <p className="text-sm text-gray-600">Patients Cared For</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <p className="text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter end={94} suffix="%" />
                  </p>
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Right: Care Manager Cards */}
            <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {careManagers.map((cm, index) => (
                <CareManagerCard
                  key={cm.name}
                  name={cm.name}
                  credentials={cm.credentials}
                  specialization={cm.specialization}
                  location={cm.location}
                  quote={cm.quote}
                  imageIndex={index}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW COMMUNITY CARE WORKS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How Community Care Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From request to follow-up, your care journey is seamless and simple
            </p>
          </div>

          {/* Desktop: Horizontal */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-4">
            {journeySteps.map((step, index) => (
              <JourneyStep
                key={step.title}
                icon={step.icon}
                step={index + 1}
                title={step.title}
                description={step.description}
                isLast={index === journeySteps.length - 1}
                delay={index * 150}
              />
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="lg:hidden space-y-8">
            {journeySteps.map((step, index) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center shadow-lg relative">
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-coral text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  {index !== journeySteps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-purple mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICE COVERAGE MAP */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
            Care Across 50+ Cities
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left 2/3: Map Placeholder */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg min-h-[500px] flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Coverage Map</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Our network spans across India, UK, and USA with 500+ Care Managers ready to serve your community.
                  </p>
                </div>
                <div className="flex justify-center gap-8 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">200+</p>
                    <p className="text-sm text-gray-600">Hubs in India</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple">15</p>
                    <p className="text-sm text-gray-600">Launching in UK</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-coral">10</p>
                    <p className="text-sm text-gray-600">Launching in USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 1/3: City List */}
            <div className="space-y-4">
              <input
                type="search"
                placeholder="Search your city..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />

              <div className="space-y-3 max-h-[450px] overflow-y-auto pr-2">
                {cities.map((city) => (
                  <CityCard
                    key={city.city}
                    city={city.city}
                    careManagers={city.careManagers}
                    clinics={city.clinics}
                    coverage={city.coverage}
                  />
                ))}
              </div>

              <Button className="w-full" variant="outline">
                View All Cities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BECOME A CARE MANAGER */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] to-[#6C63FF] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Join Our Community Care Network
            </h2>
            <p className="text-xl text-gray-200">
              Bring advanced healthcare to your community while building a rewarding career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Benefits List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Why Join Telth?</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Flexible schedule - Work when you want" },
                  { icon: TrendingUp, text: "Competitive earnings + performance bonuses" },
                  { icon: GraduationCap, text: "Free training & certification in data-driven care" },
                  { icon: HeartPulse, text: "Access to cutting-edge diagnostic technology" },
                  { icon: TrendingUp, text: "Career growth opportunities across 3 countries" },
                  { icon: Handshake, text: "Be part of a mission-driven healthcare revolution" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-teal-300" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Start Your Application</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Professional Background</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40">
                    <option value="" className="text-gray-900">Select your background</option>
                    <option value="nurse" className="text-gray-900">Nurse (RN/LPN)</option>
                    <option value="doctor" className="text-gray-900">Doctor (MBBS/MD)</option>
                    <option value="healthcare" className="text-gray-900">Healthcare Worker</option>
                    <option value="other" className="text-gray-900">Other Medical Professional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email or Phone</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                    placeholder="Enter email or phone"
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full py-6 h-auto bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white rounded-xl font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-lg text-lg mt-4"
                >
                  Apply Now
                </Button>
                <p className="text-sm text-white/70 text-center">
                  We'll contact you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: COMMUNITY IMPACT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: 10000, suffix: "+", label: "Patients Served", icon: Heart },
              { value: 500, suffix: "+", label: "Active Care Managers", icon: Users },
              { value: 50, suffix: "+", label: "Cities Covered", icon: MapPin },
              { value: 94, suffix: "%", label: "Patient Satisfaction", icon: Star },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-primary/5 to-purple/5 rounded-2xl"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-primary to-purple flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <h3 className="text-2xl font-bold text-center mb-8">What Our Community Says</h3>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
                careType={testimonial.careType}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12">
            <div>
              {faqItems.slice(0, 4).map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
            <div>
              {faqItems.slice(4).map((item, index) => (
                <FAQItem
                  key={index + 4}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFAQ === index + 4}
                  onClick={() => setOpenFAQ(openFAQ === index + 4 ? null : index + 4)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00A896] to-[#6C63FF] text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Healthcare That Comes to You?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of families experiencing the future of community care
          </p>

          <Button
            size="lg"
            className="px-12 py-6 h-auto bg-white text-primary rounded-2xl text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Find Care in Your Area
          </Button>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 text-sm">
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-200" />
              No waiting rooms
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-200" />
              Same-day availability
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-200" />
              Insurance accepted
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5 text-teal-200" />
              94% satisfaction
            </span>
          </div>

          <div className="pt-12 text-sm text-white/80">
            <p className="mb-2">Questions? Contact our team:</p>
            <p className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                care@telth.org
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +91 99107 00028 (India)
              </span>
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +44 1235 390827 (UK)
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
