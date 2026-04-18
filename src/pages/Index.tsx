import {
  Github, Linkedin, Mail, Briefcase, GraduationCap, Award, Gamepad2,
  Trophy, Star, ChevronRight, ChevronLeft, Terminal, Layers, Users, Zap, Target,
  Brain, Heart, Shield, ArrowUpRight, ArrowDown, FileDown, ExternalLink, X,
  Wrench, Globe, User, Monitor, Play, Palette, Brush, BookOpen, FileText, Cpu, Code2
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import ThemeToggle from "@/components/ThemeToggle";

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
  { year: "2025", text: "B3 Informatique Parcours Développement | Ynov Campus Val d’Europe Chessy (77700) ", highlight: true },
  { year: "2024", text: "BTS SIO option SLAM | Lycée René Descartes Champs-sur-Marne (77420) ", highlight: true },
  { year: "2022", text: "Bac pro SN option ARED | Lycée louis lumière Chelles (77500)", highlight: true },
];

const experiences = [
  { role: "Développeur Web", company: "ALT RH CONSULTING | Entreprise Conseils en organisation, gestion management Bailly-Romainvilliers , (stage 12 semaines)", period: "2026", desc: "Lors de ce stage, j'ai pris en charge la publication de pages et galeries, la configuration d'extensions fonctionnelles et la rédaction Web stratégique pour améliorer la visibilité des sites.", tags: ["HTML", "CSS", "JavaScript"] },
  { role: "Développeur Web", company: "ASMINFO | Entreprise de maintenance informatique, Roissy-en-Brie, (stages 4 semaines, et 8 semaines)", period: "2023 – 2024", desc: "J'ai assuré la transition technologique vers CodeIgniter 4, conçu des bases de données relationnelles et développé des fonctionnalités extranet complètes (suivi de réparations, gestion de comptes, sécurité). J'ai également optimisé la gestion de fichiers via des macros VBA et renforcé mes acquis en autonomie sur plusieurs langages.", tags: ["HTML", "CSS", "PHP", "codeigniter 4"] },
  { role: "Monteur et cadreur", company: "Made in Chino | Auto-entreprise de marketing digital, Chelles (stage 4 semaines)", period: "2021", desc: "J'ai pris en charge les prises de vues sur le terrain et assuré l'intégralité du montage vidéo au profit d'une structure associative", tags: ["Wondershare Filmora", "canva"] },
];

type MediaItem = { type: "image" | "video"; src: string };

type ProjectData = {
  title: string;
  desc: string;
  tech: string;
  image: string;
  media: MediaItem[];
  github?: string;
  download?: string;
  lien?: string;
  role?: string;
  teamSize?: string;
  timeframe?: string;
  engine?: string;
  introduction?: string;
  sections?: { heading: string; content: string }[];
};

