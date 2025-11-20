import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
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
  
  useSmoothScroll();
  useScrollAnimation();

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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>

        <div className="animate-on-scroll">
          <GlobalHeadquarters />
        </div>
        <div className="animate-on-scroll">
          <PartnerEcosystem />
        </div>
        <div className="animate-on-scroll">
          <TechnologyInnovation />
        </div>
        <div className="animate-on-scroll">
          <ImpactTrust />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
