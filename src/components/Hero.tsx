
import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      {/* Background element */}
      <div className="absolute top-1/2 -right-64 md:right-0 w-[500px] h-[500px] rounded-full opacity-10 bg-portfolio-accent blur-[120px]" />
      
      <div className="container mx-auto">
        <div className="max-w-3xl animate-slideUp">
          <p className="text-portfolio-accent mb-2 font-mono">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-muted mb-6">
            Full-Stack Developer & UI/UX Designer
          </h2>
          <p className="text-lg mb-8 text-portfolio-muted max-w-2xl">
            I build exceptional digital experiences that are fast, accessible,
            and aesthetically pleasing. Specializing in crafting modern web
            applications with cutting-edge technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
              <Mail className="h-4 w-4" />
            </a>
          </div>
          
          <div className="mt-10">
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-accent transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:hello@example.com"
                className="hover:text-portfolio-accent transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
