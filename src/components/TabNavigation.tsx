import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "community", label: "Community" },
  { id: "carehome", label: "Care@Home" },
  { id: "personalized", label: "Personalized" },
  { id: "carepay", label: "Care Pay" },
];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="border-b border-medium-gray bg-background sticky top-16 md:top-20 z-40 shadow-sm">
      <div className="container">
        <div className="flex items-center gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-8 py-4 text-base font-semibold transition-all duration-300 whitespace-nowrap relative",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-dark-gray hover:text-primary"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
