
import React from "react";
import SkillBadge from "./SkillBadge";
import { ArrowRight } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Next.js", 
    "Tailwind CSS", "GraphQL", "MongoDB", "PostgreSQL",
    "Docker", "AWS", "Git", "UI/UX Design"
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
                I'm a passionate full-stack developer with over 5 years of experience 
                building web applications that solve real-world problems. My journey in 
                programming began when I built my first website at 16, and I've been 
                hooked ever since.
              </p>
              <p>
                After graduating with a degree in Computer Science from MIT, I've worked 
                with startups and established companies to deliver robust, scalable, and 
                user-friendly applications. My approach combines technical excellence with 
                a keen eye for design.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading science 
                fiction, or experimenting with new technologies. I believe in continuous learning 
                and sharing knowledge with the developer community.
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
                  <h4 className="text-lg font-medium">Senior Developer</h4>
                  <p className="text-portfolio-accent">Tech Innovations Inc.</p>
                  <p className="text-sm text-portfolio-muted">2021 - Present</p>
                </div>
                
                <div className="border-l-2 border-portfolio-border pl-4 py-1 hover:border-portfolio-accent transition-all">
                  <h4 className="text-lg font-medium">Full Stack Developer</h4>
                  <p className="text-portfolio-accent">Digital Solutions Co.</p>
                  <p className="text-sm text-portfolio-muted">2019 - 2021</p>
                </div>
                
                <div className="border-l-2 border-portfolio-border pl-4 py-1 hover:border-portfolio-accent transition-all">
                  <h4 className="text-lg font-medium">Frontend Engineer</h4>
                  <p className="text-portfolio-accent">WebCraft Studio</p>
                  <p className="text-sm text-portfolio-muted">2018 - 2019</p>
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
