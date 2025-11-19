import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

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
    <header className={`sticky top-0 z-50 w-full bg-background transition-all duration-300 ${scrolled ? 'h-16 shadow-subtle' : 'h-20'} border-b border-medium-gray`}>
      <nav className="container flex h-full items-center justify-between">
        <div className="flex items-center gap-12">
          <NavLink to="/" className="text-2xl font-bold text-primary transition-colors hover:text-primary-light">
            MyTelth
          </NavLink>
          
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
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-medium-gray bg-background">
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
