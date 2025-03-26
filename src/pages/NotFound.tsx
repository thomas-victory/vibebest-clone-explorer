
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Change document title for 404 page
    document.title = "Page Not Found - VibeBest";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-20">
        {/* Background gradient blurs */}
        <div className="vibe-blur-panel bg-blue-400/30 h-[300px] w-[300px] left-[10%] top-[20%]"></div>
        <div className="vibe-blur-panel bg-indigo-400/30 h-[250px] w-[250px] right-[5%] top-[30%]"></div>
        
        <div className="glass-panel p-12 text-center max-w-lg mx-auto animate-blur-in">
          <span className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6">
            404 Error
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-foreground/70 mb-8">
            The page you are looking for doesn't exist or has been moved to another URL.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link to="/" className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
