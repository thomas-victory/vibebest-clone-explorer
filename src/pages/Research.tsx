
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Research = () => {
  useEffect(() => {
    document.title = "Research - VibeBest";
  }, []);

  const researchAreas = [
    {
      title: "Foundation Models",
      description: "Creating versatile AI systems that can be adapted to a wide range of tasks and domains.",
      image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Multimodal Learning",
      description: "Developing systems that can understand and process multiple types of information including text, images, and audio.",
      image: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
    },
    {
      title: "Reinforcement Learning",
      description: "Advancing algorithms that enable AI to learn from experience and improve through trial and error.",
      image: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
    },
    {
      title: "AI Safety",
      description: "Ensuring AI systems are robust, interpretable, and aligned with human values and intentions.",
      image: "bg-gradient-to-br from-pink-500/20 to-purple-500/20"
    },
    {
      title: "Healthcare AI",
      description: "Using AI to accelerate medical research, improve diagnosis, and develop personalized treatments.",
      image: "bg-gradient-to-br from-teal-500/20 to-blue-500/20"
    },
    {
      title: "Climate & Energy",
      description: "Applying AI to climate modeling, renewable energy optimization, and sustainable resource management.",
      image: "bg-gradient-to-br from-green-500/20 to-yellow-500/20"
    }
  ];

  const publications = [
    {
      title: "Advancing Contextual Understanding in Large Language Models",
      authors: "Zhang, J., Patel, S., Nguyen, T.",
      conference: "International Conference on Machine Learning (ICML 2023)",
      link: "#"
    },
    {
      title: "Multimodal Learning: Bridging Vision and Language for Comprehensive AI Systems",
      authors: "Rodriguez, A., Kim, H., Johnson, M.",
      conference: "Neural Information Processing Systems (NeurIPS 2023)",
      link: "#"
    },
    {
      title: "Reinforcement Learning from Human Feedback: A New Paradigm",
      authors: "Williams, R., Chen, L., Thompson, J.",
      conference: "Association for Computational Linguistics (ACL 2023)",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Research</h1>
              <p className="text-xl text-foreground/70">
                Pushing the boundaries of AI to benefit humanity
              </p>
            </div>
          </section>

          {/* Research Areas */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Research Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-gray-100/20">
                  <div className={`h-32 ${area.image}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                    <p className="text-foreground/70">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8">Recent Publications</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="p-6 border border-gray-100/20 rounded-lg bg-secondary/5">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link to={pub.link} className="hover:text-primary transition-colors">
                      {pub.title}
                    </Link>
                  </h3>
                  <p className="font-medium">{pub.authors}</p>
                  <p className="text-foreground/70 text-sm mt-2">{pub.conference}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="#" className="text-primary hover:underline font-medium">
                View all publications →
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;
