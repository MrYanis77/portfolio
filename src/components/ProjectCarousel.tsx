import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { image: project1, title: "Abéran Botanics", category: "Packaging & Identité" },
  { image: project2, title: "Maison Rivière", category: "Architecture intérieure" },
  { image: project3, title: "Terracotta Editorial", category: "Direction artistique" },
];

const ProjectCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % projects.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + projects.length) % projects.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Main image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl shadow-foreground/5">
        {projects.map((project, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-600"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.04)",
              transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Info overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rounded-md bg-background/90 backdrop-blur-sm px-4 py-3">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              {projects[current].category}
            </p>
            <h3 className="font-display text-lg text-foreground mt-0.5" style={{ lineHeight: 1.2 }}>
              {projects[current].title}
            </h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 28 : 8,
                backgroundColor: i === current
                  ? "hsl(var(--primary))"
                  : "hsl(var(--border))",
              }}
              aria-label={`Projet ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-1">
          <button
            onClick={prev}
            className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors active:scale-95"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors active:scale-95"
            aria-label="Suivant"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