const projetsPro: ProjectData[] = [
  {
    title: "Alt RH Consulting",
    desc: "Création d’une version entièrement repensée du site internet de l'entreprise, en collaboration avec le pôle Marketing, UX/UI et Design. Nouvelle architecture, design modernisé et optimisation SEO pour une meilleure visibilité en ligne.",
    tech: "React - Tailwind CSS - Typescript - Vite",
    image: "/projets/alt-rh/accueil.png",
    media: [
      { type: "image" as const, src: "/projets/alt-rh/accueil.png" },
      { type: "image" as const, src: "/projets/alt-rh/menu.png" },
      { type: "image" as const, src: "/projets/alt-rh/contact.png" },
    ],
    github: "#",
    download: "https://www.alt-rh.com/accueil",
    role: "Développeur Fullstack",
    engine: "React - CSS Tailwind - TypeScript - Vite",
    introduction: "Création d’une version entièrement repensée du site internet de l’entreprise en collaboration avec le pôles Marketing, UX/UI et Design. Pour dépasser les limites techniques de l'ancienne solution WordPress, j'ai migré l'infrastructure vers une stack moderne utilisant React et Tailwind CSS. Cette transition a permis de transformer une plateforme rigide en une application web performante, ultra-rapide et totalement personnalisée, offrant une expérience utilisateur fluide et parfaitement alignée avec les objectifs marketing actuels.",
  },
  {
    title: "Fragmentis",
    desc: "Création du projet mémoriel KH50, un site immersif en React et Three.js intégrant un mur 3D interactif et un système de témoignages sécurisé via Strapi. L'architecture garantit la conformité RGPD et une modération administrateur stricte pour préserver la mémoire des victimes du massacre cambodgien.",
    tech: "React - Tailwind CSS - JavaScript - Three.js - SQL - Node.js",
    image: "/projets/Fragmentis/accueil.png",
    media: [
      { type: "image" as const, src: "/projets/Fragmentis/accueil2.png" },
      { type: "image" as const, src: "/projets/Fragmentis/mur.png" },
      { type: "image" as const, src: "/projets/Fragmentis/profil.png" },
      { type: "image" as const, src: "/projets/Fragmentis/temoignage.png" },
    ],
    github: "#",
    download: "#",
    role: "Développeur Fullstack",
    engine: "React - CSS Tailwind - TypeScript - Vite - Three.js - Strapi",
    introduction: "Création du projet KH50 en collaboration avec l'association Fragmentis Vitae Asia, une plateforme mémorielle innovante dédiée aux victimes du massacre cambodgien de 1975-1979. Le site propose une expérience immersive grâce à un mur interactif et un livre virtuel développés en Three.js et React, permettant de consulter biographies et ressources documentaires. L'architecture repose sur une double base de données MySQL et l'interface Strapi pour distinguer les données publiques des informations sensibles recueillies via un formulaire de témoignage. Ce dispositif garantit une conformité totale au RGPD et une sécurité renforcée, tout en intégrant un workflow de modération administrateur rigoureux où chaque contenu utilisateur est validé manuellement avant toute mise en ligne, assurant ainsi la dignité et la fiabilité historique du site.",
  },
  {
    title: "ASMINFO",
    desc: "Création d'unesolution complète de suivi de réparations en migrant une architecture PHP native vers CodeIgniter 4, tout en automatisant la gestion de données via VBA et SQL.",
    tech: "HTML - CSS - PHP - CodeIgniter 4 - MySQL - VBA",
    image: "/projets/asminfo/asminfo_admingestion.jpg",
    media: [
      { type: "image" as const, src: "/projets/asminfo/asminfo_admingestion.jpg" },
      { type: "image" as const, src: "/projets/asminfo/asminfo_admin.jpg" },
      { type: "image" as const, src: "/projets/asminfo/asminfo_article.jpg" },
      { type: "image" as const, src: "/projets/asminfo/mdp_oublié.jpg" },
    ],
    role: "Développeur Fullstack",
    engine: "CodeIgniter 4 / PHP /HTML / CSS / MySQL / VBA",
    introduction: "Réalisation de petits projets en autodidacte ayant permis de renforcer mes compétences personnelles (PHP, HTML, CSS, Java). Changement d'architecture du site et utilisation du Framework Codeigniter 4 et mise en place d'une base de données avec MySQL. Développement d'outils d'automatisation VBA sous Excel pour la gestion client. Création d'un extranet client (suivi de réparations, gestion de compte) et d'un panel d'administration avec système d'authentification et notifications par email.",
  },
  {
    title: "Projet association",
    desc: "Montage réalisé pour l'association CHU Aliya des 4 semaines de stage chez Made in Chino.",
    tech: "Wondershare Filmora",
    image: "projets/Montage/association.png",
    media: [],
    lien: "https://www.youtube.com/watch?v=eOYqXYriW08",
  },
];

