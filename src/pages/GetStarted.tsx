
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  useEffect(() => {
    document.title = "Get Started - VibeBest";
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$99",
      billing: "per month",
      description: "Perfect for small businesses just beginning with AI.",
      features: [
        "Access to basic AI models",
        "5,000 API calls per month",
        "Standard support",
        "Basic documentation",
        "Community forum access"
      ],
      buttonText: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$499",
      billing: "per month",
      description: "For growing businesses with more complex AI needs.",
      features: [
        "Access to advanced AI models",
        "50,000 API calls per month",
        "Priority support",
        "Comprehensive documentation",
        "Community forum access",
        "Custom model fine-tuning",
        "Advanced analytics"
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "tailored solution",
      description: "Tailored AI solutions for large organizations.",
      features: [
        "Full access to all AI models",
        "Unlimited API calls",
        "24/7 dedicated support",
        "Complete documentation",
        "Private forum access",
        "Advanced custom model training",
        "Enterprise-grade security",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select the plan that best fits your organization's needs and scale."
    },
    {
      number: "02",
      title: "Create an Account",
      description: "Set up your VibeBest account and configure your organization settings."
    },
    {
      number: "03",
      title: "Access API Keys",
      description: "Generate your API keys to start integrating our AI services into your applications."
    },
    {
      number: "04",
      title: "Integrate & Deploy",
      description: "Follow our documentation to integrate our AI solutions into your workflows and systems."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with VibeBest</h1>
              <p className="text-xl text-foreground/70 mb-8">
                Transform your organization with our cutting-edge AI solutions
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Free Trial
              </Button>
            </div>
            
            {/* Vibe blur panels */}
            <div className="relative h-64 rounded-2xl overflow-hidden my-16">
              <div className="vibe-blur-panel bg-blue-400/30 h-[200px] w-[200px] left-[20%] top-[20%]"></div>
              <div className="vibe-blur-panel bg-indigo-400/30 h-[200px] w-[200px] right-[20%] top-[30%]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-2xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to transform your business with AI?</h2>
                  <p className="text-lg">
                    Our platform makes it easy to integrate powerful AI capabilities into your products and workflows.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Plans Section */}
          <section className="py-12" id="pricing">
            <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden border ${
                    plan.highlighted 
                      ? 'border-primary shadow-lg relative border-2' 
                      : 'border-gray-100/20'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-foreground/60 ml-1">{plan.billing}</span>
                    </div>
                    <p className="text-foreground/70 mb-6">
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-primary hover:bg-primary/90 text-white' 
                          : 'bg-secondary/60 hover:bg-secondary/80 text-foreground'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-foreground/60">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </section>

          {/* How to Get Started */}
          <section className="py-12 bg-secondary/10 rounded-2xl p-8 my-12">
            <h2 className="text-3xl font-bold mb-12 text-center">How to Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-16 h-[2px] bg-gray-200 -ml-8 transform translate-x-1/2">
                      <div className="absolute right-0 top-1/2 transform translate-y-[-50%] w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What industries do you serve?</h3>
                <p className="text-foreground/70">
                  Our AI solutions are designed to be versatile and can be applied across various industries including healthcare, finance, manufacturing, retail, and more. We customize our offerings to meet the specific needs of each industry.
                </p>
              </div>
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How secure is your platform?</h3>
                <p className="text-foreground/70">
                  Security is our top priority. Our platform is built with enterprise-grade security measures, complies with industry standards, and undergoes regular security audits. We offer data encryption, secure API access, and role-based permissions.
                </p>
              </div>
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan later?</h3>
                <p className="text-foreground/70">
                  Yes, you can easily upgrade or downgrade your plan at any time through your account dashboard. Plan changes typically take effect at the start of your next billing cycle.
                </p>
              </div>
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What kind of support do you offer?</h3>
                <p className="text-foreground/70">
                  We offer different levels of support based on your plan. All customers have access to our comprehensive documentation and community forum. Professional and Enterprise plans include priority support with faster response times, and Enterprise customers receive dedicated account management.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of VibeBest AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Free Trial
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                <Link to="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
