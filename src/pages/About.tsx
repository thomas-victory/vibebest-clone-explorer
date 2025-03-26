
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    document.title = "About Us - VibeBest";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About VibeBest</h1>
              <p className="text-xl text-foreground/70">
                Pioneering AI solutions to solve humanity's greatest challenges
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-[400px] mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-xl text-center">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg">
                    To develop safe and ethical AI systems that empower humanity and address our most pressing challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded in 2020, VibeBest began with a simple but ambitious goal: to create artificial intelligence that can help solve complex problems in healthcare, energy, and scientific discovery.
                </p>
                <p>
                  Our team of researchers and engineers combines expertise from diverse fields including machine learning, neuroscience, engineering, mathematics, and ethics. This interdisciplinary approach allows us to develop AI systems that are not only powerful but also safe, ethical, and beneficial.
                </p>
                <p>
                  Today, VibeBest is at the forefront of AI research and development, working on breakthrough technologies that have the potential to transform industries and improve lives around the world.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-12 bg-secondary/10 rounded-2xl p-8 my-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p>We push the boundaries of what's possible, combining scientific rigor with creative thinking.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Responsibility</h3>
                <p>We develop AI with careful consideration of its ethical, social, and safety implications.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p>We believe the best solutions come from diverse perspectives working together.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
