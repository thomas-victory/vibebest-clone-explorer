
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - VibeBest";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    reason: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent successfully",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      reason: 'general'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-foreground/70">
                Have questions or want to collaborate? We'd love to hear from you.
              </p>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-panel p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium mb-2">
                        Reason for Contact
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="careers">Careers Information</option>
                        <option value="press">Press Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
                      <p className="text-foreground/70">
                        123 Innovation Way<br />
                        San Francisco, CA 94107<br />
                        United States
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <p className="text-foreground/70">
                        General Inquiries: info@vibebest.ai<br />
                        Media: press@vibebest.ai<br />
                        Careers: careers@vibebest.ai
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <p className="text-foreground/70">
                        +1 (415) 555-0123
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-secondary/10 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
                  <p className="text-foreground/70 mb-4">
                    Stay updated with our latest research and company news.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background"
                    />
                    <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
