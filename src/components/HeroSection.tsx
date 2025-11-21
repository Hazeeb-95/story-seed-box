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
    <section className="relative overflow-hidden h-[600px] md:h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent-red/60 to-gold/70" />
      
      <div className="container relative z-10">
        <div className="max-w-[900px] mx-auto text-center space-y-6 animate-fade-in-up">
          <h1 className="text-hero text-foreground font-bold drop-shadow-lg">
            {title}
          </h1>
          <p className="text-body-large text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="text-button hover-lift shadow-lg"
              onClick={onPrimaryClick}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryCta && (
              <Button 
                size="lg" 
                variant="outline" 
                className="text-button glass-strong border-2 border-foreground/40 text-foreground hover:bg-foreground hover:text-background hover-lift"
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
