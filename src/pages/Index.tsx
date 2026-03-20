import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, Terminal, Cpu, Layers, Users, Zap, Target, Brain, Heart, Shield } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";

/* ── Scroll reveal hook ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`opacity-0 ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-8 w-8 border border-primary/30 bg-primary/10 flex items-center justify-center">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <h2 className="text-xl font-bold text-foreground tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-border ml-2" />
    </div>
  );
}

/* ── Data ── */
const parcours = [
  { year: "2024", text: "Lead Game Programmer — Studio indépendant" },
  { year: "2023", text: "Gameplay Programmer — AAA Studio" },
  { year: "2021", text: "Junior Engine Programmer — Mobile Gaming" },
  { year: "2020", text: "Stage développement jeu — Startup VR" },
  { year: "2019", text: "Diplôme Ingénieur Informatique — Spé Jeux Vidéo" },
];

const experiences = [
  { role: "Lead Game Programmer", company: "Indie Forge Studio", period: "2024 – Présent", desc: "Architecture gameplay, gestion d'équipe de 4 devs, pipeline CI/CD pour builds multiplateformes.", tags: ["C++", "Unreal 5", "Perforce"] },
  { role: "Gameplay Programmer", company: "Nexus Interactive", period: "2023 – 2024", desc: "Systèmes de combat, IA ennemie, intégration animation avec state machines.", tags: ["C++", "Unreal", "Havok"] },
  { role: "Engine Programmer", company: "PixelWave Games", period: "2021 – 2023", desc: "Optimisation rendu mobile, système de particules custom, profiling mémoire.", tags: ["C++", "OpenGL ES", "Metal"] },
];

const projetsPro = [
  { title: "Echoes of Valheim", type: "pro", desc: "Action-RPG open world — systèmes de loot, inventaire, quêtes dynamiques.", tech: "Unreal 5 · C++" },
  { title: "Shadow Protocol", type: "pro", desc: "FPS tactique multijoueur — netcode, hit detection, replication.", tech: "Unreal 5 · C++ · Steam SDK" },
];

const projetsPerso = [
  { title: "Pixel Physics", type: "perso", desc: "Moteur physique 2D from scratch avec détection de collision SAT.", tech: "C++ · SDL2" },
  { title: "Dungeon Generator", type: "perso", desc: "Génération procédurale de donjons avec BSP et wave function collapse.", tech: "C# · Unity" },
  { title: "Shader Lab", type: "perso", desc: "Collection de shaders créatifs : eau, feu volumétrique, cel-shading.", tech: "GLSL · OpenGL" },
];

const formations = [
  { title: "Master Game Programming", school: "ISART Digital", year: "2019", detail: "Spécialisation moteur et gameplay" },
  { title: "Licence Informatique", school: "Université Paris-Saclay", year: "2017", detail: "Algorithmique, structures de données, maths appliquées" },
];

const qualites = [
  { icon: Brain, label: "Problem Solver", desc: "Décomposer les problèmes complexes en solutions élégantes" },
  { icon: Users, label: "Team Player", desc: "Communication claire, code reviews constructives, mentorat" },
  { icon: Zap, label: "Optimisation", desc: "Obsédé par la performance et les 60fps constants" },
  { icon: Target, label: "Rigueur", desc: "Tests unitaires, documentation, clean code" },
  { icon: Heart, label: "Passion", desc: "Le jeu vidéo n'est pas juste un métier, c'est une vocation" },
  { icon: Shield, label: "Résilience", desc: "Deadlines serrées, crunch maîtrisé, adaptation rapide" },
];

const competences = [
  { name: "C / C++", level: 95 },
  { name: "Unreal Engine", level: 90 },
  { name: "C# / Unity", level: 85 },
  { name: "OpenGL / Vulkan", level: 75 },
  { name: "Réseau / Netcode", level: 80 },
  { name: "Physique / Maths 3D", level: 85 },
  { name: "Git / Perforce", level: 90 },
  { name: "Python / Outils", level: 70 },
];

