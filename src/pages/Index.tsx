import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, ChevronLeft, Terminal, Layers, Users, Zap, Target, Brain, Heart, Shield, ArrowUpRight, ArrowDown, FileDown, ExternalLink, X, Wrench, Globe, User } from "lucide-react";
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
  { title: "Echoes of Valheim", desc: "Action-RPG open world — systèmes de loot, inventaire, quêtes dynamiques.", tech: "Unreal 5 · C++", image: projectGame1, images: [projectGame1, projectGame3, projectGame5], github: "#", download: "#" },
  { title: "Shadow Protocol", desc: "FPS tactique multijoueur — netcode, hit detection, replication.", tech: "Unreal 5 · C++ · Steam SDK", image: projectGame2, images: [projectGame2, projectGame4, projectGame1], github: "#", download: "#" },
];

const projetsPerso = [
  { title: "Pixel Physics", desc: "Moteur physique 2D from scratch avec détection de collision SAT.", tech: "C++ · SDL2", image: projectGame3, images: [projectGame3, projectGame1, projectGame2], github: "#", download: "#" },
  { title: "Dungeon Generator", desc: "Génération procédurale de donjons avec BSP et wave function collapse.", tech: "C# · Unity", image: projectGame4, images: [projectGame4, projectGame5, projectGame3], github: "#", download: "#" },
  { title: "Shader Lab", desc: "Collection de shaders créatifs : eau, feu volumétrique, cel-shading.", tech: "GLSL · OpenGL", image: projectGame5, images: [projectGame5, projectGame2, projectGame4], github: "#", download: "#" },
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
  const [projectLightbox, setProjectLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);
  const [proPage, setProPage] = useState(0);
  const [persoPage, setPersoPage] = useState(0);
  const [outilsTab, setOutilsTab] = useState<"Front-end" | "Back-end" | "UX / UI">("Front-end");
  const [compTab, setCompTab] = useState<"Front-end" | "Back-end" | "UX / UI">("Front-end");
  const [aboutTab, setAboutTab] = useState<AboutTab>("parcours");
  const proMaxPage = Math.ceil(projetsPro.length / PROJECTS_PER_PAGE) - 1;
  const persoMaxPage = Math.ceil(projetsPerso.length / 3) - 1;

  const allProjects = [...projetsPro, ...projetsPerso];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative noise">

      {/* Certification lightbox */}
      {certImage && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setCertImage(null)}>
          <div className="relative max-w-2xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCertImage(null)} className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-10">
              <X className="h-4 w-4" />
            </button>
            <img src={certImage} alt="Certification" className="w-full h-auto rounded-sm border border-border" />
          </div>
        </div>
      )}

      {/* Project lightbox with manual navigation */}
      {projectLightbox && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6" onClick={() => setProjectLightbox(null)}>
          <button
            onClick={(e) => { e.stopPropagation(); setProjectLightbox({ ...projectLightbox, index: (projectLightbox.index - 1 + projectLightbox.images.length) % projectLightbox.images.length }); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative max-w-3xl w-full animate-scale-in mx-16" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-bold text-foreground">{projectLightbox.title}</h3>
              <button onClick={() => setProjectLightbox(null)} className="h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <img src={projectLightbox.images[projectLightbox.index]} alt={projectLightbox.title} className="w-full h-auto rounded-lg border border-border" />
            <div className="flex items-center justify-between mt-4">
              <p className="font-mono text-xs text-muted-foreground">{projectLightbox.index + 1} / {projectLightbox.images.length}</p>
              <div className="flex gap-3">
                <a href="#" className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={() => setProjectLightbox(null)} className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">Close</button>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setProjectLightbox({ ...projectLightbox, index: (projectLightbox.index + 1) % projectLightbox.images.length }); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Nav */}
      <nav className="px-6 lg:px-10 py-5 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-50 border-b border-border/50">
        <div className="flex items-center gap-3">
          <img src={logoGamedev} alt="GameDev Logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-display text-lg font-extrabold text-foreground uppercase tracking-widest">GameDev</span>
        </div>
        <div className="flex items-center gap-8">
          {[
            { href: "#about", label: "À propos" },
            { href: "#projets", label: "Projets" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">{link.label}</a>
          ))}
          <a href="#" className="text-xs font-mono font-bold text-primary-foreground bg-primary px-5 py-2 hover:brightness-110 transition-all active:scale-95 uppercase tracking-wider">Contact</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ═══ HERO — 40/60 split ═══ */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center min-h-[75vh]">
          {/* LEFT — Présentation (40%) */}
          <div className="flex flex-col gap-8 animate-fade-up">
            <div>
              <p className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Portfolio — Game Developer</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-none">Prénom Nom</h1>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-[0.2em] mt-3">Développeur Jeux Vidéo — Unreal / Unity</p>
              <p className="text-sm text-muted-foreground/70 mt-3 leading-relaxed max-w-sm">En recherche d'un poste de Game Developer pour créer des expériences immersives et innovantes.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["C++", "C#", "Unreal", "Unity", "OpenGL"].map((t) => (
                <span key={t} className="text-[9px] px-2.5 py-1 border border-border text-muted-foreground font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 items-center flex-wrap">
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
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-full transition-all ${aboutTab === tab.key ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/40 hover:text-primary'}`}
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
            )}

            {/* Expérience */}
            {aboutTab === "experience" && (
              <div className="space-y-5 animate-fade-up">
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
            )}

            {/* Compétences */}
            {aboutTab === "competences" && (
              <div className="animate-fade-up">
                <div className="flex gap-2 mb-6">
                  {(["Front-end", "Back-end", "UX / UI"] as const).map((tab) => (
                    <button key={tab} onClick={() => setCompTab(tab)} className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all ${compTab === tab ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/40 hover:text-primary'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {competences[compTab].map((c, i) => (
                    <div key={i} className="flex flex-col items-center justify-center gap-3 bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
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
                    <button key={tab} onClick={() => setOutilsTab(tab)} className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border transition-all ${outilsTab === tab ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/40 hover:text-primary'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {outils[outilsTab].map((o, i) => (
                    <div key={i} className="bg-card border border-border p-4 text-center hover:border-primary/30 transition-all group">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Terminal className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xs font-bold text-foreground mb-0.5">{o.name}</h3>
                      <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">{o.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Qualités */}
            {aboutTab === "qualites" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-up">
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
            )}

            {/* Formations */}
            {aboutTab === "formations" && (
              <div className="space-y-5 animate-fade-up">
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
            )}

            {/* Certifications */}
            {aboutTab === "certifications" && (
              <div className="space-y-4 animate-fade-up">
                {certifications.map((c, i) => (
                  <div key={i} className="flex items-center gap-5 bg-card border border-border p-5 hover:border-primary/30 transition-all group">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.org}</p>
                    </div>
                    <button onClick={() => setCertImage(c.image)} className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90 shrink-0" title="Voir le certificat">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                    <span className="font-mono text-xs text-primary/60 font-medium">{c.year}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Section>

        {/* ══ PROJETS — Reference card style ══ */}
        <Section id="projets">
          <SectionTitle icon={Gamepad2} label="Projets" />

          {/* Pro projects */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider">
                <Trophy className="h-3.5 w-3.5" /> Projets professionnels
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground">{proPage + 1}/{proMaxPage + 1}</span>
                <button onClick={() => setProPage(Math.max(0, proPage - 1))} disabled={proPage === 0} className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setProPage(Math.min(proMaxPage, proPage + 1))} disabled={proPage >= proMaxPage} className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projetsPro.slice(proPage * PROJECTS_PER_PAGE, proPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE).map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
                  {/* Image with category badge */}
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 inset-x-0 flex justify-center pb-3">
                      <span className="px-6 py-1.5 bg-card/80 backdrop-blur-sm border border-primary/40 text-primary text-[10px] font-mono uppercase tracking-[0.2em] rounded-full">
                        {p.tech.split("·")[0]?.trim()}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
                    <button
                      onClick={() => setProjectLightbox({ images: p.images, index: 0, title: p.title })}
                      className="w-full py-3 border border-primary/40 rounded-lg text-primary text-sm font-mono uppercase tracking-wider hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border text-muted-foreground text-xs font-mono uppercase tracking-wider">
                <Code2 className="h-3.5 w-3.5" /> Projets personnels
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground">{persoPage + 1}/{persoMaxPage + 1}</span>
                <button onClick={() => setPersoPage(Math.max(0, persoPage - 1))} disabled={persoPage === 0} className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setPersoPage(Math.min(persoMaxPage, persoPage + 1))} disabled={persoPage >= persoMaxPage} className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projetsPerso.slice(persoPage * 3, persoPage * 3 + 3).map((p, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 inset-x-0 flex justify-center pb-3">
                      <span className="px-6 py-1.5 bg-card/80 backdrop-blur-sm border border-primary/40 text-primary text-[10px] font-mono uppercase tracking-[0.2em] rounded-full">
                        {p.tech.split("·")[0]?.trim()}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                    <button
                      onClick={() => setProjectLightbox({ images: p.images, index: 0, title: p.title })}
                      className="w-full py-2.5 border border-primary/40 rounded-lg text-primary text-xs font-mono uppercase tracking-wider hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
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
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Une idée de projet, une question ou simplement envie d'échanger&nbsp;? N'hésitez pas à me contacter&nbsp;!
            </p>
            <a
              href="mailto:votre.email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" /> Envoyer un mail
            </a>
          </div>
        </Section>

      </div>

      <footer className="border-t border-border px-6 py-10 text-center relative z-10">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">© 2024 GameDev — Built with passion & C++</p>
      </footer>
    </div>
  );
};

export default Index;
