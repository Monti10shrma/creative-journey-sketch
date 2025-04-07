
import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) * 0.02;
      const moveY = (clientY - centerY) * 0.02;
      
      backgroundRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={backgroundRef} className="absolute w-full h-full">
          {/* Large gradient blobs with varied colors */}
          <div className="absolute top-1/2 -right-64 md:right-0 w-[500px] h-[500px] rounded-full opacity-20 bg-gradient-to-br from-purple-500 to-blue-500 blur-[120px] animate-pulse" 
               style={{animationDuration: '15s'}} />
          
          <div className="absolute bottom-1/3 -left-32 md:left-10 w-[400px] h-[400px] rounded-full opacity-15 bg-gradient-to-tr from-pink-500 to-orange-400 blur-[100px] animate-pulse" 
               style={{animationDuration: '17s'}} />
          
          {/* Additional animated shapes with smaller, varied colors */}
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full opacity-10 bg-gradient-to-r from-cyan-400 to-blue-400 blur-[80px] animate-pulse" 
               style={{animationDuration: '7s'}} />
               
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 bg-gradient-to-l from-violet-500 to-purple-500 blur-[100px] animate-pulse" 
               style={{animationDuration: '13s'}} />
               
          <div className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full opacity-10 bg-gradient-to-tr from-green-400 to-teal-500 blur-[90px] animate-pulse" 
               style={{animationDuration: '11s'}} />
               
          <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] rounded-full opacity-10 bg-gradient-to-bl from-amber-400 to-yellow-500 blur-[85px] animate-pulse" 
               style={{animationDuration: '9s'}} />
        </div>
      </div>
      
      {/* Animated particles with varied colors */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 25 }).map((_, index) => {
          // Create an array of particle colors
          const particleColors = [
            'bg-blue-400', 
            'bg-purple-400', 
            'bg-pink-400', 
            'bg-green-400', 
            'bg-yellow-400',
            'bg-cyan-400',
            'bg-amber-400',
            'bg-rose-400',
            'bg-emerald-400'
          ];
          
          // Select a random color for each particle
          const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)];
          
          return (
            <div
              key={index}
              className={`absolute rounded-full opacity-10 ${randomColor}`}
              style={{
                width: `${Math.random() * 12 + 4}px`,
                height: `${Math.random() * 12 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-slideUp">
          <p className="text-portfolio-accent mb-2 font-mono">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Manvendra Sharma
          </h1>
          <h2 className="text-2xl md:text-3xl text-portfolio-muted mb-6">
            Full-Stack Developer
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
                href="https://github.com/Monti10shrma/animate-project/commits?author=Monti10shrma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-accent transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/manvendra-sharma-66a503253" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-portfolio-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:manvendersharma412@gmail.com"
                className="hover:text-portfolio-accent transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