const certifications = [
  { title: "Unreal Engine 5 Certified Developer", org: "Epic Games", year: "2024" },
  { title: "Advanced C++ Programming", org: "CppCon", year: "2023" },
  { title: "Unity Certified Programmer", org: "Unity Technologies", year: "2022" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Top nav bar */}
      <nav className="border-b border-border px-6 py-3.5 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-sm z-50">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">G</span>
          </div>
          <span className="text-sm font-semibold text-foreground tracking-tight">GameDev</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#parcours" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Parcours</a>
          <a href="#projets" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Projets</a>
          <a href="#competences" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#" className="font-mono text-xs text-primary">Contact</a>
        </div>
      </nav>

      {/* Hero — keeping existing layout */}
      <main className="px-6 lg:px-10 py-8 lg:py-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
          <div className="flex flex-col justify-center animate-fade-up">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-4">// game programmer</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight text-balance">
              Créer des mondes, une ligne de code à la fois
            </h1>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Game programmer spécialisé en gameplay systems, moteurs physiques et architecture réseau. Passionné par l'optimisation et les systèmes complexes.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["C++", "C#", "Unreal", "Unity", "OpenGL"].map((t) => (
                <span key={t} className="font-mono text-[10px] px-2.5 py-1 border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="h-8 w-8 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors active:scale-95">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            <div className="flex gap-2">
              {["All", "3D / FPS", "2D / Platformer", "Engine"].map((cat, i) => (
                <button key={cat} className={`font-mono text-[10px] px-3 py-1.5 border transition-colors active:scale-95 ${i === 0 ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"}`}>{cat}</button>
              ))}
            </div>
            <ProjectCarousel />
            <div className="flex gap-3 mt-1">
              {[{ src: thumb1, label: "Gameplay Systems" }, { src: thumb2, label: "Character Tech" }, { src: thumb3, label: "Physics Engine" }].map((t) => (
                <div key={t.label} className="relative group cursor-pointer overflow-hidden border border-border flex-1">
                  <img src={t.src} alt={t.label} className="w-full h-20 object-cover opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-2 py-1">
                    <span className="font-mono text-[9px] text-muted-foreground">{t.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ════════════════════ SECTIONS ════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 space-y-20">

        {/* ── Parcours ── */}
        <Section id="parcours">
          <SectionTitle icon={Layers} label="Mon Parcours" />
          <div className="relative pl-6 border-l border-border">
            {parcours.map((p, i) => (
              <div key={i} className="relative mb-6 last:mb-0">
                <div className="absolute -left-[25px] top-1 h-3 w-3 border-2 border-primary bg-background" />
                <span className="font-mono text-[10px] text-primary">{p.year}</span>
                <p className="text-sm text-foreground mt-0.5">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Expérience Pro ── */}
        <Section id="experience">
          <SectionTitle icon={Briefcase} label="Expérience Professionnelle" />
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="border border-border p-5 hover:border-primary/30 transition-colors group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="font-mono text-[11px] text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="font-mono text-[10px] text-primary/70">{exp.period}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[9px] px-2 py-0.5 border border-border text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Projets ── */}
        <Section id="projets">
          <SectionTitle icon={Gamepad2} label="Projets" />
          <div className="mb-6">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-4">// projets professionnels</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projetsPro.map((p, i) => (
                <div key={i} className="border border-border p-5 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-3.5 w-3.5 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{p.desc}</p>
                  <span className="font-mono text-[10px] text-primary/60">{p.tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-4">// projets personnels</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projetsPerso.map((p, i) => (
                <div key={i} className="border border-border p-5 hover:border-primary/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="h-3.5 w-3.5 text-primary/60" />
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{p.desc}</p>
                  <span className="font-mono text-[10px] text-primary/60">{p.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Formations ── */}
        <Section>
          <SectionTitle icon={GraduationCap} label="Formations" />
          <div className="space-y-4">
            {formations.map((f, i) => (
              <div key={i} className="flex items-start gap-4 border border-border p-5 hover:border-primary/30 transition-colors">
                <div className="h-10 w-10 border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                  <p className="font-mono text-[11px] text-muted-foreground">{f.school} — {f.year}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Qualités ── */}
        <Section>
          <SectionTitle icon={Star} label="Qualités" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualites.map((q, i) => (
              <div key={i} className="border border-border p-5 hover:border-primary/30 transition-colors group">
                <q.icon className="h-5 w-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-semibold text-foreground mb-1">{q.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Compétences ── */}
        <Section id="competences">
          <SectionTitle icon={Terminal} label="Compétences" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {competences.map((c, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs text-foreground">{c.name}</span>
                  <span className="font-mono text-[10px] text-primary">{c.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-700" style={{ width: `${c.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Certifications ── */}
        <Section>
          <SectionTitle icon={Award} label="Certifications" />
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-4 border border-border p-4 hover:border-primary/30 transition-colors">
                <Award className="h-5 w-5 text-primary shrink-0" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                  <p className="font-mono text-[11px] text-muted-foreground">{c.org}</p>
                </div>
                <span className="font-mono text-[10px] text-primary/60">{c.year}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center">
        <p className="font-mono text-[10px] text-muted-foreground">© 2024 GameDev — Built with passion & C++</p>
      </footer>
    </div>
  );
};

export default Index;
