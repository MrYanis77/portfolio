import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Code2, Gamepad2, Trophy, Star, ChevronRight, Terminal, Layers, Users, Zap, Target, Brain, Heart, Shield, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";

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

function SectionTitle({ icon: Icon, label, accent = false }: { icon: React.ElementType; label: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className={`h-10 w-10 rounded-2xl flex items-center justify-center ${accent ? 'bg-accent/10' : 'bg-primary/10'}`}>
        <Icon className={`h-5 w-5 ${accent ? 'text-accent' : 'text-primary'}`} />
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">{label}</h2>
    </div>
  );
}

/* ── Data ── */
const parcours = [
  { year: "2024", text: "Lead Game Programmer — Studio indépendant", color: "bg-primary" },
  { year: "2023", text: "Gameplay Programmer — AAA Studio", color: "bg-accent" },
  { year: "2021", text: "Junior Engine Programmer — Mobile Gaming", color: "bg-primary" },
  { year: "2020", text: "Stage développement jeu — Startup VR", color: "bg-accent" },
  { year: "2019", text: "Diplôme Ingénieur Informatique — Spé Jeux Vidéo", color: "bg-primary" },
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
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="fixed top-20 -right-32 w-96 h-96 bg-primary/5 blob animate-float pointer-events-none" />
      <div className="fixed bottom-40 -left-24 w-72 h-72 bg-accent/5 blob animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 right-1/4 w-48 h-48 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      {/* Nav */}
      <nav className="border-b border-border/60 px-6 py-4 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-base font-bold text-foreground">GameDev</span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: "#parcours", label: "Parcours" },
            { href: "#projets", label: "Projets" },
            { href: "#competences", label: "Skills" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
          ))}
          <a href="#" className="text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-xl hover:opacity-90 transition-opacity active:scale-95">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <main className="px-6 lg:px-10 py-12 lg:py-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit mb-6">
              <Gamepad2 className="h-3.5 w-3.5" />
              Game Programmer
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
              Créer des mondes,
              <br />
              <span className="gradient-text">une ligne de code</span>
              <br />
              à la fois
            </h1>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
              Game programmer spécialisé en gameplay systems, moteurs physiques et architecture réseau. Passionné par l'optimisation et les systèmes complexes.
            </p>
            <div className="flex flex-wrap gap-2 mt-7">
              {["C++", "C#", "Unreal", "Unity", "OpenGL"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="h-10 w-10 rounded-xl bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all active:scale-95">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 animate-slide-in-right" style={{ animationDelay: "0.15s" }}>
            <div className="flex gap-2">
              {["All", "3D / FPS", "2D / Platformer", "Engine"].map((cat, i) => (
                <button key={cat} className={`text-xs px-4 py-2 rounded-xl font-medium transition-all active:scale-95 ${i === 0 ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"}`}>{cat}</button>
              ))}
            </div>
            <ProjectCarousel />
            <div className="flex gap-3 mt-1">
              {[{ src: thumb1, label: "Gameplay Systems" }, { src: thumb2, label: "Character Tech" }, { src: thumb3, label: "Physics Engine" }].map((t) => (
                <div key={t.label} className="relative group cursor-pointer overflow-hidden rounded-xl border border-border/60 flex-1 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <img src={t.src} alt={t.label} className="w-full h-20 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-card/90 backdrop-blur-sm px-2.5 py-1.5">
                    <span className="font-mono text-[9px] text-muted-foreground">{t.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ════════════════════ SECTIONS ════════════════════ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 space-y-24">

        {/* ── Parcours ── */}
        <Section id="parcours">
          <SectionTitle icon={Layers} label="Mon Parcours" />
          <div className="relative pl-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full" />
            {parcours.map((p, i) => (
              <div key={i} className="relative mb-8 last:mb-0 group">
                <div className={`absolute -left-[21px] top-1.5 h-4 w-4 rounded-full ${p.color} ring-4 ring-background shadow-md group-hover:scale-125 transition-transform`} />
                <div className="bg-card rounded-2xl border border-border/60 p-5 ml-2 hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <span className="font-mono text-xs text-primary font-semibold">{p.year}</span>
                  <p className="text-sm text-foreground mt-1 font-medium">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Expérience Pro ── */}
        <Section id="experience">
          <SectionTitle icon={Briefcase} label="Expérience Professionnelle" accent />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-accent/70 font-medium">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg bg-accent/10 text-accent font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Projets ── */}
        <Section id="projets">
          <SectionTitle icon={Gamepad2} label="Projets" />
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
              <Trophy className="h-3.5 w-3.5" />
              Projets professionnels
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projetsPro.map((p, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all group cursor-pointer">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-5">
              <Code2 className="h-3.5 w-3.5" />
              Projets personnels
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {projetsPerso.map((p, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-all" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <span className="font-mono text-[11px] text-accent/60 font-medium">{p.tech}</span>
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
              <div key={i} className="flex items-start gap-5 bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:shadow-primary/5 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{f.school} — {f.year}</p>
                  <p className="text-sm text-muted-foreground mt-1">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Qualités ── */}
        <Section>
          <SectionTitle icon={Star} label="Qualités" accent />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {qualites.map((q, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border/60 p-6 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/20 transition-all group">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <q.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1.5">{q.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Compétences ── */}
        <Section id="competences">
          <SectionTitle icon={Terminal} label="Compétences" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {competences.map((c, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-foreground font-medium">{c.name}</span>
                  <span className="font-mono text-xs text-primary font-semibold">{c.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
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
              <div key={i} className="flex items-center gap-5 bg-card rounded-2xl border border-border/60 p-5 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all group">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.org}</p>
                </div>
                <span className="font-mono text-xs text-primary/60 font-medium">{c.year}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 px-6 py-8 text-center bg-card/50">
        <p className="text-sm text-muted-foreground">© 2024 GameDev — Built with passion & C++</p>
      </footer>
    </div>
  );
};

export default Index;
