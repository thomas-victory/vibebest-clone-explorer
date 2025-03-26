
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-200/30">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-display tracking-tight text-foreground">
                Vibe<span className="text-primary">Best</span>
              </span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Pioneering AI solutions that empower organizations to solve their most complex challenges.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/healthcare" className="text-foreground/70 hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/solutions/finance" className="text-foreground/70 hover:text-primary transition-colors">Finance</Link></li>
              <li><Link to="/solutions/manufacturing" className="text-foreground/70 hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link to="/solutions/retail" className="text-foreground/70 hover:text-primary transition-colors">Retail</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/research" className="text-foreground/70 hover:text-primary transition-colors">Research</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/resources/documentation" className="text-foreground/70 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/resources/case-studies" className="text-foreground/70 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/resources/webinars" className="text-foreground/70 hover:text-primary transition-colors">Webinars</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} VibeBest AI. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/privacy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
