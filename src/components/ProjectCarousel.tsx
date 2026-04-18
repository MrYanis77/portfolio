import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export type CarouselMedia = {
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
  tech: string;
};

const projects: CarouselMedia[] = [
  {
    type: "image",
    src: "/projets/alt-rh/accueil.png",
    title: "Alt RH Consulting",
    category: "Développement Web",
    tech: "React / Tailwind"
  },
  {
    type: "image",
    src: "/Jeux/parcours/plateau.PNG",
    title: "Parkours Warriors",
    category: "Game Design",
    tech: "Unity / C#"
  },
  {
    type: "image",
    src: "/dessin/dessin3.jpg",
    title: "Créations Graphiques",
    category: "Illustration",
    tech: "Dessin"
  },
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
    // Auto-advance only on images
    if (projects[current].type === "video") return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, current]);

  return (
    <div className="w-full relative group">
      {/* Decorative background glow */}
      <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

      <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border shadow-[0_8px_30px_-4px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.15)] z-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? "scale(1)" : "scale(1.05)",
              transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            {project.type === "video" ? (
              <video
                src={project.src}
                className="h-full w-full object-contain"
                controls
                playsInline
                muted
                autoPlay={i === current}
                onEnded={next}
              />
            ) : (
              <img src={project.src} alt={project.title} className="h-full w-full object-contain" />
            )}
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-90 z-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all active:scale-90 z-10"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex gap-2 mt-4 justify-end items-center">
        <span className="font-mono text-[11px] text-muted-foreground mr-2">
          {String(current + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
        </span>
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? (p.type === "video" ? 'w-7 bg-accent' : 'w-7 bg-primary') : 'w-2 bg-border hover:bg-muted-foreground'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;