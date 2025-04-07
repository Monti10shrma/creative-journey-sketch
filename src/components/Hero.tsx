
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
      {/* Enhanced animated background elements with vibrant colors */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={backgroundRef} className="absolute w-full h-full">
          {/* Large gradient blobs with more vibrant and varied colors */}
          <div className="absolute top-1/2 -right-64 md:right-0 w-[500px] h-[500px] rounded-full opacity-20 bg-gradient-to-br from-violet-600 to-blue-500 blur-[120px] animate-pulse" 
               style={{animationDuration: '15s'}} />
          
          <div className="absolute bottom-1/3 -left-32 md:left-10 w-[400px] h-[400px] rounded-full opacity-15 bg-gradient-to-tr from-pink-600 to-orange-500 blur-[100px] animate-pulse" 
               style={{animationDuration: '17s'}} />
          
          {/* Additional animated shapes with brighter, more varied colors */}
          <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] rounded-full opacity-15 bg-gradient-to-r from-cyan-500 to-blue-600 blur-[80px] animate-pulse" 
               style={{animationDuration: '7s'}} />
               
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-15 bg-gradient-to-l from-violet-600 to-purple-700 blur-[100px] animate-pulse" 
               style={{animationDuration: '13s'}} />
               
          <div className="absolute top-3/4 left-1/3 w-[300px] h-[300px] rounded-full opacity-15 bg-gradient-to-tr from-green-500 to-teal-600 blur-[90px] animate-pulse" 
               style={{animationDuration: '11s'}} />
               
          <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] rounded-full opacity-15 bg-gradient-to-bl from-amber-500 to-yellow-600 blur-[85px] animate-pulse" 
               style={{animationDuration: '9s'}} />

          {/* New additional vibrant elements */}
          <div className="absolute top-2/3 right-1/2 w-[270px] h-[270px] rounded-full opacity-10 bg-gradient-to-tl from-rose-500 to-red-600 blur-[95px] animate-pulse" 
               style={{animationDuration: '14s'}} />
               
          <div className="absolute bottom-2/3 left-1/2 w-[320px] h-[320px] rounded-full opacity-10 bg-gradient-to-br from-blue-600 to-indigo-700 blur-[110px] animate-pulse" 
               style={{animationDuration: '12s'}} />
        </div>
      </div>
      
      {/* Animated particles with enhanced vibrant colors */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, index) => {
          // Create an array of vibrant particle colors
          const particleColors = [
            'bg-blue-500', 
            'bg-purple-500', 
            'bg-pink-500', 
            'bg-green-500', 
            'bg-yellow-500',
            'bg-cyan-500',
            'bg-amber-500',
            'bg-rose-500',
            'bg-emerald-500',
            'bg-violet-500',
            'bg-indigo-500',
            'bg-fuchsia-500',
            'bg-lime-500',
            'bg-orange-500',
          ];
          
          // Select a random color for each particle
          const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)];
          
          return (
            <div
              key={index}
              className={`absolute rounded-full opacity-15 ${randomColor}`}
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
