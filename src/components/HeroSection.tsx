
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background gradient blurs */}
      <div className="vibe-blur-panel bg-blue-400/30 h-[300px] w-[300px] left-[10%] top-[20%]"></div>
      <div className="vibe-blur-panel bg-indigo-400/30 h-[250px] w-[250px] right-[5%] top-[30%]"></div>
      
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary animate-fade-in">
            Pioneering the future with AI
          </div>
          
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up">
            Advancing <span className="gradient-text">technology</span> to empower humanity
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl text-foreground/70 animate-fade-up animate-delay-100">
            We're creating transformative solutions that solve real-world challenges through responsible AI technology, delivering benefits across society and business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up animate-delay-200">
            <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 group">
              <span>Explore Solutions</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/30">
              Watch Video
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex justify-center animate-fade-up animate-delay-300">
          <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl glass-panel shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-xl font-medium text-foreground/80">Interactive demo coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
