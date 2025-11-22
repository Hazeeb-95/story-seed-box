import { useState } from "react";
import { HeroSection } from "../HeroSection";
import { Button } from "../ui/button";
import { InquiryDialog } from "../InquiryDialog";
import { FloatingCTABar } from "../FloatingCTABar";
import { CareHomeFAQ } from "../CareHomeFAQ";
import {
  Home,
  Hospital,
  Clock,
  UserCheck,
  Stethoscope,
  Activity,
  AlertCircle,
  Calendar,
  Users,
  Heart,
  Package,
  ChevronRight,
  Smartphone,
  Video,
  Database,
  Unlock,
  HeartPulse,
  Moon,
  TrendingUp,
  Phone,
  Ambulance,
  FileText,
  MapPin,
  Headset,
  Cpu,
  IdCard,
  Monitor,
  Zap,
  Crown,
  Building2,
  TrendingDown,
  Shield,
  CheckCircle,
  MessageCircle,
  Mail,
} from "lucide-react";
import heroCareHome from "@/assets/hero-carehome.jpg";

export const CareHomeTab = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  const openInquiryDialog = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection
        title="Hospital-Grade Care at Your Doorstep in 15 Minutes"
        subtitle="Complete care cycle from diagnosis to treatment—delivered by your dedicated Care Manager at home."
        image={heroCareHome}
        video="/videos/home-care-treatment.mp4"
        primaryCta="Request Care@Home"
        secondaryCta="View Care Plans"
        onPrimaryClick={() => openInquiryDialog("Request Care@Home")}
        onSecondaryClick={() => openInquiryDialog("Care Plans Inquiry")}
      />

      {/* Section 2: What is Care@Home? */}
      <section className="py-section-desktop bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-section-headline mb-6 text-foreground">
              Complete Care Cycle in 15 Minutes at Home
            </h2>
            <p className="text-body-large text-muted-foreground">
              Your dedicated Care Manager brings hospital-grade diagnostics to your doorstep.
              Comprehensive health assessment, AI-powered analysis, and treatment plan—all completed
              in 15 minutes without leaving home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-lg border border-border shadow-card hover-lift text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Hospital className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-card-title font-bold mb-2 text-foreground">
                Hospital-Grade Diagnostics
              </h3>
              <p className="text-muted-foreground">Comprehensive testing at home</p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border shadow-card hover-lift text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-card-title font-bold mb-2 text-foreground">15-Minute Care Cycle</h3>
              <p className="text-muted-foreground">Assessment to treatment plan</p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border shadow-card hover-lift text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-card-title font-bold mb-2 text-foreground">
                24/7 Health Companion
              </h3>
              <p className="text-muted-foreground">Your dedicated Care Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Complete Care Services */}
      <section className="container py-section-desktop">
        <div className="text-center mb-12">
          <h2 className="text-section-headline mb-4 text-foreground">
            All Healthcare Services at Your Doorstep
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Stethoscope,
              title: "Primary Care",
              description: "Health assessments, screenings, vaccinations",
            },
            {
              icon: Activity,
              title: "Chronic Disease Management",
              description: "Diabetes, hypertension, cardiac care",
            },
            {
              icon: AlertCircle,
              title: "Acute Care",
              description: "Immediate attention for sudden illnesses",
            },
            {
              icon: Calendar,
              title: "Follow-Up Care",
              description: "Post-surgery monitoring and recovery",
            },
            {
              icon: Clock,
              title: "Urgent Care",
              description: "24/7 response within 2 hours",
            },
            {
              icon: Users,
              title: "Specialty Coordination",
              description: "Connect with specialists globally",
            },
            {
              icon: Heart,
              title: "Wellness Programs",
              description: "Prevention and lifestyle optimization",
            },
            {
              icon: Package,
              title: "Care Plans",
              description: "Subscription-based personalized programs",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border border-border hover:border-primary hover:scale-105 transition-all duration-300"
            >
              <service.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-section-desktop bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-section-headline mb-4 text-foreground">
              Three Simple Steps to Hospital-Grade Care
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground">Book Visit</h3>
              <p className="text-muted-foreground">
                Schedule via app, web, or phone. Care Manager arrives at your preferred time.
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="h-8 w-8 text-primary" />
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground">15-Minute Assessment</h3>
              <p className="text-muted-foreground">
                Complete health screening with real-time AI analysis at home.
              </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ChevronRight className="h-8 w-8 text-primary" />
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground">Continuous Care</h3>
              <p className="text-muted-foreground">
                Virtual consultations, monitoring, medication delivery, regular follow-ups.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => openInquiryDialog("Book Your Care Manager")}>
              Book Your Care Manager
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Your Care Manager */}
      <section className="container py-section-desktop">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <Home className="h-32 w-32 text-primary/30" />
          </div>
          <div className="space-y-6">
            <h2 className="text-section-headline bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
              Your 24/7 Health Companion
            </h2>
            <p className="text-body-large text-muted-foreground leading-relaxed">
              More than a healthcare worker—your Care Manager is your personal health partner,
              available round the clock, coordinating everything from doctor visits to emergency
              response.
            </p>
            <div className="space-y-3">
              {[
                "Available 24/7 for all health concerns",
                "Know your complete health history",
                "Coordinate specialists and appointments",
                "Monitor your health data daily",
                "Manage medications and deliveries",
                "Handle emergencies immediately",
                "Provide health education and support",
                "Advocate for your best care",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <Button size="lg" onClick={() => openInquiryDialog("Assign My Care Manager")}>
              Assign My Care Manager
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: IoMT Devices */}
      <section className="py-section-desktop bg-charcoal">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-section-headline mb-4 text-white">
              Advanced Monitoring Devices for Home
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <Smartphone className="h-12 w-12 text-primary-light mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white">Smart Wearables</h3>
              <p className="text-white/80">
                24/7 heart rate, oxygen, activity tracking with real-time sync to your Care Manager
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <Activity className="h-12 w-12 text-primary-light mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white">Home Diagnostic Kit</h3>
              <p className="text-white/80">
                Lab-quality glucose, blood pressure, temperature monitoring at home
              </p>
            </div>
          </div>

          <p className="text-center text-white/60 mt-8 italic">
            All devices connect to RootCloud™ EHR for continuous Care Manager monitoring
          </p>
        </div>
      </section>

      {/* Section 7: Connect Any Doctor */}
      <section className="py-section-desktop bg-blue-50">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-section-headline mb-6 text-foreground">
              Your Doctors, Your Choice
            </h2>
            <p className="text-body-large text-muted-foreground">
              Work with any doctor you trust—in your city, across India, or internationally. Your
              Care Manager coordinates seamlessly with your chosen physicians while handling all
              local logistics.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { icon: Video, text: "Virtual consultations with any doctor" },
              { icon: Database, text: "Unified real-time health records" },
              { icon: Unlock, text: "No network restrictions" },
              { icon: Users, text: "Complete care coordination" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background px-6 py-4 rounded-full shadow-card flex items-center gap-3"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Continuous Monitoring */}
      <section className="container py-section-desktop">
        <div className="text-center mb-12">
          <h2 className="text-section-headline mb-4 text-foreground">
            Your Care Manager Watches Over Your Health 24/7
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div className="space-y-4">
            <Activity className="h-12 w-12 text-primary" />
            <h3 className="text-subsection font-bold text-foreground">Always Monitoring</h3>
            <p className="text-body-large text-muted-foreground">
              Continuous tracking of vitals, activity, medications, and early warning signs through
              IoMT devices—your Care Manager reviews daily.
            </p>
          </div>

          <div className="space-y-4">
            <HeartPulse className="h-12 w-12 text-primary" />
            <h3 className="text-subsection font-bold text-foreground">Proactive Care</h3>
            <p className="text-body-large text-muted-foreground">
              Issues caught and addressed before you feel symptoms. Personal attention, not just
              automated alerts.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-8 rounded-lg">
          <h4 className="font-bold text-xl mb-4 text-foreground">What's Monitored:</h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Daily vitals",
              "Medication adherence",
              "Sleep patterns",
              "Chronic condition metrics",
              "Recovery progress",
              "Early warning signs",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: SOS Emergency */}
      <section className="py-section-desktop bg-gradient-to-br from-red-500 to-orange-500">
        <div className="container">
          <div className="text-center mb-12">
            <AlertCircle className="h-20 w-20 text-white mx-auto mb-6" />
            <h2 className="text-section-headline mb-4 text-white">One Touch, Immediate Action</h2>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Health emergencies don't wait. One-touch SOS connects your Care Manager instantly—they
              coordinate ambulance, notify doctors, alert family, and guide you until help arrives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Phone, text: "Instant Care Manager response" },
              { icon: Ambulance, text: "Emergency service coordination" },
              { icon: Users, text: "Family automatic alerts" },
              { icon: FileText, text: "Medical history transmitted" },
              { icon: MapPin, text: "Real-time location sharing" },
              { icon: Headset, text: "Personal guidance until help arrives" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm p-6 rounded-lg border border-white/30"
              >
                <feature.icon className="h-8 w-8 text-white mb-3" />
                <p className="font-medium text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Care Plans */}
      <section className="py-section-desktop bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-section-headline mb-4 text-foreground">
              Personalized Care Plans for Your Health
            </h2>
            <p className="text-body-large text-muted-foreground">
              Every health need is unique. Our Care Plans are tailored specifically to you—not
              generic packages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {[
              {
                icon: Package,
                title: "Essential Care",
                features: [
                  "Monthly visits",
                  "Basic monitoring",
                  "Telemedicine",
                  "24/7 availability",
                ],
              },
              {
                icon: Zap,
                title: "Comprehensive Care",
                features: [
                  "Bi-weekly visits",
                  "Advanced diagnostics",
                  "Wearable monitoring",
                  "Priority access",
                ],
                popular: true,
              },
              {
                icon: Heart,
                title: "Chronic Care Management",
                features: [
                  "Weekly monitoring",
                  "Disease-specific protocols",
                  "Continuous tracking",
                  "Wellness advisor",
                ],
                popular: true,
              },
              {
                icon: Crown,
                title: "Premium Care",
                features: [
                  "On-demand availability",
                  "Complete monitoring",
                  "Global specialists",
                  "Concierge services",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-background p-6 rounded-lg border-2 ${
                  plan.popular ? "border-primary shadow-elegant scale-105" : "border-border"
                } hover-lift flex flex-col h-full`}
              >
                <plan.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-4 text-foreground">{plan.title}</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => openInquiryDialog("Care Plans Inquiry")}
                >
                  Enquire Pricing
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
              Up to 65% cost savings
            </span>{" "}
            with superior outcomes
          </p>
        </div>
      </section>

      {/* Section 11: Why Choose Care@Home */}
      <section className="container py-section-desktop">
        <div className="text-center mb-12">
          <h2 className="text-section-headline mb-4 bg-gradient-to-r from-primary to-accent-red bg-clip-text text-transparent">
            Hospital Quality, Home Comfort, Personal Care
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Building2,
              title: "Hospital-Grade Care",
              description:
                "Comprehensive diagnostics and specialist coordination at your doorstep",
            },
            {
              icon: Clock,
              title: "15-Minute Care Cycle",
              description: "Complete assessment to treatment in just 15 minutes",
            },
            {
              icon: UserCheck,
              title: "24/7 Health Companion",
              description: "Your dedicated Care Manager, always available, always caring",
            },
            {
              icon: TrendingDown,
              title: "65% Cost Savings",
              description: "Superior personalized care at fraction of traditional costs",
            },
            {
              icon: Stethoscope,
              title: "Your Choice of Doctors",
              description: "Work with any specialist while Care Manager coordinates locally",
            },
            {
              icon: Shield,
              title: "Proactive Prevention",
              description: "AI-powered predictions catch issues before they become serious",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-primary/5 p-6 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <benefit.icon className="h-10 w-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-white">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/90">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 12: Service Coverage */}
      <section className="py-section-desktop bg-gradient-to-br from-primary/10 to-accent-red/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-section-headline mb-4 text-foreground">
              Bringing Care@Home Across India
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg shadow-card mb-8">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                    Currently Serving
                  </div>
                  <p className="text-body-large text-foreground font-medium">
                    Chennai, New Delhi, Bangalore & surrounding areas
                  </p>
                </div>
                <div>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">
                    Expanding To
                  </div>
                  <p className="text-body-large text-foreground font-medium">
                    Mumbai, Hyderabad, Pune, Kolkata & major metros
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={() => openInquiryDialog("Check Availability in Your Area")}
              >
                Check Availability in Your Area
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Technology Platform */}
      <section className="py-section-desktop bg-slate-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-section-headline mb-4 text-white">
              Advanced Technology, Simple Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {[
              { icon: Database, title: "RootCloud™ EHR", description: "Blockchain-secured health records" },
              { icon: Cpu, title: "P3DSC Protocol", description: "AI-driven precision care" },
              { icon: IdCard, title: "G-Med ID", description: "Universal health identification" },
              { icon: Monitor, title: "DigiDoc Platform", description: "Integrated care management" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border-2 border-white/20 hover:border-white/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <tech.icon className="h-10 w-10 text-primary-light mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">{tech.title}</h3>
                <p className="text-sm text-white/80">{tech.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/60 italic">
            Technology works behind the scenes—your Care Manager manages everything for you.
          </p>
        </div>
      </section>

      {/* Section 14: Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent-red">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-section-headline text-white mb-4">
              Get Your Personal Care Manager Today
            </h2>
            <p className="text-body-large text-white/90">
              Start your journey with a dedicated 24/7 health companion
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
                onClick={() => openInquiryDialog("Book Your First Visit")}
              >
                Book Your First Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                onClick={() => openInquiryDialog("Enquire About Plans")}
              >
                Enquire About Plans
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <Phone className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-sm text-white font-medium">+91 99107 00028</p>
                <p className="text-sm text-white font-medium">+91 90720 70758</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <MessageCircle className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Live Chat</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <Mail className="h-6 w-6 text-white mx-auto mb-2" />
                <p className="text-sm text-white font-medium">info@telth.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <CareHomeFAQ />

      {/* Floating CTA Bar */}
      <FloatingCTABar
        onBookClick={() => openInquiryDialog("Book Care Manager")}
        onEnquireClick={() => openInquiryDialog("Enquire Plans")}
      />

      {/* Inquiry Dialog */}
      <InquiryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultInquiryType={selectedInquiryType}
      />
    </div>
  );
};
