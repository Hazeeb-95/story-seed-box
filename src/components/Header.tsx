import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="text-2xl font-bold text-primary">
            MyTelth
          </NavLink>
          
          <div className="hidden lg:flex items-center gap-1">
            <Button variant="ghost" asChild>
              <NavLink to="/about" activeClassName="text-primary">About Telth</NavLink>
            </Button>
            <Button variant="ghost" asChild>
              <NavLink to="/global-presence" activeClassName="text-primary">Global Presence</NavLink>
            </Button>
            <Button variant="ghost" asChild>
              <NavLink to="/partner" activeClassName="text-primary">Partner With Us</NavLink>
            </Button>
            <Button variant="ghost" asChild>
              <NavLink to="/careers" activeClassName="text-primary">Careers</NavLink>
            </Button>
            <Button variant="ghost" asChild>
              <NavLink to="/contact" activeClassName="text-primary">Contact</NavLink>
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
        <div className="lg:hidden border-t bg-background">
          <div className="container flex flex-col gap-2 py-4">
            <Button variant="ghost" asChild className="justify-start">
              <NavLink to="/about">About Telth</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <NavLink to="/global-presence">Global Presence</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <NavLink to="/partner">Partner With Us</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <NavLink to="/careers">Careers</NavLink>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <NavLink to="/contact">Contact</NavLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
