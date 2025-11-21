import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import telthLogo from "@/assets/telth-logo.svg";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full glass-strong transition-all duration-300 ${scrolled ? 'shadow-elegant' : ''} border-b border-white/20`}>
      <nav className="container flex h-20 items-center justify-between">
        <NavLink to="/" className="transition-opacity hover:opacity-80">
          <img src={telthLogo} alt="Telth" className="h-8 w-auto" />
        </NavLink>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>

        <div className="hidden lg:flex items-center gap-1">
          <Button variant="ghost" asChild className="text-base">
            <NavLink to="/about" activeClassName="text-primary font-semibold">About Telth</NavLink>
          </Button>
          <Button variant="ghost" asChild className="text-base">
            <NavLink to="/global-presence" activeClassName="text-primary font-semibold">Global Presence</NavLink>
          </Button>
          <Button variant="ghost" asChild className="text-base">
            <NavLink to="/partner" activeClassName="text-primary font-semibold">Partner With Us</NavLink>
          </Button>
          <Button variant="ghost" asChild className="text-base">
            <NavLink to="/careers" activeClassName="text-primary font-semibold">Careers</NavLink>
          </Button>
          <Button variant="ghost" asChild className="text-base">
            <NavLink to="/contact" activeClassName="text-primary font-semibold">Contact</NavLink>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 glass">
          <div className="container flex flex-col gap-2 py-4">
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/about">About Telth</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/global-presence">Global Presence</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/partner">Partner With Us</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/careers">Careers</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start text-base">
              <NavLink to="/contact">Contact</NavLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
