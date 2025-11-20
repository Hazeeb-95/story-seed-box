import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { TabNavigation } from "@/components/TabNavigation";
import { Footer } from "@/components/Footer";
import { CommunityTab } from "@/components/tabs/CommunityTab";
import { CareHomeTab } from "@/components/tabs/CareHomeTab";
import { PersonalizedTab } from "@/components/tabs/PersonalizedTab";
import { CarePayTab } from "@/components/tabs/CarePayTab";
import { GlobalHeadquarters } from "@/components/sections/GlobalHeadquarters";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { TechnologyInnovation } from "@/components/sections/TechnologyInnovation";
import { ImpactTrust } from "@/components/sections/ImpactTrust";

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

        <GlobalHeadquarters />
        <PartnerEcosystem />
        <TechnologyInnovation />
        <ImpactTrust />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
