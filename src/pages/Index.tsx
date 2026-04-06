import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, ChevronLeft, Terminal, Layers, Users, Zap, Target, Brain, Heart, Shield, ArrowUpRight, ArrowDown, FileDown, ExternalLink, X, Wrench, Globe, User, Cpu, Monitor, Play } from "lucide-react";
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
    <div className="flex items-center gap-4 mb-12">
      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4" />
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
];

const projetsPerso = [
  { title: "Pixel Physics", desc: "Moteur physique 2D from scratch avec détection de collision SAT.", tech: "C++ · SDL2", image: projectGame3, media: [{ type: "image" as const, src: projectGame3 }, { type: "image" as const, src: projectGame1 }, { type: "image" as const, src: projectGame2 }], github: "#", download: "#" },
  { title: "Dungeon Generator", desc: "Génération procédurale de donjons avec BSP et wave function collapse.", tech: "C# · Unity", image: projectGame4, media: [{ type: "image" as const, src: projectGame4 }, { type: "image" as const, src: projectGame5 }, { type: "image" as const, src: projectGame3 }], github: "#", download: "#" },
  { title: "Shader Lab", desc: "Collection de shaders créatifs : eau, feu volumétrique, cel-shading.", tech: "GLSL · OpenGL", image: projectGame5, media: [{ type: "image" as const, src: projectGame5 }, { type: "image" as const, src: projectGame2 }, { type: "image" as const, src: projectGame4 }], github: "#", download: "#" },
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
  const proMaxPage = Math.ceil(projetsPro.length / PROJECTS_PER_PAGE) - 1;
  const persoMaxPage = Math.ceil(projetsPerso.length / 3) - 1;

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Certification lightbox */}
      {certImage && (
        <div className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setCertImage(null)}>
          <div className="relative max-w-2xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCertImage(null)} className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-10">
              <X className="h-4 w-4" />
            </button>
            <img src={certImage} alt="Certification" className="w-full h-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      )}

      {/* Project lightbox */}
      {projectLightbox && (() => {
        const currentMedia = projectLightbox.media[projectLightbox.index];
        const total = projectLightbox.media.length;
        return (
        <div className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-md flex flex-col items-center justify-center p-6" onClick={() => setProjectLightbox(null)}>
          <button
            onClick={(e) => { e.stopPropagation(); setProjectLightbox({ ...projectLightbox, index: (projectLightbox.index - 1 + total) % total }); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-2xl bg-background/90 shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-90 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative max-w-3xl w-full animate-scale-in mx-16" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {currentMedia.type === "video" && <Play className="h-4 w-4 text-accent fill-accent" />}
                <h3 className="font-display text-xl font-bold text-primary-foreground">{projectLightbox.title}</h3>
              </div>
              <button onClick={() => setProjectLightbox(null)} className="h-8 w-8 rounded-xl bg-background/90 shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
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
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <img src={currentMedia.src} alt={projectLightbox.title} className="w-full h-auto rounded-2xl shadow-2xl" />
            )}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <p className="font-mono text-xs text-primary-foreground/70">{projectLightbox.index + 1} / {total}</p>
                <div className="flex gap-1">
                  {projectLightbox.media.map((m, i) => (
                    <button key={i} onClick={() => setProjectLightbox({ ...projectLightbox, index: i })} className={`h-1.5 rounded-full transition-all ${i === projectLightbox.index ? (m.type === "video" ? 'w-6 bg-accent' : 'w-6 bg-primary-foreground') : 'w-1.5 bg-primary-foreground/30 hover:bg-primary-foreground/50'}`} />
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="h-8 w-8 rounded-xl bg-background/90 shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-xl bg-background/90 shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setProjectLightbox({ ...projectLightbox, index: (projectLightbox.index + 1) % total }); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-2xl bg-background/90 shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-90 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        );
      })()}

      {/* ═══ NAV ═══ */}
      <nav className="px-6 lg:px-10 py-5 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-lg z-50 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={logoGamedev} alt="GameDev Logo" className="h-9 w-9 rounded-xl object-cover" />
            <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-accent border-2 border-background" />
          </div>
          <span className="font-display text-lg font-extrabold text-foreground tracking-wide">
            Game<span className="text-primary">Dev</span>
          </span>
        </div>
        <div className="flex items-center gap-8">
          {[
            { href: "#about", label: "À propos" },
            { href: "#projets", label: "Projets" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group font-medium">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="mailto:votre.email@gmail.com" className="text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ═══ HERO — Split layout with geometric right side ═══ */}
      <main className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-[85vh]">
          {/* LEFT — Présentation (40%) */}
          <div className="flex flex-col justify-center gap-8 px-6 lg:px-14 py-16 animate-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-sm text-primary font-semibold tracking-wide">Game Developer</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-foreground">Hello, my<br />name's </span>
                <span className="gradient-text">Prénom.</span>
                <br />
                <span className="text-foreground">I'm a </span>
                <span className="text-primary">Game<br />Developer.</span>
              </h1>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              En recherche d'un poste de Game Developer pour créer des expériences immersives et innovantes.
            </p>

            {/* Social + CV */}
            <div className="flex gap-3 items-center flex-wrap">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="h-11 w-11 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all active:scale-90">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-accent/20">
                <FileDown className="h-4 w-4" /> CV PDF
              </a>
            </div>

            <a href="#about" className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group mt-4">
              <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </div>
              Scroll down
            </a>
          </div>

          {/* RIGHT — Geometric colored area with carousel (60%) */}
          <div className="relative geo-bg diagonal-clip flex items-center justify-center p-8 lg:p-14 animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
            {/* Floating geometric shapes */}
            <div className="absolute top-[15%] right-[10%] w-20 h-20 bg-primary-foreground/20 rounded-xl rotate-12 animate-float" />
            <div className="absolute bottom-[20%] left-[5%] w-14 h-14 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-[60%] right-[25%] w-10 h-10 bg-primary-foreground/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[30%] left-[15%] w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
            
            <div className="relative z-10 w-full max-w-lg">
              <ProjectCarousel />
            </div>
          </div>
        </div>
      </main>

      {/* ════════════════════ SECTIONS ════════════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24 space-y-32 relative z-10 pt-20">

        {/* ══ À PROPOS DE MOI ══ */}
        <Section id="about">
          <SectionTitle icon={User} label="À propos de moi" />

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-10">
            {aboutTabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setAboutTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    aboutTab === tab.key
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  <TabIcon className="h-4 w-4" />
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
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent/30 to-border" />
                {parcours.map((p, i) => (
                  <div key={i} className="relative mb-8 last:mb-0 group">
                    <div className={`absolute -left-[21px] top-2 h-3 w-3 rounded-full ${p.highlight ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-border'} ring-4 ring-background group-hover:scale-150 transition-transform`} />
                    <div className="bg-card border border-border rounded-2xl p-6 ml-2 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                      <span className="text-sm text-accent font-bold">{p.year}</span>
                      <p className="text-sm text-foreground mt-1.5 font-medium">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Expérience */}
            {aboutTab === "experience" && (
              <div className="space-y-5 animate-fade-up">
                {experiences.map((exp, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-xs text-accent font-semibold px-3 py-1.5 bg-accent/10 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 bg-primary/10 text-primary font-medium rounded-lg">{tag}</span>
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
                    <button key={tab} onClick={() => setCompTab(tab)} className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${compTab === tab ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {competences[compTab].map((c, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-3 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group card-hover">
                      <div className="h-16 w-16 flex items-center justify-center">
                        <img src={c.logo} alt={c.name} loading="lazy" width={64} height={64} className="object-contain group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-xs text-foreground font-bold text-center">{c.name}</span>
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
                    <button key={tab} onClick={() => setOutilsTab(tab)} className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${outilsTab === tab ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {outils[outilsTab].map((o, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group card-hover">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xs font-bold text-foreground mb-1">{o.name}</h3>
                      <span className="text-[11px] text-accent font-medium">{o.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualités */}
            {aboutTab === "qualites" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-up">
                {qualites.map((q, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group card-hover">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <q.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{q.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Formations */}
            {aboutTab === "formations" && (
              <div className="space-y-5 animate-fade-up">
                {formations.map((f, i) => (
                  <div key={i} className="flex items-start gap-5 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all card-hover">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{f.school} — {f.year}</p>
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
                  <div key={i} className="flex items-center gap-5 bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group card-hover">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.org}</p>
                    </div>
                    <button onClick={() => setCertImage(c.image)} className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90 shrink-0" title="Voir le certificat">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                    <span className="text-xs text-accent font-semibold">{c.year}</span>
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
            <div className="flex items-center justify-between mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-xl">
                <Trophy className="h-4 w-4" /> Projets professionnels
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium">{proPage + 1}/{proMaxPage + 1}</span>
                <button onClick={() => setProPage(Math.max(0, proPage - 1))} disabled={proPage === 0} className="h-9 w-9 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setProPage(Math.min(proMaxPage, proPage + 1))} disabled={proPage >= proMaxPage} className="h-9 w-9 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projetsPro.slice(proPage * PROJECTS_PER_PAGE, proPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE).map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 flex justify-center pb-3">
                      <span className="px-5 py-1.5 bg-background/80 backdrop-blur-md text-primary text-xs font-semibold rounded-full shadow-lg">
                        {p.tech.split("·")[0]?.trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
                    <button
                      onClick={() => setProjectLightbox({ media: p.media, index: 0, title: p.title })}
                      className="w-full py-3 bg-primary/10 text-primary rounded-xl text-sm font-semibold hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
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
            <div className="flex items-center justify-between mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground text-sm font-semibold rounded-xl">
                <Code2 className="h-4 w-4" /> Projets personnels
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium">{persoPage + 1}/{persoMaxPage + 1}</span>
                <button onClick={() => setPersoPage(Math.max(0, persoPage - 1))} disabled={persoPage === 0} className="h-9 w-9 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setPersoPage(Math.min(persoMaxPage, persoPage + 1))} disabled={persoPage >= persoMaxPage} className="h-9 w-9 rounded-xl border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projetsPerso.slice(persoPage * 3, persoPage * 3 + 3).map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 flex justify-center pb-3">
                      <span className="px-5 py-1.5 bg-background/80 backdrop-blur-md text-primary text-xs font-semibold rounded-full shadow-lg">
                        {p.tech.split("·")[0]?.trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                    <button
                      onClick={() => setProjectLightbox({ media: p.media, index: 0, title: p.title })}
                      className="w-full py-2.5 bg-primary/10 text-primary rounded-xl text-sm font-semibold hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
                    >
                      View Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══ CONTACT ══ */}
        <Section id="contact">
          <SectionTitle icon={Mail} label="Contact" />
          <div className="max-w-xl mx-auto text-center space-y-8">
            <p className="text-muted-foreground text-base leading-relaxed">
              Une idée de projet, une question ou simplement envie d'échanger&nbsp;? N'hésitez pas à me contacter&nbsp;!
            </p>
            <a
              href="mailto:votre.email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-accent/20"
            >
              <Mail className="h-5 w-5" /> Envoyer un mail
            </a>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-12 text-center relative z-10">
        <p className="text-sm text-muted-foreground">
          © 2024 Game<span className="text-primary font-semibold">Dev</span> — Built with passion & C++
        </p>
      </footer>
    </div>
  );
};

export default Index;
