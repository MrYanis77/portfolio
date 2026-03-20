import { ArrowRight } from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";
import creation1 from "@/assets/creation-1.jpg";
import creation2 from "@/assets/creation-2.jpg";
import creation3 from "@/assets/creation-3.jpg";
import creation4 from "@/assets/creation-4.jpg";
import creation5 from "@/assets/creation-5.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-sm">
        <span className="font-display text-xl text-foreground" style={{ lineHeight: 1 }}>
          Atelier.
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projets</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Floating creation images */}
      <img
        src={creation1}
        alt="Création abstraite"
        className="absolute top-24 right-8 w-28 h-36 object-cover rounded shadow-lg shadow-foreground/5 animate-float-slow opacity-80 hidden lg:block"
        style={{ animationDelay: "0s" }}
      />
      <img
        src={creation4}
        alt="Typographie"
        className="absolute top-20 left-[52%] w-20 h-24 object-cover rounded shadow-lg shadow-foreground/5 animate-float-slow opacity-70 hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      />
      <img
        src={creation5}
        alt="Céramique"
        className="absolute bottom-32 right-16 w-24 h-24 object-cover rounded-full shadow-lg shadow-foreground/5 animate-float-slow opacity-75 hidden lg:block"
        style={{ animationDelay: "3s" }}
      />
      <img
        src={creation2}
        alt="Identité visuelle"
        className="absolute bottom-24 left-[48%] w-20 h-20 object-cover rounded shadow-lg shadow-foreground/5 animate-float-slow opacity-70 hidden lg:block"
        style={{ animationDelay: "2s" }}
      />
      <img
        src={creation3}
        alt="Web design"
        className="absolute top-[55%] right-[38%] w-28 h-20 object-cover rounded shadow-lg shadow-foreground/5 animate-float-slow opacity-60 hidden xl:block"
        style={{ animationDelay: "4s" }}
      />

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen items-center px-8 lg:px-16 pt-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left - Presentation */}
          <div className="flex-1 max-w-md animate-fade-up">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Studio créatif
            </p>
            <h1
              className="font-display text-4xl lg:text-5xl text-foreground text-balance"
              style={{ lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Donner forme à vos idées
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-sm">
              Nous concevons des identités visuelles, du design éditorial et des
              expériences digitales qui racontent votre histoire avec justesse.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
              Découvrir nos projets
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Small stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-display text-2xl text-foreground" style={{ lineHeight: 1 }}>43</p>
                <p className="text-xs text-muted-foreground mt-1">Projets livrés</p>
              </div>
              <div>
                <p className="font-display text-2xl text-foreground" style={{ lineHeight: 1 }}>7 ans</p>
                <p className="text-xs text-muted-foreground mt-1">D'expérience</p>
              </div>
              <div>
                <p className="font-display text-2xl text-foreground" style={{ lineHeight: 1 }}>12</p>
                <p className="text-xs text-muted-foreground mt-1">Collaborateurs</p>
              </div>
            </div>
          </div>

          {/* Right - Carousel */}
          <div className="flex-1 flex justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <ProjectCarousel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
