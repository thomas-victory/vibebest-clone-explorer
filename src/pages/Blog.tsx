
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - VibeBest";
  }, []);

  const featuredPost = {
    title: "Breaking New Ground in Multimodal AI Systems",
    excerpt: "Our research team has made significant progress in developing AI systems that can seamlessly integrate and process multiple types of data, including text, images, and audio.",
    date: "June 15, 2023",
    author: "Dr. Sarah Johnson",
    category: "Research",
    image: "bg-gradient-to-r from-blue-500/30 to-purple-500/30"
  };

  const blogPosts = [
    {
      title: "The Future of AI in Healthcare: Personalized Medicine",
      excerpt: "How AI is revolutionizing healthcare by enabling truly personalized treatment plans based on individual patient data.",
      date: "May 28, 2023",
      author: "Dr. Michael Chen",
      category: "Healthcare",
      image: "bg-gradient-to-r from-green-500/20 to-teal-500/20"
    },
    {
      title: "Ethics in AI: Ensuring Responsible Development",
      excerpt: "Our approach to developing AI technologies that are not only powerful but also ethical, transparent, and aligned with human values.",
      date: "May 12, 2023",
      author: "Emma Rodriguez",
      category: "Ethics",
      image: "bg-gradient-to-r from-orange-500/20 to-red-500/20"
    },
    {
      title: "Reinforcement Learning Breakthrough: Teaching AI Through Human Feedback",
      excerpt: "A detailed look at our latest research on reinforcement learning from human feedback (RLHF) and its implications.",
      date: "April 30, 2023",
      author: "Dr. James Wilson",
      category: "Research",
      image: "bg-gradient-to-r from-pink-500/20 to-purple-500/20"
    },
    {
      title: "Climate Change and AI: Modeling for a Sustainable Future",
      excerpt: "How our climate models are helping scientists better understand and address the challenges of climate change.",
      date: "April 15, 2023",
      author: "Dr. Lisa Patel",
      category: "Climate",
      image: "bg-gradient-to-r from-teal-500/20 to-blue-500/20"
    },
    {
      title: "The Democratization of AI: Making Advanced Technology Accessible",
      excerpt: "Our initiatives to make AI technology more accessible to researchers, businesses, and the public.",
      date: "March 28, 2023",
      author: "Alex Thompson",
      category: "Community",
      image: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">VibeBest Blog</h1>
              <p className="text-xl text-foreground/70">
                Insights and updates from our team of researchers and engineers
              </p>
            </div>
          </section>

          {/* Featured Post */}
          <section className="mb-16">
            <div className="rounded-2xl overflow-hidden border border-gray-100/20 shadow-sm">
              <div className={`h-64 ${featuredPost.image}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="mx-2 text-foreground/40">•</span>
                  <span className="text-sm text-foreground/60">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <Link to="#" className="hover:text-primary transition-colors">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-foreground/70 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">By {featuredPost.author}</span>
                  <Link to="#" className="text-primary hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-8">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-gray-100/20 shadow-sm">
                  <div className={`h-40 ${post.image}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="mx-2 text-foreground/40 text-xs">•</span>
                      <span className="text-xs text-foreground/60">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to="#" className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">By {post.author}</span>
                      <Link to="#" className="text-sm text-primary hover:underline">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link to="#" className="text-primary hover:underline font-medium">
                View all articles →
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