const projetsEcole: ProjectData[] = [
  {
    title: "Mini Blog",
    desc: "Création d’une application React sécurisée avec Context API et authentification JWT. Elle intègre des opérations CRUD via un client HTTP et gère les états de chargement et d'erreur selon des choix techniques argumentés.",
    tech: "React - CSS Tailwind - JSX - Node.js",
    image: "/projets/MiniBlog/accueil.png",
    media: [
      { type: "image" as const, src: "/projets/MiniBlog/article.png" },
      { type: "image" as const, src: "/projets/MiniBlog/blog.png" },
      { type: "image" as const, src: "/projets/MiniBlog/menu.png" },
      { type: "image" as const, src: "/projets/MiniBlog/message.png" },
      { type: "image" as const, src: "/projets/MiniBlog/posts.png" },
    ],
    role: "Développeur Fullstack",
    github: "https://github.com/MrYanis77/Mini-Blog-Manager-",
    engine: "React - CSS Tailwind - HeroUI - TypeScript - Node.js - Vite",
    introduction: "Création d'une plateforme web robuste s'appuyant sur l'architecture React et Context API pour centraliser la logique d'authentification globale. L'application implémente un flux de sécurité complet incluant la gestion des jetons JWT, le verrouillage de routes spécifiques et l'intégration d'un client HTTP pour piloter des opérations CRUD. Le développement met l'accent sur la résilience de l'interface grâce à une gestion précise des états de chargement et d'erreur, tout en s'appuyant sur une veille technologique approfondie pour justify chaque décision structurelle par une argumentation technique écrite et rigoureuse.",
  },
  {
    title: "GSB",
    desc: "Création d’une application de gestion des visiteurs structurée autour de l’architecture MVC et des opérations CRUD.",
    tech: "Eclipse - Java - JavaFX",
    image: "/projets/GSB/gsb_connexion.jpg",
    media: [
      { type: "image" as const, src: "/projets/GSB/gsb_graphique.jpg" },
      { type: "image" as const, src: "/projets/GSB/gsb_tableau.jpg" },
    ],
    role: "Développeur Fullstack",
    engine: "Eclipse / Java / JavaFX",
    introduction: "Création d’une application de gestion des visiteurs en utilisant la méthode MVC (Modèle-Vue-Contrôleur) et le cycle de persistance CRUD. Ce projet vise à moderniser l'accueil d'une organisation en automatisant le suivi des flux de personnes.",
  },
  {
    title: "Taskflow",
    desc: "Création d’une application de gestion de tâches de type Kanban développée avec React, permettant d’organiser visuellement ses priorités par colonnes. Le projet intègre une gestion d’état fluide pour déplacer les tâches, ainsi qu’une persistance des données pour optimiser le suivi de la productivité.",
    tech: "React - CSS Tailwind - HeroUI - TypeScript - Node.js",
    image: "/projets/Taskflow/accueil.png",
    media: [
      { type: "image" as const, src: "/projets/Taskflow/accueil.png" },
      { type: "image" as const, src: "/projets/Taskflow/ajout.png" },
    ],
    github: "#",
    download: "#",
    role: "Développeur Fullstack",
    engine: "React - CSS Tailwind - TypeScript - Vite",
    introduction: "Création d’un tableau Kanban interactif développé sous React, conçu pour offrir une gestion de projet visuelle et intuitive. L'application permet d'organiser le flux de travail à travers des colonnes personnalisables, facilitant la création, le déplacement et le suivi des tâches en temps réel. En s'appuyant sur une architecture modulaire et une gestion d'état centralisée, le projet garantit une interface réactive et une expérience utilisateur fluide pour optimiser l'organisation quotidienne des priorités.",
  },
  {
    title: "DevTracker",
    desc: "Création de DevTracker, une application Next.js 14 avec App Router permettant de consulter des API live, de gérer des notes de veille et de personnaliser l'interface via un thème. L'application intègre un design system cohérent et est déployée sur Scalingo.",
    tech: "React - CSS Tailwind - HeroUI - TypeScript - Node.js - Next.js",
    image: "/projets/DevTracker/accueil.png",
    media: [
      { type: "image" as const, src: "/projets/DevTracker/accueil.png" },
      { type: "image" as const, src: "/projets/DevTracker/notes.png" },
      { type: "image" as const, src: "/projets/DevTracker/trending.png" },
      { type: "image" as const, src: "/projets/DevTracker/parametre.png" },
    ],
    github: "https://github.com/MrYanis77/devtracker",
    download: "#",
    role: "Développeur Fullstack",
    engine: "CodeIgniter 4 / PHP /HTML / CSS / MySQL / VBA",
    introduction: "Création de DevTracker, une application web performante développée avec Next.js 14 et son App Router pour une navigation optimisée entre plusieurs pages. Le projet permet aux utilisateurs de consommer et d'afficher des données en temps réel provenant d'API publiques, tout en offrant des fonctionnalités de gestion de notes de veille personnalisées. L'expérience utilisateur est enrichie par la personnalisation du thème et l'utilisation d'un design system rigoureux pour garantir une cohérence visuelle sur l'ensemble de l'interface. Enfin, l'application est entièrement automatisée pour un déploiement continu sur la plateforme Scalingo, assurant ainsi une mise en production fiable et évolutive.",
  },

  {
    title: "Projet Terminal",
    desc: "Vidéo de présentation du lycée louis lumière réalisée pour la terminale SN option ARED dans le cadre d'un projet de fin d'année.",
    tech: "Wondershare Filmora",
    image: "projets/Montage/LouisLumière.png",
    media: [],
    lien: "https://www.youtube.com/watch?v=pZpwuHq4xfc",
  },
];

