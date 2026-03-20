import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, Terminal, Layers, Users, Zap, Target, Brain, Heart, Shield, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";
import thumb5 from "@/assets/thumb-5.jpg";

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
  { title: "Echoes of Valheim", desc: "Action-RPG open world — systèmes de loot, inventaire, quêtes dynamiques.", tech: "Unreal 5 · C++" },
  { title: "Shadow Protocol", desc: "FPS tactique multijoueur — netcode, hit detection, replication.", tech: "Unreal 5 · C++ · Steam SDK" },
];

const projetsPerso = [
  { title: "Pixel Physics", desc: "Moteur physique 2D from scratch avec détection de collision SAT.", tech: "C++ · SDL2" },
  { title: "Dungeon Generator", desc: "Génération procédurale de donjons avec BSP et wave function collapse.", tech: "C# · Unity" },
  { title: "Shader Lab", desc: "Collection de shaders créatifs : eau, feu volumétrique, cel-shading.", tech: "GLSL · OpenGL" },
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
      {/* Decorative circles - collage style */}
      <div className="fixed bottom-8 left-8 w-20 h-20 rounded-full bg-primary/10 pointer-events-none" />
      <div className="fixed bottom-8 left-24 w-16 h-16 rounded-full bg-primary/5 pointer-events-none" />
      <div className="fixed top-1/3 right-12 w-24 h-24 rounded-full border border-border pointer-events-none" />

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
        </div>
      </nav>

      {/* Hero */}
      <main className="px-6 lg:px-10 py-16 lg:py-24 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left — Intro */}
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 text-primary text-xs font-mono w-fit mb-8 uppercase tracking-wider">
              <Gamepad2 className="h-3.5 w-3.5" />
              Game Programmer
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-foreground leading-[0.95] tracking-tight uppercase">
              Créer
              <br />
              des
              <br />
              <span className="gradient-text">mondes</span>
            </h1>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm font-mono">
              Game programmer spécialisé en gameplay systems, moteurs physiques et architecture réseau. Passionné par l'optimisation et les systèmes complexes.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {["C++", "C#", "Unreal", "Unity", "OpenGL"].map((t) => (
                <span key={t} className="text-[10px] px-3 py-1.5 border border-border text-muted-foreground font-mono uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all active:scale-90">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Carousel + collage thumbnails */}
          <div className="flex flex-col gap-6 animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
            <ProjectCarousel />
            {/* Collage-style thumbnails with torn edges */}
            <div className="flex gap-4 mt-2">
              {[
                { src: thumb1, label: "Gameplay Systems", rotate: "-2deg" },
                { src: thumb2, label: "Character Tech", rotate: "1deg" },
                { src: thumb3, label: "Physics Engine", rotate: "-1deg" },
                { src: thumb4, label: "3D Modeling", rotate: "2deg" },
                { src: thumb5, label: "VFX Particles", rotate: "-1.5deg" },
              ].map((t) => (
                <div key={t.label} className="relative group cursor-pointer flex-1 collage-frame" style={{ transform: `rotate(${t.rotate})` }}>
                  <div className="overflow-hidden torn-edge">
                    <img src={t.src} alt={t.label} className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div className="mt-2">
                    <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">{t.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

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
                <div key={i} className="bg-card border border-border p-6 hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <span className="font-mono text-xs text-primary/70 font-medium">{p.tech}</span>
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
                <div key={i} className="bg-card border border-border p-6 hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-all" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <span className="font-mono text-[11px] text-primary/50 font-medium">{p.tech}</span>
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
