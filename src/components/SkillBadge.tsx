
import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        "px-3 py-1.5 bg-portfolio-card border border-portfolio-border rounded-md text-sm font-mono transition-all hover:border-portfolio-accent hover:text-portfolio-accent",
        className
      )}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