const projetsPerso: ProjectData[] = [
  {
    title: "Parkours Warriors",
    desc: "Jeu de parcours et de plateforme 3D.",
    tech: "Unity - C#",
    image: "/Jeux/parcours/plateau.PNG",
    media: [
      { type: "video", src: "/Jeux/parcours_jeux.mp4" },
      { type: "video", src: "/Jeux/parcours_test.mp4" },
      { type: "image", src: "/Jeux/parcours/plateau.PNG" },
      { type: "image", src: "/Jeux/parcours/test.PNG" },
      { type: "image", src: "/Jeux/parcours/scene.PNG" },
      { type: "image", src: "/Jeux/parcours/assets1.PNG" },
      { type: "image", src: "/Jeux/parcours/assets2.PNG" },
    ],
    role: "Développeur",
    engine: "Unity 6",
    introduction: "Développement d'un jeu de plateforme 3D avec Unity 6, incluant la gestion de la physique et des collisions entre le joueur et les obstacles. J'ai programmé un système de chronomètre, de checkpoints , de mort et de réapparition. J'ai également réalisé la création du terrain, l'intégration des prefabs et des animations."
  },
  {
    title: "Projet Pirate",
    desc: "Jeu d'action et d'aventure sur le thème des pirates.",
    tech: "Unity - C#",
    image: "/Jeux/pirates/ile3.PNG",
    media: [
      { type: "video", src: "/Jeux/pirate_jeux.mp4" },
      { type: "video", src: "/Jeux/pirate_scene.mp4" },
      { type: "image", src: "/Jeux/pirates/ile3.PNG" },
      { type: "image", src: "/Jeux/pirates/ile2.PNG" },
      { type: "image", src: "/Jeux/pirates/ile.PNG" },
      { type: "image", src: "/Jeux/pirates/inspector.PNG" },
      { type: "image", src: "/Jeux/pirates/project.PNG" },
      { type: "image", src: "/Jeux/pirates/scene.PNG" },
    ],
    role: "Développeur",
    engine: "Unity 6",
    introduction: "Développement d'un jeu d'action-aventure sur le thème de la piraterie avec Unity 6, constituant une première exploration approfondie du moteur. J'ai conçu un environnement composé de plusieurs îles via l'intégration de prefabs et le travail du terrain. Le projet inclut le développement d'un bateau comme personnage joueur, avec une gestion précise des collisions, des mouvements synchronisés aux animations, ainsi qu'un système d'attaque. L'expérience est complétée par l'implémentation d'une caméra dynamique et l'ajout d'une ambiance sonore."
  },
  {
    title: "Wild Road Dodge",
    desc: "Jeu d'arcade où il faut esquiver les obstacles sur la route.",
    tech: "Unity - C#",
    image: "/Jeux/wildroadrage/plateau.PNG",
    media: [
      { type: "video", src: "/Jeux/wildroadodge.mp4" },
      { type: "image", src: "/Jeux/wildroadrage/plateau.PNG" },
      { type: "image", src: "/Jeux/wildroadrage/project.PNG" },
      { type: "image", src: "/Jeux/wildroadrage/inspector.PNG" },
      { type: "image", src: "/Jeux/wildroadrage/assets.PNG" },
    ],
    role: "Développeur",
    engine: "Unity 6",
    introduction: "En cours de développement. C'est un jeu d'arcade inspiré par le jeu crossy road mettant l'action sur les réflexes et l'esquive d'obstacles à haute vitesse."
  }

];

// J'ai gardé tes liens PDF
const projetsDessin: string[] = [
  "/dessin/dessin1.jpg",
  "/dessin/dessin2.jpg",
  "/dessin/dessin3.jpg",
  "/dessin/dessin4.jpg",
  "/dessin/dessin5.jpg",
];

const formations = [
  { title: "Bachelor 3 Informatique", school: "Ynov Campus Val d’Europe", year: "2025 -> 2026", detail: "Spécialisation moteur et gameplay" },
  { title: "BTS SIO option SLAM", school: "Lycée rené descartes Champs-sur-Marne", year: "2022 -> 2024", detail: "Algorithmique, structures de données, maths appliquées" },
  { title: "Bac pro SN option ARED", school: "Lycée louis lumière Chelles", year: "2019 -> 2022", detail: "Algorithmique, structures de données, maths appliquées" }
];

