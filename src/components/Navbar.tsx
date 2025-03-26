
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold font-display tracking-tight text-foreground">
                Vibe<span className="text-primary">Best</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/research" className="font-medium text-foreground/80 hover:text-primary transition-colors">
              Research
            </Link>
            <Link to="/about" className="font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/careers" className="font-medium text-foreground/80 hover:text-primary transition-colors">
              Careers
            </Link>
            <Link to="/blog" className="font-medium text-foreground/80 hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="outline" className="mr-3 px-4 transition-all border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/30">
                Contact
              </Button>
            </Link>
            <Link to="/get-started">
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm hover:shadow-md transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel animate-fade-down mt-2 mx-4 divide-y divide-gray-100/20">
          <nav className="py-6 px-4 space-y-4">
            <Link to="/research" className="block font-medium text-foreground/80 hover:text-primary">
              Research
            </Link>
            <Link to="/about" className="block font-medium text-foreground/80 hover:text-primary">
              About
            </Link>
            <Link to="/careers" className="block font-medium text-foreground/80 hover:text-primary">
              Careers
            </Link>
            <Link to="/blog" className="block font-medium text-foreground/80 hover:text-primary">
              Blog
            </Link>
          </nav>
          <div className="py-6 px-4 space-y-3">
            <Link to="/contact">
              <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                Contact
              </Button>
            </Link>
            <Link to="/get-started">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
