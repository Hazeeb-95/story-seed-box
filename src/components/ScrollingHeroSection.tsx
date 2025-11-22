import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ScrollingHeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

const locations = [
  { image: "/images/hub-locations/remote-village.png", label: "Remote Villages" },
  { image: "/images/hub-locations/hospital.png", label: "Hospitals" },
  { image: "/images/hub-locations/community-center.png", label: "Community Centers" },
];

export const ScrollingHeroSection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: ScrollingHeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % locations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Images with Cross-fade */}
      {locations.map((location, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={location.image}
            alt={location.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Location Labels */}
      <div className="absolute top-8 right-8 z-20 flex gap-4">
        {locations.map((location, index) => (
          <span
            key={index}
            className={`text-sm font-semibold transition-all duration-500 ${
              index === currentIndex
                ? "text-white scale-110"
                : "text-white/50 scale-100"
            }`}
          >
            {location.label}
          </span>
        ))}
      </div>

      {/* Overlay Text "Anywhere • Everywhere • For Everyone" */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
        <p className="text-white/90 text-lg md:text-xl font-light tracking-widest">
          Anywhere • Everywhere • For Everyone
        </p>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-[900px] mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl text-white font-bold drop-shadow-2xl leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/partner">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                {primaryCta}
              </Button>
            </Link>
            <Link to="/partner">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                {secondaryCta}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {locations.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "w-12 bg-white" : "w-8 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
