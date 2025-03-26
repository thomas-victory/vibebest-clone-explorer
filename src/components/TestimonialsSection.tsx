
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "VibeBest's AI solution has revolutionized how we approach data analysis, saving us countless hours and uncovering insights we would have missed.",
    author: "Sarah Johnson",
    title: "CTO, TechVision Inc",
    rating: 5
  },
  {
    quote: "The level of accuracy and personalization in VibeBest's platform has dramatically improved our customer engagement metrics.",
    author: "Michael Chen",
    title: "Marketing Director, Nexus Brands",
    rating: 5
  },
  {
    quote: "Working with VibeBest has been a game-changer for our research team. Their AI models have accelerated our discovery process by months.",
    author: "Dr. Elizabeth Parker",
    title: "Lead Researcher, BioInnovate",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6 animate-fade-up">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-up animate-delay-100">
            What our <span className="gradient-text">partners</span> are saying
          </h2>
          <p className="text-lg text-foreground/70 animate-fade-up animate-delay-200">
            We measure our success through the achievements and satisfaction of our clients across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 md:p-10 flex flex-col hover-lift animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex-grow">
                <blockquote className="text-lg mb-6 italic text-foreground/80">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
