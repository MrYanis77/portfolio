import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, ChevronLeft, Terminal, Layers, Users, Zap, Target, Brain, Heart, Shield, ArrowUpRight, ArrowDown, FileDown, ExternalLink, X, Wrench, Globe, User, Cpu, Monitor, Play, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import ThemeToggle from "@/components/ThemeToggle";
import logoGamedev from "@/assets/logo-gamedev.png";
import logoCpp from "@/assets/logo-cpp.png";
import logoUnreal from "@/assets/logo-unreal.png";
import logoUnity from "@/assets/logo-unity.png";
import logoOpengl from "@/assets/logo-opengl.png";
import logoNetwork from "@/assets/logo-network.png";
import logoMath3d from "@/assets/logo-math3d.png";
import logoGit from "@/assets/logo-git.png";
import logoPython from "@/assets/logo-python.png";
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
    <div className="flex items-center gap-4 mb-10">
      <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center glow-primary">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="font-display text-3xl font-extrabold text-foreground tracking-tight uppercase">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4" />
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

type MediaItem = { type: "image" | "video"; src: string };

const projetsPro = [
  { title: "Echoes of Valheim", desc: "Action-RPG open world — systèmes de loot, inventaire, quêtes dynamiques.", tech: "Unreal 5 · C++", image: projectGame1, media: [{ type: "image" as const, src: projectGame1 }, { type: "image" as const, src: projectGame3 }, { type: "image" as const, src: projectGame5 }], github: "#", download: "#" },
  { title: "Shadow Protocol", desc: "FPS tactique multijoueur — netcode, hit detection, replication.", tech: "Unreal 5 · C++ · Steam SDK", image: projectGame2, media: [{ type: "image" as const, src: projectGame2 }, { type: "image" as const, src: projectGame4 }, { type: "image" as const, src: projectGame1 }], github: "#", download: "#" },
  // Pour ajouter une vidéo : { type: "video", src: "/videos/gameplay.mp4" }
];

const projetsPerso = [
  { title: "Pixel Physics", desc: "Moteur physique 2D from scratch avec détection de collision SAT.", tech: "C++ · SDL2", image: projectGame3, media: [{ type: "image" as const, src: projectGame3 }, { type: "image" as const, src: projectGame1 }, { type: "image" as const, src: projectGame2 }], github: "#", download: "#" },
  { title: "Dungeon Generator", desc: "Génération procédurale de donjons avec BSP et wave function collapse.", tech: "C# · Unity", image: projectGame4, media: [{ type: "image" as const, src: projectGame4 }, { type: "image" as const, src: projectGame5 }, { type: "image" as const, src: projectGame3 }], github: "#", download: "#" },
  { title: "Shader Lab", desc: "Collection de shaders créatifs : eau, feu volumétrique, cel-shading.", tech: "GLSL · OpenGL", image: projectGame5, media: [{ type: "image" as const, src: projectGame5 }, { type: "image" as const, src: projectGame2 }, { type: "image" as const, src: projectGame4 }], github: "#", download: "#" },
];

