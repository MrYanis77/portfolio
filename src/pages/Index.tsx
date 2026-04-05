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

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10 text-center relative z-10">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">© 2024 GameDev — Built with passion & C++</p>
      </footer>
    </div>
  );
};

export default Index;
