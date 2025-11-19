import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCta: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroSection = ({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="container relative py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-base"
              onClick={onPrimaryClick}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryCta && (
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={onSecondaryClick}
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