const projetsDessin = [
  { title: "Concept Art — Personnage", desc: "Character design pour un RPG fantastique.", tech: "Photoshop · Procreate", image: projectGame1, media: [{ type: "image" as const, src: projectGame1 }, { type: "image" as const, src: projectGame3 }], github: "#", download: "#" },
  { title: "Environment Art", desc: "Illustration d'environnement post-apocalyptique.", tech: "Photoshop · Clip Studio", image: projectGame3, media: [{ type: "image" as const, src: projectGame3 }, { type: "image" as const, src: projectGame5 }], github: "#", download: "#" },
  { title: "Storyboard — Cinématique", desc: "Storyboard pour une cinématique in-game.", tech: "Procreate · Photoshop", image: projectGame5, media: [{ type: "image" as const, src: projectGame5 }, { type: "image" as const, src: projectGame2 }], github: "#", download: "#" },
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

const competences = {
  "Front-end": [
    { name: "C# / UNITY", logo: logoUnity },
    { name: "OPENGL / VULKAN", logo: logoOpengl },
    { name: "MATHS 3D", logo: logoMath3d },
  ],
  "Back-end": [
    { name: "C / C++", logo: logoCpp },
    { name: "UNREAL ENGINE", logo: logoUnreal },
    { name: "RÉSEAU / NETCODE", logo: logoNetwork },
    { name: "PYTHON", logo: logoPython },
    { name: "GIT / PERFORCE", logo: logoGit },
  ],
  "UX / UI": [
    { name: "OPENGL / VULKAN", logo: logoOpengl },
    { name: "MATHS 3D", logo: logoMath3d },
  ],
};

const outils = {
  "Front-end": [
    { name: "Unity", category: "Moteur" },
    { name: "Blender", category: "3D" },
    { name: "Substance Painter", category: "Textures" },
    { name: "FMOD", category: "Audio" },
  ],
  "Back-end": [
    { name: "Unreal Engine 5", category: "Moteur" },
    { name: "Visual Studio", category: "IDE" },
    { name: "Rider", category: "IDE" },
    { name: "RenderDoc", category: "Debug" },
    { name: "Perforce", category: "Versioning" },
    { name: "Git", category: "Versioning" },
  ],
  "UX / UI": [
    { name: "Photoshop", category: "2D" },
    { name: "Blender", category: "3D" },
    { name: "Jira", category: "Gestion" },
  ],
};

const certifications = [
  { title: "Unreal Engine 5 Certified Developer", org: "Epic Games", year: "2024", image: projectGame1 },
  { title: "Advanced C++ Programming", org: "CppCon", year: "2023", image: projectGame2 },
  { title: "Unity Certified Programmer", org: "Unity Technologies", year: "2022", image: projectGame3 },
];

const PROJECTS_PER_PAGE = 2;

const aboutTabs = [
  { key: "parcours", label: "Parcours", icon: Layers },
  { key: "experience", label: "Expérience", icon: Briefcase },
  { key: "competences", label: "Compétences", icon: Terminal },
  { key: "outils", label: "Outils", icon: Wrench },
  { key: "qualites", label: "Qualités", icon: Star },
  { key: "formations", label: "Formations", icon: GraduationCap },
  { key: "certifications", label: "Certifications", icon: Award },
] as const;

type AboutTab = typeof aboutTabs[number]["key"];

const Index = () => {
  const [certImage, setCertImage] = useState<string | null>(null);
  const [projectLightbox, setProjectLightbox] = useState<{ media: MediaItem[]; index: number; title: string } | null>(null);
  const [proPage, setProPage] = useState(0);
  const [persoPage, setPersoPage] = useState(0);
  const [outilsTab, setOutilsTab] = useState<"Front-end" | "Back-end" | "UX / UI">("Front-end");
  const [compTab, setCompTab] = useState<"Front-end" | "Back-end" | "UX / UI">("Front-end");
  const [aboutTab, setAboutTab] = useState<AboutTab>("parcours");
  const [dessinPage, setDessinPage] = useState(0);
  const proMaxPage = Math.ceil(projetsPro.length / PROJECTS_PER_PAGE) - 1;
  const persoMaxPage = Math.ceil(projetsPerso.length / 3) - 1;
  const dessinMaxPage = Math.ceil(projetsDessin.length / 3) - 1;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative noise">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>
      

      {/* Certification lightbox */}
      {certImage && (
        <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setCertImage(null)}>
          <div className="relative max-w-2xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCertImage(null)} className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-10">
              <X className="h-4 w-4" />
            </button>
            <img src={certImage} alt="Certification" className="w-full h-auto rounded-xl border border-primary/20 glow-primary" />
          </div>
        </div>
      )}

      {/* Project lightbox */}
      {projectLightbox && (() => {
        const currentMedia = projectLightbox.media[projectLightbox.index];
        const total = projectLightbox.media.length;
        return (
        <div className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex flex-col items-center justify-center p-6" onClick={() => setProjectLightbox(null)}>
          <button
            onClick={(e) => { e.stopPropagation(); setProjectLightbox({ ...projectLightbox, index: (projectLightbox.index - 1 + total) % total }); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-90 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative max-w-3xl w-full animate-scale-in mx-16" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {currentMedia.type === "video" && <Play className="h-4 w-4 text-accent fill-accent" />}
                <h3 className="font-display text-xl font-bold text-foreground">{projectLightbox.title}</h3>
              </div>
              <button onClick={() => setProjectLightbox(null)} className="h-8 w-8 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            {currentMedia.type === "video" ? (
              <video
                key={projectLightbox.index}
                src={currentMedia.src}
                controls
                autoPlay
                playsInline
                className="w-full h-auto rounded-xl border border-accent/20 glow-accent"
              />
            ) : (
              <img src={currentMedia.src} alt={projectLightbox.title} className="w-full h-auto rounded-xl border border-primary/20 glow-primary" />
            )}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-xs text-muted-foreground">{projectLightbox.index + 1} / {total}</p>
                {/* Media type indicators */}
                <div className="flex gap-1">
                  {projectLightbox.media.map((m, i) => (
                    <button key={i} onClick={() => setProjectLightbox({ ...projectLightbox, index: i })} className={`h-1.5 rounded-full transition-all ${i === projectLightbox.index ? (m.type === "video" ? 'w-6 bg-accent' : 'w-6 bg-primary') : 'w-1.5 bg-border hover:bg-muted-foreground'}`} />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="h-8 w-8 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setProjectLightbox({ ...projectLightbox, index: (projectLightbox.index + 1) % total }); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-90 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        );
      })()}

      {/* ═══ NAV ═══ */}
      <nav className="px-6 lg:px-10 py-4 flex items-center justify-between sticky top-0 glass z-50 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-extrabold text-foreground uppercase tracking-widest">
            Game<span className="text-primary">Dev</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: "#about", label: "À propos" },
            { href: "#projets", label: "Projets" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="mailto:votre.email@gmail.com" className="text-xs font-mono font-bold text-accent-foreground bg-accent px-5 py-2 rounded-lg hover:brightness-110 transition-all active:scale-95 uppercase tracking-wider glow-accent">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ═══ HERO — 40/60 split ═══ */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center min-h-[75vh]">
          {/* LEFT — Présentation (40%) */}
          <div className="flex flex-col gap-8 animate-fade-up">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                <span className="text-foreground">Prénom</span>{" "}
                <span className="gradient-text">Nom</span>
              </h1>
              <p className="text-sm text-muted-foreground/70 mt-4 leading-relaxed max-w-sm">
                En recherche d'un poste de Game Developer pour créer des expériences immersives et innovantes.
              </p>
            </div>


            {/* Social + CV */}
            <div className="flex gap-3 items-center flex-wrap">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="h-10 w-10 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all active:scale-90">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all active:scale-95 glow-accent">
                <FileDown className="h-3.5 w-3.5" /> CV PDF
              </a>
            </div>

            <a href="#about" className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider group mt-2">
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" /> Scroll to explore
            </a>
          </div>

          {/* RIGHT — Carrousel (60%) */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
            <ProjectCarousel />
          </div>
        </div>
      </main>

      {/* ════════════════════ SECTIONS ════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 space-y-28 relative z-10">

        {/* ══ À PROPOS DE MOI ══ */}
        <Section id="about">
          <SectionTitle icon={User} label="À propos de moi" />

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {aboutTabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setAboutTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg border transition-all ${
                    aboutTab === tab.key
                      ? 'bg-primary text-primary-foreground border-primary glow-primary'
                      : 'border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="min-h-[300px]">
            {/* Parcours */}
            {aboutTab === "parcours" && (
              <div className="relative pl-8 animate-fade-up">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-primary/10" />
                {parcours.map((p, i) => (
                  <div key={i} className="relative mb-8 last:mb-0 group">
                    <div className={`absolute -left-[21px] top-2 h-3 w-3 rounded-full ${p.highlight ? 'bg-primary glow-primary' : 'bg-border'} ring-4 ring-background group-hover:scale-150 transition-transform`} />
                    <div className="bg-card border border-border rounded-xl p-5 ml-2 hover:border-primary/30 transition-all card-hover">
                      <span className="font-mono text-xs text-accent font-bold">{p.year}</span>
                      <p className="text-sm text-foreground mt-1 font-medium">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Expérience */}
            {aboutTab === "experience" && (
              <div className="space-y-5 animate-fade-up">
                {experiences.map((exp, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all card-hover group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground font-mono">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-accent font-medium px-3 py-1 border border-accent/20 bg-accent/5 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2.5 py-1 border border-primary/20 bg-primary/5 text-primary font-mono uppercase tracking-wider rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Compétences */}
            {aboutTab === "competences" && (
              <div className="animate-fade-up">
                <div className="flex gap-2 mb-6">
                  {(["Front-end", "Back-end", "UX / UI"] as const).map((tab) => (
                    <button key={tab} onClick={() => setCompTab(tab)} className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-lg transition-all ${compTab === tab ? 'bg-accent text-accent-foreground border-accent glow-accent' : 'border-border bg-card/50 text-muted-foreground hover:border-accent/40 hover:text-accent'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {competences[compTab].map((c, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group card-hover">
                      <div className="h-16 w-16 flex items-center justify-center">
                        <img src={c.logo} alt={c.name} loading="lazy" width={64} height={64} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="font-mono text-xs text-foreground font-bold tracking-wider text-center uppercase">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outils */}
            {aboutTab === "outils" && (
              <div className="animate-fade-up">
                <div className="flex gap-2 mb-6">
                  {(["Front-end", "Back-end", "UX / UI"] as const).map((tab) => (
                    <button key={tab} onClick={() => setOutilsTab(tab)} className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-lg transition-all ${outilsTab === tab ? 'bg-accent text-accent-foreground border-accent glow-accent' : 'border-border bg-card/50 text-muted-foreground hover:border-accent/40 hover:text-accent'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {outils[outilsTab].map((o, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-all group card-hover">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xs font-bold text-foreground mb-0.5">{o.name}</h3>
                      <span className="font-mono text-[9px] text-accent uppercase tracking-wider">{o.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualités */}
            {aboutTab === "qualites" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-up">
                {qualites.map((q, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group card-hover">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <q.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1.5 uppercase tracking-wide">{q.label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Formations */}
            {aboutTab === "formations" && (
              <div className="space-y-5 animate-fade-up">
                {formations.map((f, i) => (
                  <div key={i} className="flex items-start gap-5 bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all card-hover">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono mt-0.5">{f.school} — {f.year}</p>
                      <p className="text-sm text-muted-foreground mt-1">{f.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {aboutTab === "certifications" && (
              <div className="space-y-4 animate-fade-up">
                {certifications.map((c, i) => (
                  <div key={i} className="flex items-center gap-5 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all group card-hover">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.org}</p>
                    </div>
                    <button onClick={() => setCertImage(c.image)} className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90 shrink-0" title="Voir le certificat">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                    <span className="font-mono text-xs text-accent font-medium">{c.year}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* ══ PROJETS ══ */}
        <Section id="projets">
          <SectionTitle icon={Gamepad2} label="Projets" />

          {/* Pro projects */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/30 bg-accent/5 text-accent text-xs font-mono uppercase tracking-wider rounded-lg">
                <Trophy className="h-3.5 w-3.5" /> Projets professionnels
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground">{proPage + 1}/{proMaxPage + 1}</span>
                <button onClick={() => setProPage(Math.max(0, proPage - 1))} disabled={proPage === 0} className="h-8 w-8 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setProPage(Math.min(proMaxPage, proPage + 1))} disabled={proPage >= proMaxPage} className="h-8 w-8 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projetsPro.slice(proPage * PROJECTS_PER_PAGE, proPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE).map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 inset-x-0 flex justify-center pb-3">
                      <span className="px-6 py-1.5 glass border-primary/30 text-primary text-[10px] font-mono uppercase tracking-[0.2em] rounded-full">
                        {p.tech.split("·")[0]?.trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
                    <button
                      onClick={() => setProjectLightbox({ media: p.media, index: 0, title: p.title })}
                      className="w-full py-3 border border-primary/30 bg-primary/5 rounded-lg text-primary text-sm font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                    >
                      View Details <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-card/50 text-muted-foreground text-xs font-mono uppercase tracking-wider rounded-lg">
                <Code2 className="h-3.5 w-3.5" /> Projets personnels
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground">{persoPage + 1}/{persoMaxPage + 1}</span>
                <button onClick={() => setPersoPage(Math.max(0, persoPage - 1))} disabled={persoPage === 0} className="h-8 w-8 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setPersoPage(Math.min(persoMaxPage, persoPage + 1))} disabled={persoPage >= persoMaxPage} className="h-8 w-8 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projetsPerso.slice(persoPage * 3, persoPage * 3 + 3).map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    
                    <div className="absolute bottom-0 inset-x-0 flex justify-center pb-3">
                      <span className="px-6 py-1.5 glass border-primary/30 text-primary text-[10px] font-mono uppercase tracking-[0.2em] rounded-full">
                        {p.tech.split("·")[0]?.trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                    <button
                      onClick={() => setProjectLightbox({ media: p.media, index: 0, title: p.title })}
                      className="w-full py-2.5 border border-primary/30 bg-primary/5 rounded-lg text-primary text-xs font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                    >
                      View Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>


      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-10 text-center relative z-10">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          © 2024 Game<span className="text-primary">Dev</span> — Built with passion & C++
        </p>
      </footer>
    </div>
  );
};

export default Index;