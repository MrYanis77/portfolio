import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import projectGame1 from "@/assets/project-game-1.jpg";
import projectGame2 from "@/assets/project-game-2.jpg";
import projectGame3 from "@/assets/project-game-3.jpg";
import projectGame4 from "@/assets/project-game-4.jpg";
import projectGame5 from "@/assets/project-game-5.jpg";

const projects = [
  { image: projectGame1, title: "Void Station", category: "Unreal Engine 5", tech: "C++ / Blueprints" },
  { image: projectGame2, title: "Pixel Brawl", category: "2D Platformer", tech: "Unity / C#" },
  { image: projectGame3, title: "Ember Gate", category: "Action RPG", tech: "Custom Engine / C++" },
  { image: projectGame4, title: "Neon Command", category: "Sci-Fi Strategy", tech: "C++ / Custom Engine" },
  { image: projectGame5, title: "Dungeon Depths", category: "Roguelike RPG", tech: "C# / Unity" },
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
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border glow-primary">
        {projects.map((project, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.05)",
              transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-1">{project.category}</p>
                <h3 className="text-lg font-display font-bold text-foreground glow-text-primary">{project.title}</h3>
              </div>
              <span className="font-mono text-xs text-primary font-medium px-3 py-1 border border-primary/30 rounded-full bg-background/50 backdrop-blur-sm">{project.tech}</span>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-90"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-90"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-2 mt-4 justify-end items-center">
        <span className="font-mono text-[11px] text-muted-foreground mr-2">
          {String(current + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
        </span>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-primary glow-primary' : 'w-2 bg-border hover:bg-muted-foreground'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;