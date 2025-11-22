import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./NavLink";
import { cn } from "@/lib/utils";
import telthLogo from "@/assets/telth-logo.svg";

const tabs = [
  { id: "community", label: "Community", path: "/" },
  { id: "carehome", label: "Care@Home", path: "/care-home" },
  { id: "personalized", label: "Personalized", path: "/personalized" },
  { id: "carepay", label: "Care Pay", path: "/care-pay" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const getCurrentTab = () => {
    const tab = tabs.find(t => t.path === location.pathname);
    return tab?.id || "community";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTab = getCurrentTab();

  return (
    <header className={`sticky top-0 z-50 w-full glass-strong transition-all duration-300 ${scrolled ? 'shadow-elegant' : ''} border-b border-white/20`}>
      <nav className="container flex h-20 items-center justify-between">
        <NavLink to="/" className="transition-opacity hover:opacity-80">
          <img src={telthLogo} alt="Telth" className="h-8 w-auto" />
        </NavLink>
      </nav>

      {/* Tab Navigation */}
      <div className="border-t border-white/10">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={cn(
                  "px-8 py-4 text-base font-semibold transition-all duration-300 whitespace-nowrap relative block",
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent-red to-gold rounded-t-full" />
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
