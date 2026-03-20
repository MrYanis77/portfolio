import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Top nav bar */}
      <nav className="border-b border-border px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">G</span>
          </div>
          <span className="text-sm font-semibold text-foreground tracking-tight">GameDev</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Projets</a>
          <a href="#" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#" className="font-mono text-xs text-primary">Contact</a>
        </div>
      </nav>

      {/* Main layout following wireframe */}
      <main className="px-6 lg:px-10 py-8 lg:py-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">

          {/* LEFT — Presentation text */}
          <div className="flex flex-col justify-center animate-fade-up">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-4">
              // game programmer
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight text-balance">
              Créer des mondes, une ligne de code à la fois
            </h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Game programmer spécialisé en gameplay systems, moteurs physiques et architecture réseau. 
              Passionné par l'optimisation et les systèmes complexes.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["C++", "C#", "Unreal", "Unity", "OpenGL"].map((t) => (
                <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              <a href="#" className="h-8 w-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors active:scale-95">
                <Github className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="h-8 w-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors active:scale-95">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="h-8 w-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors active:scale-95">
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT — Carousel + thumbnails zone */}
          <div className="flex flex-col gap-4 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            {/* Small category tabs above carousel */}
            <div className="flex gap-2">
              {["All", "3D / FPS", "2D / Platformer", "Engine"].map((cat, i) => (
                <button
                  key={cat}
                  className={`font-mono text-[10px] px-3 py-1.5 border transition-colors active:scale-95 ${
                    i === 0
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Carousel */}
            <ProjectCarousel />

            {/* Thumbnails below carousel */}
            <div className="flex gap-3 mt-1">
              <div className="relative group cursor-pointer overflow-hidden border border-border flex-1">
                <img src={thumb1} alt="Code" className="w-full h-20 object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-2 py-1">
                  <span className="font-mono text-[9px] text-muted-foreground">Gameplay Systems</span>
                </div>
              </div>
              <div className="relative group cursor-pointer overflow-hidden border border-border flex-1">
                <img src={thumb2} alt="3D Model" className="w-full h-20 object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-2 py-1">
                  <span className="font-mono text-[9px] text-muted-foreground">Character Tech</span>
                </div>
              </div>
              <div className="relative group cursor-pointer overflow-hidden border border-border flex-1">
                <img src={thumb3} alt="Physics" className="w-full h-20 object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-2 py-1">
                  <span className="font-mono text-[9px] text-muted-foreground">Physics Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
