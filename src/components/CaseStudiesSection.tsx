
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Healthcare Innovation",
    description: "How VibeBest AI is helping medical professionals diagnose diseases earlier and with greater accuracy.",
    category: "Healthcare",
    image: "bg-gradient-to-br from-blue-400 to-purple-500"
  },
  {
    title: "Sustainable Energy Management",
    description: "Reducing carbon footprint with AI-powered energy optimization systems for industrial complexes.",
    category: "Sustainability",
    image: "bg-gradient-to-br from-green-400 to-teal-500"
  },
  {
    title: "Financial Analysis Revolution",
    description: "Transforming how financial institutions detect fraud and predict market trends.",
    category: "Finance",
    image: "bg-gradient-to-br from-cyan-400 to-blue-500"
  }
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="vibe-blur-panel bg-blue-400/20 h-[350px] w-[350px] right-0 bottom-[30%]"></div>
      
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 animate-fade-up">
            Real-World Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-up animate-delay-100">
            Transforming industries with <span className="gradient-text">intelligent</span> solutions
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-up animate-delay-200">
            Discover how our technology is solving complex challenges across different sectors and creating measurable value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden group hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`h-48 ${study.image} transition-transform duration-500 group-hover:scale-105`}></div>
              <div className="p-6">
                <div className="text-sm font-medium text-primary mb-2">{study.category}</div>
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-foreground/70 mb-4">{study.description}</p>
                <Button variant="ghost" className="group/btn px-0 text-primary hover:bg-transparent">
                  <span>Read case study</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-up animate-delay-500">
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/30">
            View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
