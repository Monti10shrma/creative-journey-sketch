
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ochi Website",
      description: "A modern, minimal, and creative website designed for a presentation agency. It showcases their services, case studies, and clients in a clean and stylish way with smooth animations, bold typography, and a dark theme.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Next.js", "GSAP", "Tailwind CSS"],
      liveUrl: "https://example.com/ochi",
      githubUrl: "https://github.com/example/ochi",
    },
    {
      id: 2,
      title: "Bus Pass Management System",
      description: "A web-based system that helps manage records of bus passes issued by the administration. It allows people who travel daily to apply for bus passes online, reducing paperwork and saving time.",
      imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1770&auto=format&fit=crop",
      tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      liveUrl: "https://example.com/buspass",
      githubUrl: "https://github.com/example/buspass",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A web-based project that shows the current weather information of any city entered by the user. Uses a weather API to get real-time data like temperature, humidity, wind speed, and weather conditions.",
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/example/weather",
    },
    {
      id: 4,
      title: "Portfolio",
      description: "A personal website showcasing skills, projects, education, and contact details. Created as an online resume where employers or clients can learn more about my work, presented in a professional and creative way.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://example.com/portfolio",
      githubUrl: "https://github.com/example/portfolio",
    }
  ];

  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-portfolio-muted max-w-2xl mb-12">
          Here are some of my recent projects. Each one was crafted with attention to
          detail, focusing on performance, accessibility, and user experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
