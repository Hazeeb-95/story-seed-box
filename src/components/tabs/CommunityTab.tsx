import { ScrollingHeroSection } from "../ScrollingHeroSection";
import { ComparisonCard } from "../ComparisonCard";
import { LocationCard } from "../LocationCard";
import { HubSelectionCard } from "../HubSelectionCard";
import { PillarGlassCard } from "../PillarGlassCard";
import { TechnologyCard } from "../TechnologyCard";
import { CircularFlowDiagram } from "../CircularFlowDiagram";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  Shield,
  Heart,
  DollarSign,
  Brain,
  Globe,
  Calendar,
  Zap,
  MapPin,
  Handshake,
  Store,
  Hospital,
  Stethoscope,
  HeartPulse,
  MessageCircle,
  Sparkles,
  Building,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Landmark,
} from "lucide-react";

export const CommunityTab = () => {
  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <ScrollingHeroSection
        title="15 Days of Clinical Care in 15 Minutes"
        subtitle="Quantum-AI powered health hubs delivering comprehensive diagnostics, treatment, and care plans wherever you are—from urban centers to the most remote corners of the world"
        primaryCta="Bring Telth to Your Location"
        secondaryCta="Explore Franchise Opportunities"
      />

      {/* SECTION 1: 15-DAY TO 15-MINUTE REVOLUTION */}
      <ComparisonCard />

      {/* SECTION 2: HEALTHCARE EVERYWHERE */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Quantum-AI Hubs Wherever You Need Them
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing advanced precision care to every location, every community, every person
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Card 1 - Urban (Featured) */}
            <LocationCard
              imageSrc="/images/hub-locations/hospital.png"
              title="Urban Hospitals"
              hubType="Multispeciality AI Hub"
              capacity="200+ patients/day"
              services="Full multi-specialty care, surgical prep, emergency diagnostics"
              integration="Hospital EMR, specialist network"
              featured={true}
            />
            
            {/* Card 2 - Community */}
            <LocationCard
              imageSrc="/images/hub-locations/community-center.png"
              title="Community Centers"
              hubType="Advanced AI Hub"
              capacity="100-150 patients/day"
              services="Primary care, preventive screening, chronic disease management"
              integration="Local health programs, government schemes"
            />
            
            {/* Card 3 - Mall */}
            <LocationCard
              imageSrc="/images/hub-locations/mall-kiosk.jpg"
              title="Shopping Malls & Public Spaces"
              hubType="Basic AI Hub/Kiosk"
              capacity="50-75 patients/day"
              services="Walk-in diagnostics, health monitoring, vaccinations"
              integration="E-pharmacy, telemedicine"
            />
            
            {/* Card 4 - Remote & Mountain (Featured, spans 2 columns on lg) */}
            <div className="lg:col-span-2 lg:row-span-1">
              <LocationCard
                imageSrc="/images/hub-locations/remote-village.png"
                title="Remote & Mountain Areas"
                hubType="Telth ICU, Telth Advanced"
                capacity="30-60 patients/day"
                services="Mobile diagnostics, maternal care, infectious disease screening, emergency response"
                integration="Satellite connectivity, regional referral network"
                featured={true}
              />
            </div>
            
            {/* Card 5 - Corporate */}
            <LocationCard
              imageSrc="/images/hub-locations/corporate-wellness.jpg"
              title="Corporate Offices"
              hubType="Workplace Wellness Hub"
              capacity="80-100 employees/day"
              services="Annual checkups, preventive care, occupational health"
              integration="Corporate wellness programs, insurance"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-lg max-w-4xl mx-auto">
              From metro cities to mountain villages, from hospitals to homes—Telth Quantum-AI Hubs
              bring world-class care within 15 minutes of everyone
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HUB SELECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-telth-gray-50">
        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-telth-navy">
              Choose the Right Hub for Your Community's Need
            </h2>
            <p className="text-xl text-telth-gray-400 max-w-3xl mx-auto">
              From basic care to critical ICU monitoring, Telth offers quantum-AI powered solutions for every healthcare need
            </p>
          </div>

          {/* Hub Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <HubSelectionCard
              icon={Store}
              title="Basic"
              subtitle="Quantum AI Clinic Hub"
              bestFor="Shopping malls, pharmacies, small towns, franchises"
              capacity="50-75 patients per day"
              keyFeatures={[
                "50+ diagnostic parameters",
                "Walk-in care & health monitoring",
                "Vaccinations & preventive screening",
                "AI-powered health insights",
                "Telemedicine integration"
              ]}
            />
            <HubSelectionCard
              icon={Hospital}
              title="Advanced"
              subtitle="Quantum AI Clinic Hub"
              bestFor="Community centers, clinics, tier-2 cities, small hospitals"
              capacity="100-150 patients per day"
              keyFeatures={[
                "70+ diagnostic parameters",
                "Primary care & chronic disease management",
                "Multi-specialty consultations",
                "Advanced imaging capabilities",
                "Preventive screening programs"
              ]}
              highlight={true}
            />
            <HubSelectionCard
              icon={Stethoscope}
              title="Multispeciality"
              subtitle="Quantum AI Clinic Hub"
              bestFor="Hospitals, large medical centers, metro cities"
              capacity="200+ patients per day"
              keyFeatures={[
                "90+ diagnostic parameters",
                "Full multi-specialty care",
                "Surgical prep & emergency diagnostics",
                "Advanced biochemical analysis",
                "Comprehensive EMR integration"
              ]}
            />
            <HubSelectionCard
              icon={HeartPulse}
              title="AI ICU Plus"
              subtitle="Critical Care Hub"
              bestFor="Advanced hospitals, critical care centers, specialty clinics"
              capacity="ICU monitoring + 150 patients per day"
              keyFeatures={[
                "90+ parameters + ICU monitoring",
                "Critical care AI predictions",
                "Real-time patient monitoring",
                "Emergency response systems",
                "Specialist network integration"
              ]}
            />
          </div>

          {/* Bottom CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-elegant">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-telth-purple via-telth-teal to-telth-purple bg-[length:200%_100%] animate-border-flow -z-10">
                <div className="h-full w-full rounded-3xl bg-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-telth-coral to-telth-coral-light flex items-center justify-center mx-auto">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold text-telth-navy">
                  Ready to Bring Telth to Your Community?
                </h3>
                
                <p className="text-lg text-telth-gray-400 max-w-2xl mx-auto">
                  Our team will help you select the perfect hub configuration, understand investment options, and plan deployment for your specific needs.
                </p>

                {/* CTA Button */}
                <Link to="/partner">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-telth-teal to-telth-purple text-white hover:scale-105 transition-transform text-lg px-12 py-6 rounded-full shadow-lg"
                  >
                    Request More Information
                    <span className="ml-2">→</span>
                  </Button>
                </Link>

                {/* Additional info */}
                <p className="text-sm text-telth-gray-400">
                  All configurations include P3DSC™ AI system, G-Med ID™ integration, RootCloud™ EMR, T-Pay, and comprehensive training
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SIX PILLARS - GLASS MORPHISM BENTO GRID */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-muted to-background">
        {/* Background pattern (subtle) */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern" />

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Six Pillars of Quantum-AI Healthcare Delivery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary care delivery built on precision, prevention, and accessibility
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Pillar 1 - Featured (larger) */}
            <div className="lg:row-span-2">
              <PillarGlassCard
                icon={Shield}
                title="Preventive Care First"
                description="Detect health risks before symptoms appear with quantum-AI analyzing 90+ parameters."
                features={[
                  "Health risk prediction (20 years ahead)",
                  "Genetic screening & lifestyle analysis",
                  "Vaccination & wellness programs",
                ]}
                impact="Prevent 70% of chronic diseases"
                featured={true}
              />
            </div>
            
            {/* Pillar 2 */}
            <PillarGlassCard
              icon={Heart}
              title="Primary Care Excellence"
              description="Complete primary healthcare in 15 minutes—from acute care to chronic disease management."
              features={[
                "Acute & chronic disease care",
                "Maternal, child & geriatric health",
                "Mental health & minor procedures",
              ]}
              impact="90% of health needs resolved locally"
            />
            
            {/* Pillar 3 */}
            <PillarGlassCard
              icon={DollarSign}
              title="Cost Revolution"
              description="65% reduction in healthcare costs through efficiency, prevention, and precision."
              features={[
                "One visit, complete care (₹1,500-3,500 vs ₹5,000-10,000)",
                "Prevent expensive hospitalizations",
                "Lower insurance premiums",
              ]}
              impact="₹1 lakh saved per family annually"
            />
            
            {/* Pillar 4 */}
            <PillarGlassCard
              icon={Brain}
              title="Predictive Analytics"
              description="P3DSC™ Quantum-AI predicts your health trajectory for the next 20 years."
              features={[
                "Disease onset probability & intervention timelines",
                "Personalized medication responses",
                "Lifestyle impact modeling",
              ]}
              impact="Know your future, change your outcomes"
            />
            
            {/* Pillar 5 - Featured (spans 2 columns) */}
            <div className="lg:col-span-2">
              <PillarGlassCard
                icon={Globe}
                title="Connected to Global Care"
                description="Your Telth care plan works anywhere in our global network with G-Med ID™ continuity."
                features={[
                  "USA Network: Johns Hopkins, leading medical centers",
                  "UK Network: NHS integration, specialist partnerships",
                  "India Network: IIT research hubs, national health mission",
                  "Global telemedicine & treatment continuity",
                ]}
                impact="Seamless care from Mumbai to London to New York"
                featured={true}
              />
            </div>
            
            {/* Pillar 6 */}
            <PillarGlassCard
              icon={Calendar}
              title="Routine Checkup Made Easy"
              description="Annual health checkups in 15 minutes with comprehensive screening and instant results."
              features={[
                "90+ parameters analyzed instantly",
                "Year-on-year health tracking",
                "Personalized health reports",
              ]}
              impact="15 minutes vs 15 days for complete checkup"
            />
          </div>
        </div>
      </section>


      {/* SECTION 6: FRANCHISE & PARTNERSHIP - Dual Path Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-16">
        
        {/* Section Hero */}
        <div className="container text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-telth-teal/10 border border-telth-teal/20 text-telth-teal mb-6 animate-pulse-ring">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Limited Territories Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Join the Healthcare Revolution
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Whether you're building a business or serving your community, 
            Telth provides the quantum-AI platform to deliver world-class healthcare
          </p>
          
          {/* Scroll indicators */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-telth-teal">
              <Building className="h-5 w-5" />
              <span>Franchise Opportunity</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
            <div className="hidden sm:block w-px bg-border" />
            <div className="flex items-center gap-2 text-telth-coral">
              <Heart className="h-5 w-5" />
              <span>Community Partnership</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Dual Path Cards */}
        <div className="container px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* LEFT CARD: FRANCHISE */}
            <div className="relative group min-h-[600px]">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-telth-teal via-telth-purple to-telth-teal bg-[length:200%_100%] animate-border-flow">
                <div className="h-full w-full rounded-3xl bg-background" />
              </div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 lg:p-12 space-y-6 h-full flex flex-col">
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center shadow-elegant">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
                    Franchise Opportunity
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    Build a thriving healthcare business with proven systems, 
                    comprehensive support, and exceptional ROI
                  </p>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-telth-teal/5 rounded-xl p-4 border border-telth-teal/20 hover:bg-telth-teal/10 transition-all">
                    <div className="text-2xl font-bold text-telth-teal">8-24 mo</div>
                    <div className="text-sm text-muted-foreground">ROI Timeline</div>
                  </div>
                  <div className="bg-telth-purple/5 rounded-xl p-4 border border-telth-purple/20 hover:bg-telth-purple/10 transition-all">
                    <div className="text-2xl font-bold text-telth-purple">10x</div>
                    <div className="text-sm text-muted-foreground">5-Year Growth</div>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="space-y-3 flex-grow">
                  <h4 className="font-semibold text-lg">What You Get:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">60% revenue share model</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">Complete training & support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">Proven operational playbook</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-telth-teal flex-shrink-0" />
                      <span className="text-sm">Marketing & tech platform</span>
                    </div>
                  </div>
                </div>
                
                {/* Investment Range */}
                <div className="bg-muted/50 rounded-xl p-4 space-y-2 border border-border">
                  <h4 className="font-semibold text-sm text-muted-foreground">Investment Range:</h4>
                  <div className="text-lg font-bold text-foreground">₹25L - ₹149L</div>
                  <p className="text-xs text-muted-foreground">
                    Multiple hub configurations available
                  </p>
                </div>
                
                {/* CTA */}
                <div className="space-y-3">
                  <Link to="/partner" className="block">
                    <Button size="lg" className="w-full bg-gradient-to-r from-telth-teal to-telth-purple text-white hover:scale-105 transition-transform shadow-elegant">
                      Apply for Franchise
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Limited territories available • First-mover advantage
                  </p>
                </div>
              </div>
            </div>
            
            {/* RIGHT CARD: COMMUNITY PARTNERSHIP */}
            <div className="relative group min-h-[600px]">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-br from-telth-coral via-telth-coral-light to-telth-coral bg-[length:200%_100%] animate-border-flow">
                <div className="h-full w-full rounded-3xl bg-background" />
              </div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 lg:p-12 space-y-6 h-full flex flex-col">
                
                {/* Header */}
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-telth-coral to-telth-coral-light flex items-center justify-center shadow-elegant">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-telth-coral to-telth-coral-light bg-clip-text text-transparent">
                    Community Partnership
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    Bring world-class healthcare to your village, campus, 
                    tribal area, or underserved community
                  </p>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-telth-coral/5 rounded-xl p-4 border border-telth-coral/20 hover:bg-telth-coral/10 transition-all">
                    <div className="text-2xl font-bold text-telth-coral">5,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Served/Hub</div>
                  </div>
                  <div className="bg-telth-coral/5 rounded-xl p-4 border border-telth-coral/20 hover:bg-telth-coral/10 transition-all">
                    <div className="text-2xl font-bold text-telth-coral">65%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                </div>
                
                {/* Partnership Models */}
                <div className="space-y-3 flex-grow">
                  <h4 className="font-semibold text-lg">Partnership Models:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">CSR-Funded (Tax benefits)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Landmark className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">Government PPP (Ayushman)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">NGO Collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Handshake className="h-4 w-4 text-telth-coral flex-shrink-0" />
                      <span className="text-sm">Community Co-operative</span>
                    </div>
                  </div>
                </div>
                
                {/* Who This Is For */}
                <div className="bg-muted/50 rounded-xl p-4 space-y-2 border border-border">
                  <h4 className="font-semibold text-sm text-muted-foreground">Perfect For:</h4>
                  <p className="text-sm text-foreground">
                    Village leaders • Corporate CSR • Universities • 
                    NGOs • Tribal communities • Mountain regions
                  </p>
                </div>
                
                {/* CTA */}
                <div className="space-y-3">
                  <Link to="/partner" className="block">
                    <Button size="lg" variant="outline" className="w-full border-2 border-telth-coral text-telth-coral hover:bg-telth-coral hover:text-white transition-all shadow-card">
                      Request Hub for Your Community
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    We work with you to find the right funding model
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-muted/30 py-12 border-t border-border">
          <div className="container">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Trusted by communities and businesses across India
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-telth-navy">500+</div>
                <div className="text-xs text-muted-foreground">Hub Locations</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-telth-navy">50L+</div>
                <div className="text-xs text-muted-foreground">Lives Served</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-telth-navy">95%</div>
                <div className="text-xs text-muted-foreground">Partner Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CARE ECOSYSTEM */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From Prevention to Treatment to Lifelong Wellness
          </h2>
        </div>

        <CircularFlowDiagram />

        <div className="text-center mt-12">
          <p className="text-lg max-w-4xl mx-auto">
            Telth Quantum-AI Hubs are your entry point to a complete, connected, global healthcare
            ecosystem. Start with a 15-minute visit, stay healthy for life.
          </p>
        </div>
      </section>

      {/* SECTION 8: TECHNOLOGY */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Deliver 15 Days of Care in 15 Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechnologyCard
              title="Integrated Multi-Parameter Diagnostics"
              description="Telth HES 10 combines 6 separate medical devices into one integrated system, performing 90+ diagnostic tests simultaneously."
              traditionalApproach={[
                "Blood draw → Send to lab → Wait 3-5 days",
                "Separate ECG appointment → Wait for cardiologist",
                "Separate ultrasound → Wait for radiologist",
                "Urine test → Send to lab → Wait 2-3 days",
              ]}
              telthApproach={[
                "All tests run simultaneously",
                "Results in 15 minutes",
                "AI analysis ready for doctor",
                "Everything in one location",
              ]}
              impact="Eliminate 10-12 days of waiting and multiple appointments"
            />
            <TechnologyCard
              title="P3DSC™ Quantum-AI Analysis"
              description="Artificial intelligence powered by quantum computing algorithms that instantly analyze all test results and generate comprehensive health insights."
              traditionalApproach={[
                "Manual review by human doctors",
                "Takes 2-3 days for complete analysis",
                "Limited pattern recognition",
                "85% diagnostic accuracy",
              ]}
              telthApproach={[
                "Pattern recognition across 90+ parameters",
                "Analysis completed in 30 seconds",
                "Compare against 100,000+ patient database",
                "98.7% diagnostic accuracy",
              ]}
              impact="Superhuman diagnostic capability available in every Telth Hub"
            />
            <TechnologyCard
              title="G-Med ID™ & RootCloud™ EMR"
              description="Blockchain-secured lifetime health record that's instantly accessible at any Telth Hub worldwide."
              traditionalApproach={[
                "10 minutes of form-filling",
                "Risk of forgotten information",
                "Need for old test reports",
                "Redundant testing",
              ]}
              telthApproach={[
                "No paper forms to fill",
                "Complete medical history instantly available",
                "Previous test results for comparison",
                "Your complete health history ready",
              ]}
              impact="Your complete health history in doctor's hands before you sit down"
            />
            <TechnologyCard
              title="Integrated Care Network"
              description="Every Telth Hub is connected to specialists, pharmacies, care managers, and the global Telth network in real-time."
              traditionalApproach={[
                "Multiple phone calls over days",
                "Separate appointments for each step",
                "Manual coordination",
                "Insurance claims take weeks",
              ]}
              telthApproach={[
                "Instant specialist telemedicine consult",
                "E-prescription sent automatically",
                "Care plan synced immediately",
                "Insurance claims processed instantly",
              ]}
              impact="Complete care coordination in real-time, not over 15 days"
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: GETTING STARTED */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Ways to Access Telth Quantum-AI Hubs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-8 bg-card border rounded-xl hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <MapPin className="h-9 w-9 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Visit Existing Hub</h3>
            <p className="text-muted-foreground">
              Find a Telth Hub near you and walk in for immediate care
            </p>
            <div className="text-sm text-muted-foreground">
              <p>200+ hubs operational (India)</p>
              <p>15 hubs launching (UK)</p>
              <p>10 hubs launching (USA)</p>
            </div>
            <Button variant="outline" className="w-full">
              Find Nearest Hub
            </Button>
          </div>

          <div className="text-center space-y-4 p-8 bg-card border rounded-xl hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Building2 className="h-9 w-9 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Bring Telth to Your Location</h3>
            <p className="text-muted-foreground">
              Request a Telth Hub for your community, workplace, or region
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Community leaders</p>
              <p>Corporate HR managers</p>
              <p>NGO directors</p>
              <p>Government officials</p>
            </div>
            <Link to="/partner" className="block">
              <Button className="w-full">Request Hub for Your Location</Button>
            </Link>
          </div>

          <div className="text-center space-y-4 p-8 bg-card border rounded-xl hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Handshake className="h-9 w-9 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Become a Franchise Partner</h3>
            <p className="text-muted-foreground">
              Own and operate a Telth Hub in your community as a franchise partner
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Investment: ₹25 lakh - ₹149 lakh</p>
              <p>ROI Timeline: 8-24 months</p>
              <p>Complete setup & support</p>
            </div>
            <Link to="/partner" className="block">
              <Button className="w-full">Explore Franchise Opportunity</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#003C71] text-white py-20">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Bring 15-Minute Healthcare to Your Community?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether you want to visit a hub, bring one to your location, or become a franchise
            partner—Telth makes quantum-AI healthcare accessible to everyone, everywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/partner">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Request Telth for My Location
              </Button>
            </Link>
            <Link to="/partner">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto bg-white text-[#003C71] hover:bg-white/90 border-0"
              >
                Apply for Franchise Partnership
              </Button>
            </Link>
          </div>

          <div className="pt-8 text-sm text-white/80">
            <p className="mb-2">Questions? Contact our partnerships team:</p>
            <p>
              📧 partnerships@telth.org | 📞 +91 99107 00028 (India) | +44 1235 390827 (UK) | +1
              (234) 564-4564 (USA)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
