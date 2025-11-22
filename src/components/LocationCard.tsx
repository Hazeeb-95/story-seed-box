import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface LocationCardProps {
  icon: LucideIcon;
  title: string;
  hubType: string;
  capacity: string;
  services: string;
  integration: string;
}

export const LocationCard = ({
  icon: Icon,
  title,
  hubType,
  capacity,
  services,
  integration,
}: LocationCardProps) => {
  return (
    <Card className="hover-lift h-full">
      <CardHeader>
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-9 w-9 text-primary" strokeWidth={2} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-primary">Hub Type:</p>
          <p className="text-sm text-muted-foreground">{hubType}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">Capacity:</p>
          <p className="text-sm text-muted-foreground">{capacity}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">Services:</p>
          <p className="text-sm text-muted-foreground">{services}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">Integration:</p>
          <p className="text-sm text-muted-foreground">{integration}</p>
        </div>
      </CardContent>
    </Card>
  );
};
