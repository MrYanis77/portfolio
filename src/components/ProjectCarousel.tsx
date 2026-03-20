import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectGame1 from "@/assets/project-game-1.jpg";
import projectGame2 from "@/assets/project-game-2.jpg";
import projectGame3 from "@/assets/project-game-3.jpg";

const projects = [
  { image: projectGame1, title: "Void Station", category: "Unreal Engine 5", tech: "C++ / Blueprints" },
  { image: projectGame2, title: "Pixel Brawl", category: "2D Platformer", tech: "Unity / C#" },
  { image: projectGame3, title: "Ember Gate", category: "Action RPG", tech: "Custom Engine / C++" },
];

const ProjectCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % projects.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + projects.length) % projects.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full">
      {/* Main carousel */}
      <div className="relative aspect-[3/2] overflow-hidden border border-border bg-card">
        {projects.map((project, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.03)",
              transition: "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            {/* Bottom info bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-background/85 backdrop-blur-sm border-t border-border px-4 py-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                <p className="text-xs text-muted-foreground">{project.category}</p>
              </div>
              <span className="font-mono text-[10px] text-primary tracking-wider">{project.tech}</span>
            </div>
          </div>
        ))}

        {/* Nav arrows inside */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors active:scale-95"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors active:scale-95"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-1.5 mt-3 justify-end items-center">
        <span className="font-mono text-[10px] text-muted-foreground mr-2">
          {String(current + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
        </span>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-1 transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              backgroundColor: i === current ? "hsl(var(--primary))" : "hsl(var(--border))",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
