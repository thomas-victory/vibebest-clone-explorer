
import React from 'react';
import { Brain, BarChart3, Shield, Code, Lightbulb, Users } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Advanced AI Learning",
    description: "Our AI systems continuously learn and adapt, improving their capabilities to solve more complex problems over time."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Actionable Insights",
    description: "Transform data into meaningful insights that drive business value and enable better decision-making."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Ethical AI Principles",
    description: "We prioritize responsible AI development with transparency, fairness, and human-centered design."
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Scalable Architecture",
    description: "Built on modern technology stack that scales seamlessly with your growing business needs."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovation Focus",
    description: "Constantly pushing boundaries to develop revolutionary solutions for tomorrow's challenges."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Collaborative Approach",
    description: "Working closely with partners and clients to understand and address specific industry needs."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 animate-fade-up">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-up animate-delay-100">
            Cutting-edge features that <span className="gradient-text">transform</span> industries
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-up animate-delay-200">
            Our suite of innovative tools and technologies helps businesses leverage the power of AI to solve complex problems and create new opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass-card p-8 hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="feature-icon mb-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
