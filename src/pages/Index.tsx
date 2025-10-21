import { useEffect } from "react";
import ParticleField from "@/components/effects/ParticleField";
import CircularNav from "@/components/layout/CircularNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((reveal) => observer.observe(reveal));

    return () => reveals.forEach((reveal) => observer.unobserve(reveal));
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Particle Field Background */}
      <ParticleField />
      
      {/* Circular Navigation */}
      <CircularNav />
      
      <main>
        <Hero />
        
        {/* Asymmetric About + Experience Layout */}
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* About - Wide card */}
            <div className="reveal">
              <div className="glass p-12 rounded-3xl floating-card">
                <About />
              </div>
            </div>

            {/* Experience - Offset positioning */}
            <div className="reveal lg:ml-24">
              <div className="glass p-12 rounded-3xl floating-card perspective-card">
                <Experience />
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Projects Section */}
        <div className="diagonal-section bg-card/20">
          <div className="reveal">
            <Projects />
          </div>
        </div>

        {/* Split Layout: Achievements + Education */}
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Achievements - Takes 3 columns */}
              <div className="lg:col-span-3 reveal">
                <div className="glass p-12 rounded-3xl floating-card glow">
                  <Achievements />
                </div>
              </div>

              {/* Education - Takes 2 columns */}
              <div className="lg:col-span-2 reveal">
                <div className="glass p-8 rounded-3xl floating-card gradient-shift">
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact - Full width with magnetic effect */}
        <div className="reveal">
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