const qualites = [
  { icon: Zap, label: "Sérieux", desc: "Ma méthode de travail repose sur le sérieux, l'organisation et le respect des engagements." },
  { icon: Users, label: "Esprit d'équipe", desc: "J'apprécie le travail collectif et je privilégie toujours l'entraide pour atteindre des objectifs communs." },
  { icon: Brush, label: "Créativité", desc: "Je suis constamment à la recherche d'innovations et de nouveautés." }
];

const competences = {
  "Front-end": [
    { name: "HTML", logo: "../logo/html.png" },
    { name: "CSS", logo: "../logo/css.png" },
    { name: "JavaScript", logo: "../logo/js.png" },
    { name: "TypeScript", logo: "../logo/typescript.png" },
  ],
  "Back-end": [
    { name: "Java", logo: "../logo/java.png" },
    { name: "C#", logo: "../logo/c-sharp.png" },
    { name: "PHP", logo: "../logo/php.png" },
    { name: "SQL", logo: "../logo/sql.png" },
    { name: "JavaScript", logo: "../logo/js.png" },
    { name: "TypeScript", logo: "../logo/typescript.png" },
  ],
  "POO": [
    { name: "Java", logo: "../logo/java.png" },
    { name: "C#", logo: "../logo/c-sharp.png" },
    { name: "Python", logo: "../logo/python.png" },
    { name: "JavaScript", logo: "../logo/js.png" },
    { name: "TypeScript", logo: "../logo/typescript.png" },
  ],
  "frameworks / Librairies": [
    { name: "React", logo: "../logo/react.png" },
    { name: "Next.js", logo: "../logo/nextjs.png" },
    { name: "Vite", logo: "../logo/vite.png" },
    { name: "Codeigniter", logo: "../logo/codeigniter.png" },
    { name: "Tailwind", logo: "../logo/tailwind.png" },
    { name: "Three.js", logo: "../logo/Three.js.png" },
  ],
  "Systèmes": [
    { name: "Windows", logo: "../logo/windows.png" },
    { name: "Linux (Ubuntu, Debian)", logo: "../logo/linux.png" }
  ]
};

const outils = {
  "Développement": [
    { name: "Unity", category: "Moteur", icon: "../icons/unity.png" },
    { name: "Visual Studio Code", category: "IDE", icon: "../icons/vscode.png" },
    { name: "Eclipse", category: "IDE", icon: "../icons/eclipse.png" },
    { name: "GitHub", category: "Versioning", icon: "../icons/github.png" },
    { name: "VirtualBox", category: "Virtualisation", icon: "../icons/virtualbox.png" },
  ],
  "Design": [
    { name: "Figma", category: "Prototypage", icon: "../icons/figma.png" },
    { name: "Canva", category: "Graphisme", icon: "../icons/canva.png" },
  ],
  "Data & Serveurs": [
    { name: "Xampp", category: "Serveur", icon: "../icons/xampp.png" },
    { name: "Mysql", category: "SGBD", icon: "../icons/mysql-database.png" },
    { name: "Node.js", category: "Environnement", icon: "../icons/nodejs.png" },
    { name: "phpmyadmin", category: "SGBD", icon: "../icons/phpmyadmin.png" },
  ]
};

const certifications = [
  { title: "Programmez en orienté objet en PHP", org: "OpenClassrooms", year: "2023", image: "/certif/certif_php.jpg" },
  { title: "Créez votre site web avec HTML5 et CSS3", org: "OpenClassrooms", year: "2022", image: "/certif/certif_htmlcss.jpg" },
  { title: "Requêtez une base de données avec SQL", org: "OpenClassrooms", year: "2022", image: "/certif/certif_sql.jpg" },
  { title: "Concevez votre site web avec PHP et MySQL", org: "OpenClassrooms", year: "2023", image: "/certif/certif_phpsql.jpg" },
  { title: "Apprenez à programmer en Java", org: "OpenClassrooms", year: "2022", image: "/certif/certif_java.JPG" },
  { title: "Apprenez à programmer avec JavaScript", org: "OpenClassrooms", year: "2024", image: "/certif/certif_js.JPG" },
  { title: "Créez des pages web dynamiques avec JavaScript", org: "OpenClassrooms", year: "2024", image: "/certif/certif_jsweb.JPG" },
  { title: "Débutez avec React", org: "OpenClassrooms", year: "2025", image: "/certif/certif_react.JPG" }
];

