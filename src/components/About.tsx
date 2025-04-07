
import React from "react";
import SkillBadge from "./SkillBadge";
import { ArrowRight } from "lucide-react";

const About = () => {
  const skills = [
    "HTML/CSS", "React", "JavaScript", "Node.js", 
    "MongoDB", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="bg-portfolio-card/30">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-slideRight">
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <div className="space-y-4 text-portfolio-muted">
              <p>
                I'm a passionate full-stack developer at the beginning of my professional journey, 
                with a strong interest in building web applications that solve real-world problems. 
                My programming journey started with curiosity during my school days, and ever since, 
                I've been committed to learning and creating.
              </p>
              <p>
                I recently completed my Master's in Computer Application from Chandigarh University (2022–2024), 
                after earning a Bachelor's in Computer Science from DN College, CCSU University, 
                Meerut (2019–2022). During my 6-month MERN Stack Developer training at ASB Mohali, 
                I built multiple projects focusing on clean code, responsive design, and user-friendly functionality.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new tech trends, learning from open-source communities, 
                and working on side projects to improve my skills. I believe in continuous growth, creativity, 
                and using technology to make a positive impact.
              </p>
            </div>
            
            <div className="mt-6">
              <a href="#projects" className="inline-flex items-center text-portfolio-accent hover:underline">
                Check out my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-portfolio-border pl-4 py-1 hover:border-portfolio-accent transition-all">
                  <h4 className="text-lg font-medium">MERN Stack Developer</h4>
                  <p className="text-portfolio-accent">ASB Mohali</p>
                  <p className="text-sm text-portfolio-muted">July 2024 - Dec 2024</p>
                  <p className="text-sm text-portfolio-muted">6 Months Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
