
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - VibeBest";
  }, []);

  const openPositions = [
    {
      title: "Senior Research Scientist",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Research",
      link: "#"
    },
    {
      title: "Machine Learning Engineer",
      location: "Boston, MA",
      type: "Full-time",
      department: "Engineering",
      link: "#"
    },
    {
      title: "AI Ethics Researcher",
      location: "Remote",
      type: "Full-time",
      department: "Research",
      link: "#"
    },
    {
      title: "Software Engineer - Frontend",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      link: "#"
    },
    {
      title: "Product Manager - AI Solutions",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      link: "#"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-foreground/70 mb-8">
                Help us build AI that advances science and benefits humanity
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                View Open Positions
              </Button>
            </div>
          </section>

          {/* Why Join Section */}
          <section className="py-12 bg-secondary/10 rounded-2xl p-8 my-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Join VibeBest</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
                <p>Work on cutting-edge AI research and applications that address humanity's most pressing challenges.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Collaborative Culture</h3>
                <p>Join a diverse team of experts who value collaboration, creativity, and continuous learning.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Growth & Development</h3>
                <p>Access resources, mentorship, and opportunities to advance your career and expertise.</p>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div key={index} className="p-6 border border-gray-100/20 rounded-lg hover:bg-secondary/5 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <div className="flex flex-col md:flex-row md:items-center mt-2 text-sm text-foreground/70">
                        <span>{position.location}</span>
                        <span className="hidden md:block mx-2">•</span>
                        <span>{position.type}</span>
                        <span className="hidden md:block mx-2">•</span>
                        <span>{position.department}</span>
                      </div>
                    </div>
                    <Link to={position.link} className="mt-4 md:mt-0">
                      <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p>Generous salary packages, equity grants, and performance bonuses.</p>
              </div>
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Health & Wellness</h3>
                <p>Comprehensive medical, dental, and vision coverage for you and your dependents.</p>
              </div>
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
                <p>Remote-friendly culture with flexible schedules and generous PTO.</p>
              </div>
              <div className="p-6 border border-gray-100/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Learning & Development</h3>
                <p>Education stipends, conference attendance, and continuous learning opportunities.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
