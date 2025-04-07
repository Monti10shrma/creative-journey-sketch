
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores, featuring real-time analytics and inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Node.js", "MongoDB"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/example/ecommerce",
    },
    {
      id: 2,
      title: "Finance Tracker App",
      description: "Personal finance application that helps users track expenses, set budgets, and visualize spending habits.",
      imageUrl: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1770&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "Charts.js"],
      liveUrl: "https://example.com/finance",
      githubUrl: "https://github.com/example/finance",
    },
    {
      id: 3,
      title: "Virtual Event Platform",
      description: "A web application for hosting virtual events with features like live streaming, breakout rooms, and networking.",
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
      tags: ["Next.js", "WebRTC", "Socket.io", "Tailwind CSS"],
      liveUrl: "https://example.com/events",
      githubUrl: "https://github.com/example/events",
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "An application that uses AI to generate various types of content, from social media posts to full articles.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Python", "OpenAI API", "Express"],
      liveUrl: "https://example.com/ai-content",
      githubUrl: "https://github.com/example/ai-content",
    },
    {
      id: 5,
      title: "Health & Fitness Tracker",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "TypeScript", "PostgreSQL"],
      liveUrl: "https://example.com/health-app",
      githubUrl: "https://github.com/example/health-app",
    },
    {
      id: 6,
      title: "Smart Home Controller",
      description: "IoT application that integrates with various smart home devices and provides a unified control interface.",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055953ce7d0?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MQTT", "AWS IoT"],
      liveUrl: "https://example.com/smart-home",
      githubUrl: "https://github.com/example/smart-home",
    },
  ];

  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-portfolio-muted max-w-2xl mb-12">
          Here are some of my recent projects. Each one was crafted with attention to
          detail, focusing on performance, accessibility, and user experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
