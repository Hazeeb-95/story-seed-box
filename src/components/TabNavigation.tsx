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
    <div className="border-b bg-background sticky top-16 z-40">
      <div className="container">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-6 py-4 text-sm font-medium transition-all whitespace-nowrap",
                "hover:text-primary",
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground border-b-2 border-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