const PROJECTS_PER_PAGE = 2;

const aboutTabs = [
  { key: "parcours", label: "Parcours", icon: GraduationCap },
  { key: "experience", label: "Expérience", icon: Briefcase },
  { key: "competences", label: "Compétences", icon: Terminal },
  { key: "outils", label: "Outils", icon: Wrench },
  { key: "qualites", label: "Qualités", icon: Star },
  { key: "formations", label: "Formations", icon: Layers },
  { key: "certifications", label: "Certifications", icon: Award },
] as const;

type AboutTab = typeof aboutTabs[number]["key"];

const Index = () => {
  const [certImage, setCertImage] = useState<string | null>(null);
  const [projectLightbox, setProjectLightbox] = useState<{ project: ProjectData; mediaIndex: number } | null>(null);

  const [proPage, setProPage] = useState(0);
  const [ecolePage, setEcolePage] = useState(0);
  const [persoPage, setPersoPage] = useState(0);

  const [outilsTab, setOutilsTab] = useState<keyof typeof outils>("Développement");
  const [compTab, setCompTab] = useState<keyof typeof competences>("Front-end");
  const [aboutTab, setAboutTab] = useState<AboutTab>("parcours");

  const proMaxPage = Math.max(0, Math.ceil(projetsPro.length / PROJECTS_PER_PAGE) - 1);
  const ecoleMaxPage = Math.max(0, Math.ceil(projetsEcole.length / 3) - 1);
  const persoMaxPage = Math.max(0, Math.ceil(projetsPerso.length / 3) - 1);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative selection:bg-primary/20">

      {/* Certification & PDF lightbox */}
      {certImage && (
        <div className="fixed inset-0 z-[110] bg-background/80 backdrop-blur-md flex items-center justify-center p-6" onClick={() => setCertImage(null)}>
          <div className="relative max-w-4xl w-full h-[85vh] animate-scale-in flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setCertImage(null)} className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors z-10">
              <X className="h-4 w-4" />
            </button>

            {/* Si c'est un PDF, on l'affiche dans un iframe, sinon on l'affiche comme une image normale */}
            {certImage.toLowerCase().endsWith('.pdf') ? (
              <iframe src={certImage} className="w-full h-full rounded-xl border border-primary/20 glow-primary bg-white" title="Document PDF" />
            ) : (
              <img src={certImage} alt="Aperçu" className="max-w-full max-h-full object-contain rounded-xl border border-primary/20 glow-primary" />
            )}
          </div>
        </div>
      )}

      {/* NEW Project lightbox */}
      {projectLightbox && (() => {
        const proj = projectLightbox.project;
        const currentMedia = proj.media[projectLightbox.mediaIndex];
        const total = proj.media.length;

        return (
          <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md overflow-y-auto" onClick={() => setProjectLightbox(null)}>
            <div className="max-w-3xl mx-auto px-4 sm:px-8 py-6" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setProjectLightbox(null)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4 font-mono">
                <ChevronLeft className="h-4 w-4" /> Retour
              </button>

              {/* Media Carousel */}
              {currentMedia && (
                <div className="relative rounded-xl overflow-hidden border border-border mb-6">
                  <div className="relative aspect-video">
                    {currentMedia.type === "video" ? (
                      <video key={projectLightbox.mediaIndex} src={currentMedia.src} controls autoPlay playsInline className="w-full h-full object-cover" />
                    ) : (
                      <img
                        src={currentMedia.src}
                        alt={proj.title}
                        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setCertImage(currentMedia.src)}
                        title="Cliquez pour agrandir"
                      />
                    )}
                  </div>
                  {total > 1 && (
                    <>
                      <button onClick={() => setProjectLightbox({ ...projectLightbox, mediaIndex: (projectLightbox.mediaIndex - 1 + total) % total })} className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button onClick={() => setProjectLightbox({ ...projectLightbox, mediaIndex: (projectLightbox.mediaIndex + 1) % total })} className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-lg bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h2 className="font-display text-2xl font-bold text-white">{proj.title}</h2>
                  </div>
                </div>
              )}

              {/* About + Project Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">A Propos</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{proj.desc}</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">Informations</h3>
                  <div className="space-y-2.5">
                    {proj.role && (
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">Rôle :</span>
                        <span className="text-foreground font-medium">{proj.role}</span>
                      </div>
                    )}
                    {proj.teamSize && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">Équipe :</span>
                        <span className="text-foreground font-medium">{proj.teamSize}</span>
                      </div>
                    )}
                    {proj.timeframe && (
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">Durée :</span>
                        <span className="text-foreground font-medium">{proj.timeframe}</span>
                      </div>
                    )}
                    {proj.engine && (
                      <div className="flex items-center gap-2 text-sm">
                        <Cpu className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">Outils :</span>
                        <span className="text-foreground font-medium">{proj.engine}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Introduction */}
              {proj.introduction && (
                <div className="mb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Présentation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{proj.introduction}</p>
                </div>
              )}

              {/* Detail sections */}
              {proj.sections && proj.sections.map((s, i) => (
                <div key={i} className="mb-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{s.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              ))}

              {/* Media gallery at bottom */}
              {total > 1 && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {proj.media.map((m, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-border cursor-pointer hover:border-primary/40 transition-all"
                      onClick={() => setProjectLightbox({ ...projectLightbox, mediaIndex: i })}
                    >
                      {m.type === "video" ? (
                        <video src={m.src} className="w-full aspect-video object-cover" muted />
                      ) : (
                        <img
                          src={m.src}
                          alt={`${proj.title} ${i + 1}`}
                          className="w-full aspect-video object-cover hover:opacity-90 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCertImage(m.src);
                          }}
                          title="Cliquez pour agrandir"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Links */}
              {((proj.github && proj.github !== "#") || (proj.download && proj.download !== "#") || (proj.lien && proj.lien !== "#")) && (
                <div className="flex flex-wrap gap-3 mb-10">
                  {proj.github && proj.github !== "#" && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  {proj.download && proj.download !== "#" && (
                    <a href={proj.download} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                      <FileDown className="h-4 w-4" /> Télécharger
                    </a>
                  )}
                  {proj.lien && proj.lien !== "#" && (
                    <a href={proj.lien} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                      <Globe className="h-4 w-4" /> Voir en ligne
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* ═══ NAV ═══ */}
      <nav className="px-6 lg:px-10 py-4 flex items-center justify-between sticky top-0 glass z-50 border-b border-primary/10">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="nav-logo" />
          <h2 className="font-display text-xl font-bold text-foreground">Portfolio Yanis Laldji</h2>
        </div>
        <div className="flex items-center gap-6">
          {[
            { href: "#about", label: "À propos" },
            { href: "#projets", label: "Projets" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-mono text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="mailto:yanislaldjipro@gmail.com" className="text-xs font-mono font-bold text-accent-foreground bg-accent px-5 py-2 rounded-lg hover:brightness-110 transition-all active:scale-95 uppercase tracking-wider glow-accent">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center min-h-[75vh]">
          <div className="flex flex-col gap-8 animate-fade-up relative z-20">
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                <span className="text-foreground">Yanis</span>{" "}
                <span className="text-foreground">Laldji</span>
              </h1>
              <p className="font-mono text-[11px] md:text-xs text-accent uppercase tracking-[0.15em] mt-4 font-bold">
                Bachelor 3 Informatique Parcours Développement
              </p>
              <p className="text-sm text-foreground/80 mt-3 leading-relaxed max-w-sm">
                Étudiant en Bachelor informatique (parcours développement), je souhaite intégrer un Master pour apprendre à maîtriser les technologies complexes propres à la création de jeux vidéo.
              </p>
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              {[
                { Icon: Github, label: "GitHub", url: "https://github.com/MrYanis77/" },
                { Icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/ton-nom" },
                { Icon: Mail, label: "Email", url: "mailto:yanislaldjipro@gmail.com" },
              ].map(({ Icon, label, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all active:scale-90">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              <a href="../public/pdf/CV Master Yanis Laldji.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all active:scale-95 glow-accent">
                <FileDown className="h-3.5 w-3.5" /> CV PDF
              </a>
            </div>

            <a href="#about" className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:brightness-110 transition-colors uppercase tracking-wider group mt-2">
              <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" /> Défilez pour explorer
            </a>
          </div>

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

          <div className="flex flex-wrap gap-2 mb-8">
            {aboutTabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setAboutTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg border transition-all ${aboutTab === tab.key
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

          <div className="min-h-[300px]">
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

            {aboutTab === "competences" && (
              <div className="animate-fade-up">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {(Object.keys(competences) as Array<keyof typeof competences>).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setCompTab(tab)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-lg transition-all ${compTab === tab ? 'bg-accent text-accent-foreground border-accent glow-accent' : 'border-border bg-card/50 text-muted-foreground hover:border-accent/40 hover:text-accent'}`}
                    >
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

            {aboutTab === "outils" && (
              <div className="animate-fade-up">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {(Object.keys(outils) as Array<keyof typeof outils>).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setOutilsTab(tab)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border rounded-lg transition-all ${outilsTab === tab ? 'bg-accent text-accent-foreground border-accent glow-accent' : 'border-border bg-card/50 text-muted-foreground hover:border-accent/40 hover:text-accent'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {outils[outilsTab].map((o, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-all group card-hover">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        {o.icon ? (
                          <img src={o.icon} alt={o.name} className="h-7 w-7 object-contain" />
                        ) : (
                          <Terminal className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <h3 className="text-xs font-bold text-foreground mb-0.5">{o.name}</h3>
                      {o.category && <span className="font-mono text-[9px] text-accent uppercase tracking-wider">{o.category}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>

                    {p.lien ? (
                      <a
                        href={p.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 border border-primary/30 bg-primary/5 rounded-lg text-primary text-sm font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                      >
                        Voir en Détails <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setProjectLightbox({ project: p, mediaIndex: 0 })}
                        className="w-full py-3 border border-primary/30 bg-primary/5 rounded-lg text-primary text-sm font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                      >
                        Voir en Détails <ArrowUpRight className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projets d'étude */}
          {projetsEcole.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider rounded-lg">
                  <BookOpen className="h-3.5 w-3.5" /> Projets d'étude
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground">{ecolePage + 1}/{ecoleMaxPage + 1}</span>
                  <button onClick={() => setEcolePage(Math.max(0, ecolePage - 1))} disabled={ecolePage === 0} className="h-8 w-8 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button onClick={() => setEcolePage(Math.min(ecoleMaxPage, ecolePage + 1))} disabled={ecolePage >= ecoleMaxPage} className="h-8 w-8 rounded-lg border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-90">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projetsEcole.slice(ecolePage * 3, ecolePage * 3 + 3).map((p, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all group flex flex-col card-hover">
                    <div className="relative aspect-video overflow-hidden">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-display font-bold text-foreground mb-2">{p.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                      {p.lien ? (
                        <a
                          href={p.lien}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 border border-primary/30 bg-primary/5 rounded-lg text-primary text-xs font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                        >
                          Voir en Détails <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setProjectLightbox({ project: p, mediaIndex: 0 })}
                          className="w-full py-2.5 border border-primary/30 bg-primary/5 rounded-lg text-primary text-xs font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                        >
                          Voir en Détails <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal projects */}
          {projetsPerso.length > 0 && (
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
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-display font-bold text-foreground mb-2">{p.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                      <button
                        onClick={() => setProjectLightbox({ project: p, mediaIndex: 0 })}
                        className="w-full py-2.5 border border-primary/30 bg-primary/5 rounded-lg text-primary text-xs font-mono uppercase tracking-wider hover:bg-primary/15 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                      >
                        Voir en Détails <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dessins */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider rounded-lg">
                <Palette className="h-3.5 w-3.5" /> Mes Dessins
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {projetsDessin.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all group cursor-pointer bg-muted/50 flex items-center justify-center"
                  onClick={() => setCertImage(src)}
                >
                  {/* Vérification si c'est un PDF pour afficher une icône au lieu d'une image cassée */}
                  {src.toLowerCase().endsWith('.pdf') ? (
                    <div className="flex flex-col items-center gap-3 text-muted-foreground group-hover:text-primary transition-colors">
                      <FileText className="h-10 w-10" />
                      <span className="text-xs font-mono uppercase tracking-widest">Voir PDF</span>
                    </div>
                  ) : (
                    <img
                      src={src}
                      alt={`Dessin ${i + 1}`}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-10 text-center relative z-10">
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          © 2026 Portfolio Yanis Laldji
        </p>
      </footer>
    </div>
  );
};

export default Index;