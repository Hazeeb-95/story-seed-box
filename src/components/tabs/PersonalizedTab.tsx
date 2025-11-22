import { FuturisticHero } from "../personalcare/FuturisticHero";
import { TelthDifference } from "../personalcare/TelthDifference";
import { TechnologySuite } from "../personalcare/TechnologySuite";
import { TWBANDevices } from "../personalcare/TWBANDevices";
import { TelthDocApp } from "../personalcare/TelthDocApp";
import { PricingSection } from "../personalcare/PricingSection";
import { GetStartedCTA } from "../personalcare/GetStartedCTA";

export const PersonalizedTab = () => {
  return (
    <div className="relative overflow-hidden">
      <FuturisticHero />
      <TelthDifference />
      <TechnologySuite />
      <TWBANDevices />
      <TelthDocApp />
      <PricingSection />
      <GetStartedCTA />
    </div>
  );
};
