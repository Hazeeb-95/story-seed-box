import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="h-full group card-animate">
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
          <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
        </div>
        <CardTitle className="text-card-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-body-standard leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
