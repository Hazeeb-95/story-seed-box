import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { TabNavigation } from "@/components/TabNavigation";
import { Footer } from "@/components/Footer";
import { CommunityTab } from "@/components/tabs/CommunityTab";
import { CareHomeTab } from "@/components/tabs/CareHomeTab";
import { PersonalizedTab } from "@/components/tabs/PersonalizedTab";
import { CarePayTab } from "@/components/tabs/CarePayTab";
import { StatCard } from "@/components/StatCard";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "community");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "community":
        return <CommunityTab />;
      case "carehome":
        return <CareHomeTab />;
      case "personalized":
        return <PersonalizedTab />;
      case "carepay":
        return <CarePayTab />;
      default:
        return <CommunityTab />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="flex-1">
        {renderTabContent()}

        <section className="bg-primary text-primary-foreground py-16 mt-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Healthcare Delivery Globally</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              <div className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">65%</div>
                <div className="text-sm opacity-90">Cost reduction in healthcare delivery</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">75%</div>
                <div className="text-sm opacity-90">Shorter care cycles</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">10x</div>
                <div className="text-sm opacity-90">Revenue increase for providers</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
                <div className="text-sm opacity-90">Smart Hubs planned (2-year rollout)</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">90+</div>
                <div className="text-sm opacity-90">Diagnostic parameters in 20 minutes</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">20 years</div>
                <div className="text-sm opacity-90">Health prediction capability</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6">Trusted Partners</h3>
              <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
                <div>NHS (UK)</div>
                <div>Johns Hopkins Hospital</div>
                <div>Harvard Research</div>
                <div>HSBC UK</div>
                <div>Wibmo/PayU</div>
                <div>IIT Madras</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge quantum AI and blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-bold text-lg mb-2">P3DSC™</h3>
              <p className="text-sm text-muted-foreground">Precise Data-Driven Smart Care with Quantum AI</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-bold text-lg mb-2">G-Med ID™</h3>
              <p className="text-sm text-muted-foreground">Blockchain health identity system</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-bold text-lg mb-2">RootCloud™</h3>
              <p className="text-sm text-muted-foreground">Secure EMR ecosystem</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-bold text-lg mb-2">TWBAN</h3>
              <p className="text-sm text-muted-foreground">IoMT body area network</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-bold text-lg mb-2">DigiDoc AI</h3>
              <p className="text-sm text-muted-foreground">Collaborative care platform</p>
            </div>
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="font-bold text-lg mb-2">Lab-on-Chip</h3>
              <p className="text-sm text-muted-foreground">Next-gen diagnostics</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
