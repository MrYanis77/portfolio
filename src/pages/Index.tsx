import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, Terminal, Layers, Users, Zap, Target, Brain, Heart, Shield, ArrowUpRight, Sparkles, ArrowDown, FileDown } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import ThemeToggle from "@/components/ThemeToggle";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";
import projectGame1 from "@/assets/project-game-1.jpg";
import projectGame2 from "@/assets/project-game-2.jpg";
import projectGame3 from "@/assets/project-game-3.jpg";
import projectGame4 from "@/assets/project-game-4.jpg";
import projectGame5 from "@/assets/project-game-5.jpg";

/* ── Scroll reveal hook ── */
function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("animate-fade-up"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

function Section({ children, className = "", id, delay = 0 }: { children: React.ReactNode; className?: string; id?: string; delay?: number }) {
  const ref = useScrollReveal(delay);
  return (
    <section ref={ref} id={id} className={`opacity-0 ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="font-display text-3xl font-extrabold text-foreground tracking-tight uppercase">{label}</h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
  );
}

/* ── Data ── */
const parcours = [
  { year: "2024", text: "Lead Game Programmer — Studio indépendant", highlight: true },
  { year: "2023", text: "Gameplay Programmer — AAA Studio", highlight: false },
  { year: "2021", text: "Junior Engine Programmer — Mobile Gaming", highlight: true },
  { year: "2020", text: "Stage développement jeu — Startup VR", highlight: false },
  { year: "2019", text: "Diplôme Ingénieur Informatique — Spé Jeux Vidéo", highlight: true },
];

const experiences = [
  { role: "Lead Game Programmer", company: "Indie Forge Studio", period: "2024 – Présent", desc: "Architecture gameplay, gestion d'équipe de 4 devs, pipeline CI/CD pour builds multiplateformes.", tags: ["C++", "Unreal 5", "Perforce"] },
  { role: "Gameplay Programmer", company: "Nexus Interactive", period: "2023 – 2024", desc: "Systèmes de combat, IA ennemie, intégration animation avec state machines.", tags: ["C++", "Unreal", "Havok"] },
  { role: "Engine Programmer", company: "PixelWave Games", period: "2021 – 2023", desc: "Optimisation rendu mobile, système de particules custom, profiling mémoire.", tags: ["C++", "OpenGL ES", "Metal"] },
];

const projetsPro = [
  { title: "Echoes of Valheim", desc: "Action-RPG open world — systèmes de loot, inventaire, quêtes dynamiques.", tech: "Unreal 5 · C++", image: projectGame1 },
  { title: "Shadow Protocol", desc: "FPS tactique multijoueur — netcode, hit detection, replication.", tech: "Unreal 5 · C++ · Steam SDK", image: projectGame2 },
];

const projetsPerso = [
  { title: "Pixel Physics", desc: "Moteur physique 2D from scratch avec détection de collision SAT.", tech: "C++ · SDL2", image: projectGame3 },
  { title: "Dungeon Generator", desc: "Génération procédurale de donjons avec BSP et wave function collapse.", tech: "C# · Unity", image: projectGame4 },
  { title: "Shader Lab", desc: "Collection de shaders créatifs : eau, feu volumétrique, cel-shading.", tech: "GLSL · OpenGL", image: projectGame5 },
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
    <div className="min-h-screen bg-background overflow-hidden relative noise">

      {/* Nav */}
      <nav className="px-6 lg:px-10 py-5 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="font-display text-lg font-extrabold text-foreground uppercase tracking-widest">GameDev</span>
        </div>
        <div className="flex items-center gap-8">
          {[
            { href: "#parcours", label: "Parcours" },
            { href: "#projets", label: "Projets" },
            { href: "#competences", label: "Skills" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">{link.label}</a>
          ))}
          <a href="#" className="text-xs font-mono font-bold text-primary-foreground bg-primary px-5 py-2 hover:brightness-110 transition-all active:scale-95 uppercase tracking-wider">Contact</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ═══ HERO — Massive typography + scattered collage ═══ */}
      <main className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Subtitle top-left */}
        <div className="absolute top-8 left-8 md:left-12 z-20 animate-fade-up">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em] leading-relaxed">
            Your journey begins<br />where code becomes real
          </p>
        </div>

        {/* Giant Typography */}
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="font-display text-[12vw] md:text-[11vw] font-extrabold text-foreground/10 leading-[0.85] tracking-tight uppercase select-none">
            Game<br />Dev
          </h1>
        </div>

        {/* Scattered collage rectangles over the text */}
        <div className="absolute left-[3%] top-[20%] z-20 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="w-36 md:w-48 overflow-hidden collage-frame group cursor-pointer" style={{ transform: "rotate(-8deg)" }}>
            <img src={projectGame5} alt="Dungeon RPG" className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <div className="absolute right-[5%] top-[8%] z-20 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <div className="w-40 md:w-56 overflow-hidden collage-frame group cursor-pointer" style={{ transform: "rotate(5deg)" }}>
            <img src={projectGame4} alt="Neon Command" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <div className="absolute left-[28%] bottom-[5%] z-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="w-44 md:w-60 overflow-hidden collage-frame group cursor-pointer" style={{ transform: "rotate(3deg)" }}>
            <img src={projectGame1} alt="Void Station" className="w-full h-auto aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <div className="absolute right-[20%] bottom-[18%] z-20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="w-28 md:w-40 overflow-hidden collage-frame group cursor-pointer" style={{ transform: "rotate(-6deg)" }}>
            <img src={thumb4} alt="3D Modeling" className="w-full h-auto aspect-[3/2] object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* Spinning scroll indicator — bottom right */}
        <div className="absolute bottom-8 right-8 md:right-12 z-20 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a href="#parcours" className="relative w-20 h-20 flex items-center justify-center group">
            <svg className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-muted-foreground" style={{ fontSize: "10.5px", fontFamily: "var(--font-mono)", letterSpacing: "3px" }}>
                <textPath href="#circlePath">SCROLL TO EXPLORE • SCROLL TO EXPLORE •</textPath>
              </text>
            </svg>
            <ArrowDown className="h-4 w-4 text-primary group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Bio overlay — bottom left */}
        <div className="absolute bottom-8 left-8 md:left-12 z-20 max-w-xs animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {["C++", "C#", "Unreal", "Unity", "OpenGL"].map((t) => (
              <span key={t} className="text-[9px] px-2.5 py-1 border border-border text-muted-foreground font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default">{t}</span>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            {[
              { Icon: Github, label: "GitHub" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Mail, label: "Email" },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-wider hover:brightness-110 transition-all active:scale-95">
              <FileDown className="h-3.5 w-3.5" />
              CV PDF
            </a>
          </div>
        </div>
      </main>

      {/* ═══ Carousel section below hero ═══ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-10 items-start">
          <div className="animate-fade-up">
            <p className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-3">Featured Projects</p>
            <h2 className="font-display text-3xl font-extrabold text-foreground uppercase leading-tight">
              Mes<br />créations
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Game programmer spécialisé en gameplay systems, moteurs physiques et architecture réseau.
            </p>
          </div>
          <div className="animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
            <ProjectCarousel />
          </div>
        </div>
        {/* Collage thumbnails */}
        <div className="flex gap-4 mt-10 justify-center">
          {[
            { src: thumb1, label: "Gameplay Systems", rotate: "-2deg" },
            { src: thumb2, label: "Character Tech", rotate: "1.5deg" },
            { src: thumb3, label: "Physics Engine", rotate: "-1deg" },
            { src: thumb4, label: "3D Modeling", rotate: "2deg" },
            { src: thumb5, label: "VFX Particles", rotate: "-1.5deg" },
          ].map((t) => (
            <div key={t.label} className="relative group cursor-pointer w-28 collage-frame" style={{ transform: `rotate(${t.rotate})` }}>
              <div className="overflow-hidden torn-edge">
                <img src={t.src} alt={t.label} className="w-full h-20 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>
              <div className="mt-2">
                <span className="font-mono text-[8px] text-muted-foreground uppercase tracking-wider">{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════ SECTIONS ════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 space-y-28 relative z-10">

        {/* ── Parcours ── */}
        <Section id="parcours">
          <SectionTitle icon={Layers} label="Mon Parcours" />
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-primary/30" />
            {parcours.map((p, i) => (
              <div key={i} className="relative mb-8 last:mb-0 group">
                <div className={`absolute -left-[21px] top-2 h-3 w-3 rounded-full ${p.highlight ? 'bg-primary' : 'bg-border'} ring-4 ring-background group-hover:scale-150 transition-transform`} />
                <div className="bg-card border border-border p-5 ml-2 hover:border-primary/30 transition-all">
                  <span className="font-mono text-xs text-primary font-bold">{p.year}</span>
                  <p className="text-sm text-foreground mt-1 font-medium">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Expérience Pro ── */}
        <Section id="experience">
          <SectionTitle icon={Briefcase} label="Expérience" />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-card border border-border p-6 hover:border-primary/30 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-primary/70 font-medium">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 border border-primary/20 text-primary font-mono uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Projets ── */}
        <Section id="projets">
          <SectionTitle icon={Gamepad2} label="Projets" />


          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 text-primary text-xs font-mono mb-6 uppercase tracking-wider">
              <Trophy className="h-3.5 w-3.5" />
              Projets professionnels
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projetsPro.map((p, i) => (
                <div key={i} className="bg-card border border-border overflow-hidden hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <span className="font-mono text-xs text-primary/70 font-medium">{p.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border text-muted-foreground text-xs font-mono mb-6 uppercase tracking-wider">
              <Code2 className="h-3.5 w-3.5" />
              Projets personnels
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {projetsPerso.map((p, i) => (
                <div key={i} className="bg-card border border-border overflow-hidden hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-all" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <span className="font-mono text-[11px] text-primary/50 font-medium">{p.tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Formations ── */}
        <Section>
          <SectionTitle icon={GraduationCap} label="Formations" />
          <div className="space-y-5">
            {formations.map((f, i) => (
              <div key={i} className="flex items-start gap-5 bg-card border border-border p-6 hover:border-primary/30 transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono mt-0.5">{f.school} — {f.year}</p>
                  <p className="text-sm text-muted-foreground mt-1">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Qualités ── */}
        <Section>
          <SectionTitle icon={Star} label="Qualités" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualites.map((q, i) => (
              <div key={i} className="bg-card border border-border p-6 hover:border-primary/30 transition-all group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <q.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5 uppercase tracking-wide">{q.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Compétences ── */}
        <Section id="competences">
          <SectionTitle icon={Terminal} label="Compétences" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {competences.map((c, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-foreground font-medium">{c.name}</span>
                  <span className="font-mono text-xs text-primary font-bold">{c.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-700"
                    style={{ width: `${c.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Certifications ── */}
        <Section>
          <SectionTitle icon={Award} label="Certifications" />
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <div key={i} className="flex items-center gap-5 bg-card border border-border p-5 hover:border-primary/30 transition-all group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{c.org}</p>
                </div>
                <span className="font-mono text-xs text-primary/60 font-medium">{c.year}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10 text-center relative z-10">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">© 2024 GameDev — Built with passion & C++</p>
      </footer>
    </div>
  );
};

export default Index;
