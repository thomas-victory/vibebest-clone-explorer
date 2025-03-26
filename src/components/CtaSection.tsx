
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="vibe-blur-panel bg-blue-400/30 h-[300px] w-[300px] left-[5%] top-[20%]"></div>
      <div className="vibe-blur-panel bg-indigo-400/30 h-[250px] w-[250px] right-[5%] bottom-[20%]"></div>
      
      <div className="section-container relative z-10">
        <div className="glass-panel max-w-4xl mx-auto p-8 md:p-12 text-center animate-blur-in">
          <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to transform your business with intelligent <span className="gradient-text">AI solutions?</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            Join leading organizations that are already leveraging our technology to innovate faster and create meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 group">
              <span>Schedule a Demo</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/30">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
