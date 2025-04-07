
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div className={cn("project-card group", className)}>
      <div className="relative overflow-hidden h-56">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-portfolio-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-portfolio-muted mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-portfolio-bg rounded-md font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-accent transition-colors"
              aria-label={`View ${title} GitHub repository`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-accent transition-colors"
              aria-label={`Visit ${title} live site`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
