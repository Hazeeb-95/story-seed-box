import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Telth</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Telth</Link></li>
              <li><Link to="/mission" className="text-muted-foreground hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link to="/global-presence" className="text-muted-foreground hover:text-primary transition-colors">Global Presence</Link></li>
              <li><Link to="/research" className="text-muted-foreground hover:text-primary transition-colors">Research & Innovation</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/press" className="text-muted-foreground hover:text-primary transition-colors">Press & Media</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/?tab=community" className="text-muted-foreground hover:text-primary transition-colors">Community Care</Link></li>
              <li><Link to="/?tab=carehome" className="text-muted-foreground hover:text-primary transition-colors">Care@Home</Link></li>
              <li><Link to="/?tab=personalized" className="text-muted-foreground hover:text-primary transition-colors">Personalized Care</Link></li>
              <li><Link to="/?tab=carepay" className="text-muted-foreground hover:text-primary transition-colors">Care Pay</Link></li>
              <li><Link to="/business" className="text-muted-foreground hover:text-primary transition-colors">For Businesses</Link></li>
              <li><Link to="/government" className="text-muted-foreground hover:text-primary transition-colors">For Governments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Partners</h3>
            <ul className="space-y-2">
              <li><Link to="/care-manager" className="text-muted-foreground hover:text-primary transition-colors">Become a Care Manager</Link></li>
              <li><Link to="/franchise" className="text-muted-foreground hover:text-primary transition-colors">Franchise Opportunities</Link></li>
              <li><Link to="/provider-integration" className="text-muted-foreground hover:text-primary transition-colors">Healthcare Provider Integration</Link></li>
              <li><Link to="/technology-partners" className="text-muted-foreground hover:text-primary transition-colors">Technology Partners</Link></li>
              <li><Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">Investor Relations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/portal" className="text-muted-foreground hover:text-primary transition-colors">Partner Portal Login</Link></li>
              <li><Link to="/care-manager-login" className="text-muted-foreground hover:text-primary transition-colors">Care Manager Login</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Telth Holdings Inc. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Language: EN
          </div>
        </div>
      </div>
    </footer>
  );
};
