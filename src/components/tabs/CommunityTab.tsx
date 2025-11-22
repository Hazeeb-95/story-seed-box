import { ScrollingHeroSection } from "../ScrollingHeroSection";
import { ComparisonCard } from "../ComparisonCard";
import { LocationCard } from "../LocationCard";
import { HubConfigCard } from "../HubConfigCard";
import { PillarCard } from "../PillarCard";
import { ImpactStoryCard } from "../ImpactStoryCard";
import { TechnologyCard } from "../TechnologyCard";
import { CircularFlowDiagram } from "../CircularFlowDiagram";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Building2,
  ShoppingCart,
  Mountain,
  Briefcase,
  Hospital,
  Users,
  Shield,
  Heart,
  DollarSign,
  Brain,
  Globe,
  Calendar,
  Zap,
  MapPin,
  Handshake,
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LocationCard
              icon={Hospital}
              title="Urban Hospitals"
              hubType="Telth Smart Care Hub Premium"
              capacity="200+ patients/day"
              services="Full multi-specialty care, surgical prep, emergency diagnostics"
              integration="Hospital EMR, specialist network"
            />
            <LocationCard
              icon={Users}
              title="Community Centers"
              hubType="Telth Smart Care Hub Standard"
              capacity="100-150 patients/day"
              services="Primary care, preventive screening, chronic disease management"
              integration="Local health programs, government schemes"
            />
            <LocationCard
              icon={ShoppingCart}
              title="Shopping Malls & Public Spaces"
              hubType="Telth Smart Clinic Kiosk"
              capacity="50-75 patients/day"
              services="Walk-in diagnostics, health monitoring, vaccinations"
              integration="E-pharmacy, telemedicine"
            />
            <LocationCard
              icon={Mountain}
              title="Remote Tribal Areas"
              hubType="Telth MobileMed"
              capacity="40-60 patients/day"
              services="Mobile diagnostics, maternal care, infectious disease screening"
              integration="Care@Home network, air ambulance"
            />
            <LocationCard
              icon={Mountain}
              title="Hilly & Mountain Regions"
              hubType="Telth Compact Care Station"
              capacity="30-50 patients/day"
              services="Primary care, emergency response, chronic monitoring"
              integration="Satellite connectivity, regional referral network"
            />
            <LocationCard
              icon={Briefcase}
              title="Corporate Offices"
              hubType="Telth Workplace Wellness Hub"
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

      {/* SECTION 3: HUB CONFIGURATIONS */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the Right Hub for Your Community's Needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HubConfigCard
            title="Telth Smart Care Hub (Premium)"
            bestFor="Hospitals, Large Medical Centers, Metro Cities"
            floorSpace="2,000-3,000 sq ft"
            capacity="200+ patients"
            devices="Full HES 10 system, biochemical analyzer, immunoassay analyzer, ultrasound, ECG suite"
            staff="2-3 doctors, 4-6 Care Managers, support staff"
            services="90+ diagnostic parameters, multi-specialty consultations, surgical prep, emergency care"
            investmentINR="₹75 lakh - ₹149 lakh"
            investmentUSD="$100K - $200K"
            roiTimeline="18-24 months"
            revenuePotential="10x investment in 5 years"
          />
          <HubConfigCard
            title="Telth Smart Care Hub (Standard)"
            bestFor="Community Centers, Clinics, Tier-2 Cities, Small Hospitals"
            floorSpace="1,000-1,500 sq ft"
            capacity="100-150 patients"
            devices="HES 10, biochemical analyzer, basic imaging"
            staff="1-2 doctors, 2-3 Care Managers"
            services="70+ diagnostic parameters, primary care, preventive screening, chronic disease management"
            investmentINR="₹45 lakh - ₹75 lakh"
            investmentUSD="$60K - $100K"
            roiTimeline="12-18 months"
            revenuePotential="8x investment in 5 years"
          />
          <HubConfigCard
            title="Telth Smart Clinic (Compact)"
            bestFor="Shopping Malls, Pharmacies, Small Towns, Franchises"
            floorSpace="400-600 sq ft"
            capacity="50-75 patients"
            devices="Mini HES, portable diagnostics"
            staff="1 doctor (part-time/full-time), 1-2 Care Managers"
            services="50+ diagnostic parameters, walk-in care, vaccinations, health monitoring"
            investmentINR="₹25 lakh - ₹45 lakh"
            investmentUSD="$35K - $60K"
            roiTimeline="8-12 months"
            revenuePotential="6x investment in 5 years"
          />
          <HubConfigCard
            title="Telth MobileMed & Remote Solutions"
            bestFor="Remote Areas, Tribal Regions, Hilly Areas, Health Camps"
            floorSpace="Mobile van or portable station"
            capacity="30-60 patients"
            devices="Portable HES, mobile diagnostics"
            staff="1-2 Care Managers (doctor via telemedicine)"
            services="Essential diagnostics, maternal care, infectious disease screening, emergency response"
            investmentINR="₹35 lakh - ₹55 lakh"
            investmentUSD="$45K - $75K (includes vehicle)"
            roiTimeline="12-18 months (with government/CSR support)"
            revenuePotential="Social impact + sustainable operations"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
            All configurations include: P3DSC™ AI system, G-Med ID™ integration, RootCloud™ EMR access,
            T-Pay payment system, Care Manager training, and ongoing technology support
          </p>
        </div>
      </section>

      {/* SECTION 4: SIX PILLARS */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Six Pillars of Quantum-AI Healthcare Delivery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PillarCard
              icon={Shield}
              title="Preventive Care First"
              description="Detect health risks before symptoms appear. Our quantum-AI algorithms analyze 90+ parameters to identify potential issues 20 years in advance, enabling true preventive intervention."
              features={[
                "Health risk assessment and scoring",
                "Genetic predisposition screening",
                "Lifestyle factor analysis",
                "Vaccination planning",
                "Annual wellness programs",
                "Early disease markers detection",
              ]}
              impact="Prevent 70% of chronic diseases through early intervention"
            />
            <PillarCard
              icon={Heart}
              title="Primary Care Excellence"
              description="Complete primary healthcare in 15 minutes. From common ailments to chronic disease management, Telth Hubs provide comprehensive first-line medical care with instant diagnostics and treatment."
              features={[
                "Acute care (fever, infections, injuries)",
                "Chronic disease management (diabetes, hypertension, asthma)",
                "Maternal and child health",
                "Geriatric care",
                "Mental health screening",
                "Minor procedures and wound care",
              ]}
              impact="90% of health needs resolved at community level, no hospital referral needed"
            />
            <PillarCard
              icon={DollarSign}
              title="Cost Revolution"
              description="65% reduction in healthcare costs through efficiency, prevention, and precision. One visit, one payment, complete care—eliminating multiple consultations, redundant tests, and treatment delays."
              features={[
                "Traditional: ₹5,000-10,000 for 15-day process",
                "Telth Hub: ₹1,500-3,500 for 15-minute care",
                "75% reduction in time lost",
                "Prevent expensive hospitalizations",
                "Lower insurance premiums",
              ]}
              impact="₹1 lakh saved per family annually on healthcare expenses"
            />
            <PillarCard
              icon={Brain}
              title="Predictive Analytics"
              description="P3DSC™ Quantum-AI predicts your health trajectory for the next 20 years. Using advanced machine learning on 90+ biomarkers, genetic data, lifestyle factors, and family history."
              features={[
                "Chronic disease onset probability",
                "Optimal intervention timelines",
                "Personalized medication responses",
                "Lifestyle modification impact modeling",
                "Health milestone forecasting",
                "Risk factor evolution tracking",
              ]}
              impact="Know your health future, change your health outcomes"
            />
            <PillarCard
              icon={Globe}
              title="Connected to Global Care Plans"
              description="Your Telth care plan works anywhere in our global network (USA, UK, India). One G-Med ID™, comprehensive care continuity across borders, specialists, and care settings."
              features={[
                "USA Network: Johns Hopkins, US medical centers",
                "UK Network: NHS integration, Harley Street",
                "India Network: IIT Madras, Apollo/Fortis",
                "Global telemedicine with leading experts",
                "Treatment started in India, follow-up in UK/USA",
              ]}
              impact="Seamless healthcare whether you're in Mumbai, London, or New York"
            />
            <PillarCard
              icon={Calendar}
              title="Routine Checkup Made Easy"
              description="Annual health checkups in 15 minutes, not 15 days. Comprehensive screening, instant results, personalized health report, and year-on-year tracking—all in one quick visit."
              features={[
                "Comprehensive blood work & cardiac screening",
                "Results in 15 minutes (not 7-10 days)",
                "AI-powered health score and risk assessment",
                "Doctor consultation with complete data",
                "Walk-in or online booking options",
              ]}
              impact="Make annual checkups a 15-minute habit, not a 15-day ordeal"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: SUCCESS METRICS */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Results from Real Communities</h2>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">99%</div>
            <div className="text-sm text-muted-foreground">
              Time Reduction (15 days → 15 minutes)
            </div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">65%</div>
            <div className="text-sm text-muted-foreground">Cost Savings per Patient Visit</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">90+</div>
            <div className="text-sm text-muted-foreground">
              Diagnostic Parameters in One Session
            </div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">20</div>
            <div className="text-sm text-muted-foreground">Years Health Prediction Capability</div>
          </div>
          <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-2">10x</div>
            <div className="text-sm text-muted-foreground">
              Healthcare Access Improvement in Rural Areas
            </div>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="grid md:grid-cols-3 gap-6">
          <ImpactStoryCard
            title="Tribal Health Transformation"
            location="Remote tribal area, Jharkhand, India"
            challenge="Nearest hospital 85 km away, minimal healthcare access"
            solution="Telth MobileMed twice weekly + permanent Care Manager"
            results={[
              "500+ tribal members enrolled in care plans",
              "Maternal mortality reduced by 80%",
              "Infectious disease outbreaks prevented through screening",
              "90% vaccination coverage achieved",
              "Children's malnutrition identified and treated early",
            ]}
            quote="For the first time in our village's history, we have real healthcare. Telth brings the hospital to us."
            author="Village Health Worker, Jharkhand"
          />
          <ImpactStoryCard
            title="Urban Corporate Wellness"
            location="Tech park, Bangalore, India"
            challenge="2,000 employees, low health checkup compliance"
            solution="Telth Workplace Wellness Hub on-site"
            results={[
              "Annual checkup compliance: 35% → 92%",
              "Early detection of 45 serious conditions",
              "Reduced sick leave by 40%",
              "Employee satisfaction up 28%",
              "Company healthcare costs down 35%",
            ]}
            quote="15-minute comprehensive checkups during work breaks changed our entire wellness culture."
            author="HR Director, Tech Company"
          />
          <ImpactStoryCard
            title="Small Town Healthcare Access"
            location="Tier-3 town, Madhya Pradesh"
            challenge="No diagnostic facilities, daily bus to city for tests"
            solution="Telth Smart Clinic (franchisee-operated)"
            results={[
              "3,000+ patients in first 6 months",
              "Average travel saved: 4 hours per visit",
              "Local employment: 5 full-time jobs created",
              "Franchisee ROI: 10 months",
              "Community satisfaction: 95%",
            ]}
            quote="I invested ₹35 lakhs. In 10 months, I've recovered my investment and provided my town with healthcare they never had."
            author="Telth Franchise Owner"
          />
        </div>
      </section>

      {/* SECTION 6: FRANCHISE & PARTNERSHIP */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Bring Telth to Your Community—Build a Thriving Business While Serving Health
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Franchise Model */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Franchise Model</h3>

              <div>
                <h4 className="text-xl font-semibold mb-3">Why Franchise with Telth?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>10x revenue potential in 5 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>ROI in 8-24 months depending on hub type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>60-30-10 revenue split (60% franchisee, 30% operations, 10% platform)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Recession-proof healthcare business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Recurring revenue from subscriptions + care plans</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">Franchise Investment Tiers:</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Compact Hub:</strong> ₹25-45 lakh ($35K-60K)</li>
                  <li><strong>Standard Hub:</strong> ₹45-75 lakh ($60K-100K)</li>
                  <li><strong>Premium Hub:</strong> ₹75-149 lakh ($100K-200K)</li>
                  <li><strong>MobileMed:</strong> ₹35-55 lakh ($45K-75K)</li>
                </ul>
              </div>

              <Link to="/partner">
                <Button size="lg" className="w-full md:w-auto">
                  Apply for Franchise Opportunity
                </Button>
              </Link>
            </div>

            {/* Community Partnership */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Community Partnership</h3>

              <p className="text-muted-foreground">
                Are you responsible for healthcare in your village, corporate campus, university, tribal
                community, or mountain region? We'll help you establish a Telth Hub.
              </p>

              <div>
                <h4 className="text-xl font-semibold mb-3">Partnership Models:</h4>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-primary">CSR-Funded Model</strong>
                    <p className="text-sm text-muted-foreground">
                      Corporate sponsors hub for community with tax benefits
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">Government Partnership Model</strong>
                    <p className="text-sm text-muted-foreground">
                      Under National Health Mission, Ayushman Bharat integration, PPP
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">NGO Collaboration Model</strong>
                    <p className="text-sm text-muted-foreground">
                      NGO provides location, Telth provides technology & training
                    </p>
                  </li>
                  <li>
                    <strong className="text-primary">Community Co-operative Model</strong>
                    <p className="text-sm text-muted-foreground">
                      Community members collectively invest with shared ownership
                    </p>
                  </li>
                </ul>
              </div>

              <Link to="/partner">
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  Request Telth for Your Location
                </Button>
              </Link>
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
