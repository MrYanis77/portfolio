import React, { useState } from "react";
import { 
  Card, CardHeader, CardBody, CardFooter,Chip,
  Progress,  Divider, Button, ButtonGroup
} from "@heroui/react";

export default function ParcoursPage() {
  // État pour gérer l'affichage du contenu par année chez ASMINFO
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      
      {/* --- SECTION 1: HEADER & INTRO --- */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic">
            Mon <span className="text-primary">Parcours</span>
          </h1>
          <p className="text-xl text-default-500 max-w-2xl mx-auto font-medium">
            De la maintenance informatique au développement d'applications web et au game design.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: FORMATION --- */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-widest">Formation</h2>
          <Divider className="flex-1" />
        </div>

        <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-sm" />
            <h4 className="text-2xl font-bold leading-tight italic">Bachelor Informatique parcours développement</h4>
            <p className="text-primary font-mono font-bold">2025 - 2026</p>
            <p className="text-default-500 italic mb-3">Ynov Campus Val d'Europe Chessy</p>
            <p className="text-default-600 max-w-3xl">
              Approfondissement des compétences en développement web, conception d'applications mobiles et fondamentaux de la cybersécurité.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-default-300 border-4 border-background" />
            <h4 className="text-2xl font-bold leading-tight italic">BTS SIO Option SLAM</h4>
            <p className="text-primary font-mono font-bold">2022 - 2024</p>
            <p className="text-default-500 italic mb-3">Lycée René Descartes, Champs-sur-Marne</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-default-300 border-4 border-background" />
            <h4 className="text-2xl font-bold leading-tight italic">BAC PRO SN Option ARED</h4>
            <p className="text-primary font-mono font-bold">2019 - 2022</p>
            <p className="text-default-500 italic mb-3">Lycée Louis Lumière, Chelles</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: EXPÉRIENCE PROFESSIONNELLE --- */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-widest">Expérience Pro</h2>
          <Divider className="flex-1" />
        </div>

        <div className="space-y-12">
          
          {/* ALT RH CONSULTING (Placé en premier - 2026) */}
          <div className="group border-b border-divider pb-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h4 className="text-2xl font-bold group-hover:text-primary transition-colors italic">Intégrateur Web</h4>
              <span className="text-primary font-mono font-bold">2026</span>
            </div>
            <p className="text-default-500 font-bold mb-4 uppercase text-sm tracking-wide">ALT RH CONSULTING — Bailly-Romainvilliers</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-default-600">
              <li className="flex gap-2 text-sm"><span className="text-primary">●</span> <strong>Intégration de contenus :</strong> Articles, pages et galeries via CMS.</li>
              <li className="flex gap-2 text-sm"><span className="text-primary">●</span> <strong>Gestion des extensions :</strong> Sélection et configuration de plugins (Sécurité, SEO).</li>
              <li className="flex gap-2 text-sm"><span className="text-primary">●</span> <strong>Rédaction Web :</strong> Optimisation sémantique et référencement (SEO).</li>
              <li className="flex gap-2 text-sm"><span className="text-primary">●</span> <strong>Charte graphique :</strong> Respect strict des identités visuelles client.</li>
            </ul>
          </div>

          {/* ASMINFO avec Interaction 2023/2024 */}
          <div className="group border-b border-divider pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors italic">Développeur Web (Stagiaire)</h4>
                <p className="text-default-500 font-bold uppercase text-sm tracking-wide">ASMINFO — Roissy-en-Brie</p>
              </div>
              
              <ButtonGroup variant="flat" radius="full" size="sm">
                <Button 
                  onPress={() => setSelectedYear("2023")}
                  className={selectedYear === "2023" ? "bg-primary text-white font-bold" : "font-bold text-default-400"}
                >
                  2023
                </Button>
                <Button 
                  onPress={() => setSelectedYear("2024")}
                  className={selectedYear === "2024" ? "bg-primary text-white font-bold" : "font-bold text-default-400"}
                >
                  2024
                </Button>
              </ButtonGroup>
            </div>

            <div className="transition-all duration-300 min-h-[120px]">
              {selectedYear === "2024" ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-default-600">
                  <li className="flex gap-2 text-sm"><span className="text-primary">●</span> Migration d'architecture vers Codeigniter 4 (PHP).</li>
                  <li className="flex gap-2 text-sm"><span className="text-primary">●</span> Création d'un extranet client pour le suivi temps réel.</li>
                  <li className="flex gap-2 text-sm"><span className="text-primary">●</span> Automatisation de gestion via VBA Excel.</li>
                  <li className="flex gap-2 text-sm"><span className="text-primary">●</span> Interface d'administration et gestion de base de données.</li>
                  <li className="flex gap-2 text-sm"><span className="text-primary">●</span> Mise en place de systèmes de sécurité (Auth, Reset PWD).</li>
                </ul>
              ) : (
                <p className="text-default-600 italic text-sm leading-relaxed max-w-3xl">
                  Réalisation de projets en autodidacte pour renforcer mes fondamentaux en PHP, HTML, CSS et Java, appliqués au contexte d'entreprise.
                </p>
              )}
            </div>
          </div>

          {/* MONTEUR - Nouveau Style Pavé */}
          <div className="group border-b border-divider pb-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h4 className="text-2xl font-bold group-hover:text-primary transition-colors italic uppercase tracking-tighter">Monteur Vidéo (Stagiaire)</h4>
              <span className="text-primary font-mono font-bold">2021</span>
            </div>
            <p className="text-default-500 font-bold mb-4 uppercase text-sm tracking-wide">MADE IN CHINO — Chelles</p>
            <p className="text-default-600 text-sm leading-relaxed text-justify">
              Au sein de cette structure de production, j'ai activement participé à la chaîne de création audiovisuelle en assurant le cadrage technique lors de divers tournages en extérieur et en studio. Ma mission s'est étendue à la post-production où j'ai réalisé le montage professionnel de contenus vidéo, en veillant à la cohérence narrative, au rythme du découpage et à l'intégration des éléments graphiques pour répondre aux attentes de qualité des clients.
            </p>
          </div>

          {/* MAINTENANCE - Nouveau Style Pavé */}
          <div className="group border-b border-divider pb-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h4 className="text-2xl font-bold group-hover:text-primary transition-colors italic uppercase tracking-tighter">Technicien de Maintenance</h4>
              <span className="text-primary font-mono font-bold">2020</span>
            </div>
            <p className="text-default-500 font-bold mb-4 uppercase text-sm tracking-wide">WIMOTIC — Paris 12ème</p>
            <p className="text-default-600 text-sm leading-relaxed text-justify">
              Cette expérience m'a permis de maîtriser les aspects fondamentaux de l'infrastructure informatique à travers le montage hardware complet de stations de travail performantes. J'ai été responsable du diagnostic technique approfondi pour identifier et résoudre des pannes matérielles et logicielles complexes, tout en assurant l'installation et la configuration optimale des systèmes d'exploitation pour garantir la stabilité et la sécurité du parc informatique.
            </p>
          </div>
        </div>
      </section>

      
{/* --- SECTION 4: MES QUALITÉS (TypeScript + HeroUI) --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Mes <span className="text-primary">Qualités</span>
            </h2>
            <Divider className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Qualité: Curiosité */}
            <Card className="p-8 border-none bg-content2/40 shadow-none hover:bg-content2/70 transition-all duration-300 group">
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:scale-110 transition-transform">
                  <img 
                    src="/assets/img/confus.png" 
                    alt="Curiosité" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">Curiosité</h4>
              </CardHeader>
              <CardBody className="text-center px-4">
                <p className="text-default-500 leading-relaxed italic text-sm">
                  J'apprécie explorer de nouveaux domaines qui enrichissent mes compétences.
                </p>
              </CardBody>
            </Card>

            {/* Qualité: Autonomie */}
            <Card className="p-8 border-none bg-content2/40 shadow-none hover:bg-content2/70 transition-all duration-300 group">
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-orange-500/10 group-hover:scale-110 transition-transform">
                  <img 
                    src="/assets/img/travail-autonome.png" 
                    alt="Autonomie" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">Autonomie</h4>
              </CardHeader>
              <CardBody className="text-center px-4">
                <p className="text-default-500 leading-relaxed italic text-sm">
                  Je suis attaché à l'autonomie, car je prends des décisions de manière indépendante pour atteindre mes objectifs avec efficacité.
                </p>
              </CardBody>
            </Card>

            {/* Qualité: Créativité */}
            <Card className="p-8 border-none bg-content2/40 shadow-none hover:bg-content2/70 transition-all duration-300 group">
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-pink-500/10 group-hover:scale-110 transition-transform">
                  <img 
                    src="/assets/img/la-creativite.png" 
                    alt="Créativité" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h4 className="text-2xl font-black uppercase italic tracking-tighter">Créativité</h4>
              </CardHeader>
              <CardBody className="text-center px-4">
                <p className="text-default-500 leading-relaxed italic text-sm">
                  Je suis constamment à la recherche d'innovations et de nouveautés.
                </p>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>
   {/* --- SECTION 4: MES COMPÉTENCES --- */}
      <section className="py-20 px-6 bg-content2/30">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Mes <span className="text-primary">Compétences</span>
            </h2>
            <Divider className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            
            {/* --- COLONNE GAUCHE --- */}
            <div className="space-y-10">
              
              {/* Front-end */}
              <div className="space-y-6">
                <h3 className="text-xl font-black uppercase italic text-primary tracking-tight">Front-end</h3>
                
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">HTML</span><span className="text-xs font-black italic text-primary">80%</span></div>
                  <Progress value={80} color="primary" size="sm" radius="none" classNames={{indicator: "bg-gradient-to-r from-primary/50 to-primary"}} />
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">CSS</span><span className="text-xs font-black italic text-primary">70%</span></div>
                  <Progress value={70} color="primary" size="sm" radius="none" classNames={{indicator: "bg-gradient-to-r from-primary/50 to-primary"}} />
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">Javascript</span><span className="text-xs font-black italic text-primary">60%</span></div>
                  <Progress value={60} color="primary" size="sm" radius="none" classNames={{indicator: "bg-gradient-to-r from-primary/50 to-primary"}} />
                </div>
              </div>

              {/* Base de donnée */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-black uppercase italic text-primary tracking-tight">Base de donnée</h3>
                
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">MySQL</span><span className="text-xs font-black italic text-primary">80%</span></div>
                  <Progress value={80} color="primary" size="sm" radius="none" />
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">SQL</span><span className="text-xs font-black italic text-primary">80%</span></div>
                  <Progress value={80} color="primary" size="sm" radius="none" />
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">PostgreSQL</span><span className="text-xs font-black italic text-primary">60%</span></div>
                  <Progress value={60} color="primary" size="sm" radius="none" />
                </div>
              </div>

              {/* Framework/librairie */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-black uppercase italic text-primary tracking-tight">Framework / Librairie</h3>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">CodeIgniter 4</span><span className="text-xs font-black italic text-primary">80%</span></div>
                  <Progress value={80} color="primary" size="sm" radius="none" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">Bootstrap</span><span className="text-xs font-black italic text-primary">70%</span></div>
                  <Progress value={70} color="primary" size="sm" radius="none" />
                </div>
              </div>
            </div>

            {/* --- COLONNE DROITE --- */}
            <div className="space-y-10">
              
              {/* Back-end */}
              <div className="space-y-6">
                <h3 className="text-xl font-black uppercase italic text-primary tracking-tight">Back-end</h3>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">Java</span><span className="text-xs font-black italic text-primary">60%</span></div>
                  <Progress value={60} color="primary" size="sm" radius="none" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">Python</span><span className="text-xs font-black italic text-primary">60%</span></div>
                  <Progress value={60} color="primary" size="sm" radius="none" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">C# (Unity)</span><span className="text-xs font-black italic text-primary">40%</span></div>
                  <Progress value={40} color="primary" size="sm" radius="none" />
                </div>
              </div>

              {/* Virtualisation */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-black uppercase italic text-primary tracking-tight">Virtualisation</h3>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">VirtualBox</span><span className="text-xs font-black italic text-primary">100%</span></div>
                  <Progress value={100} color="primary" size="sm" radius="none" />
                </div>
              </div>

              {/* Systèmes d'exploitation */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-black uppercase italic text-primary tracking-tight">Systèmes d'exploitation</h3>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">Linux (Debian, Ubuntu)</span><span className="text-xs font-black italic text-primary">70%</span></div>
                  <Progress value={70} color="primary" size="sm" radius="none" />
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-2"><span className="text-sm font-bold uppercase">Windows (Server, 10/11)</span><span className="text-xs font-black italic text-primary">70%</span></div>
                  <Progress value={70} color="primary" size="sm" radius="none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* --- SECTION 5: L'ÉCOSYSTÈME TECHNIQUE (Outils) --- */}
      <section className="py-20 px-6 bg-content2/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Mon <span className="text-primary">Écosystème</span>
            </h2>
            <p className="text-default-400 font-mono text-xs uppercase tracking-widest">Tools & Workflow 2026</p>
            <Divider className="flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. IDE & Éditeurs */}
            <Card className="p-6 border-none bg-background/60 backdrop-blur-md">
              <CardHeader className="flex gap-3 px-0 pt-0">
                <span className="text-2xl">💻</span>
                <h3 className="text-lg font-black uppercase italic">Développement</h3>
              </CardHeader>
              <div className="flex flex-wrap gap-2">
                {["VS Code","éclipse"].map((t) => (
                  <Chip key={t} variant="flat" color="primary" size="sm" className="font-bold uppercase text-[10px]">{t}</Chip>
                ))}
              </div>
              <p className="mt-4 text-xs text-default-500 italic">Focus sur la productivité et l'intégration IA native.</p>
            </Card>

            {/* 2. Versioning & DevOps */}
            <Card className="p-6 border-none bg-background/60 backdrop-blur-md">
              <CardHeader className="flex gap-3 px-0 pt-0">
                <span className="text-2xl">⚙️</span>
                <h3 className="text-lg font-black uppercase italic">Git & DevOps</h3>
              </CardHeader>
              <div className="flex flex-wrap gap-2">
                {["GitHub"].map((t) => (
                  <Chip key={t} variant="flat" color="secondary" size="sm" className="font-bold uppercase text-[10px]">{t}</Chip>
                ))}
              </div>
              <p className="mt-4 text-xs text-default-500 italic">CI/CD et conteneurisation pour des déploiements robustes.</p>
            </Card>

            {/* 4. API & Data */}
            <Card className="p-6 border-none bg-background/60 backdrop-blur-md">
              <CardHeader className="flex gap-3 px-0 pt-0">
                <span className="text-2xl">📊</span>
                <h3 className="text-lg font-black uppercase italic">API & Bases de données</h3>
              </CardHeader>
              <div className="flex flex-wrap gap-2">
                {["Postman", "Render"].map((t) => (
                  <Chip key={t} variant="flat" color="success" size="sm" className="font-bold uppercase text-[10px]">{t}</Chip>
                ))}
              </div>
              <p className="mt-4 text-xs text-default-500 italic">Gestion SQL/NoSQL et tests d'architectures orientées services.</p>
            </Card>

            {/* 6. Design & Organisation */}
            <Card className="p-6 border-none bg-background/60 backdrop-blur-md">
              <CardHeader className="flex gap-3 px-0 pt-0">
                <span className="text-2xl">📋</span>
                <h3 className="text-lg font-black uppercase italic">Workflow & Design</h3>
              </CardHeader>
              <div className="flex flex-wrap gap-2">
                {["Figma","Trello"].map((t) => (
                  <Chip key={t} variant="flat" color="default" size="sm" className="font-bold uppercase text-[10px]">{t}</Chip>
                ))}
              </div>
              <p className="mt-4 text-xs text-default-500 italic">Méthodes Agiles et collaboration design-to-code.</p>
            </Card>

            <Card className="p-6 border-none bg-background/60 backdrop-blur-md">
              <CardHeader className="flex gap-3 px-0 pt-0">
                <span className="text-2xl">📋</span>
                <h3 className="text-lg font-black uppercase italic">Jeux vidéo</h3>
              </CardHeader>
              <div className="flex flex-wrap gap-2">
                {["Unity"].map((t) => (
                  <Chip key={t} variant="flat" color="default" size="sm" className="font-bold uppercase text-[10px]">{t}</Chip>
                ))}
              </div>
              <p className="mt-4 text-xs text-default-500 italic">Méthodes Agiles et collaboration design-to-code.</p>
            </Card>
          </div>
        </div>
      </section>

       {/* --- SECTION 6: CERTIFICATIONS --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Mes <span className="text-primary">Certifications</span>
            </h2>
            <Divider className="flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "HTML5 et CSS3", path: "/assets/img/certif/certif_htmlcss.jpg" },
              { title: "SQL (Bases de données)", path: "/assets/img/certif/certif_sql.jpg" },
              { title: "PHP et MySQL", path: "/assets/img/certif/certif_phpsql.jpg" },
              { title: "Programmation Java", path: "/assets/img/certif/certif_java.jpg" },
              { title: "Programmation JavaScript", path: "/assets/img/certif/certif_js.jpg" },
              { title: "JavaScript Dynamique", path: "/assets/img/certif/certif_jsweb.jpg" },
              { title: "Débuter avec React", path: "/assets/img/certif/certif_react.jpg" },
            ].map((cert, index) => (
              <Card 
                key={index} 
                isFooterBlurred
                className="w-full h-[250px] border-none group overflow-hidden"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/40 backdrop-blur-sm">
                  <p className="text-tiny text-white/60 uppercase font-bold tracking-widest">OpenClassrooms</p>
                  <h4 className="text-white font-black italic uppercase text-sm">{cert.title}</h4>
                </CardHeader>
                <img
                  alt={cert.title}
                  className="z-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="/assets/img/openclasseroom.jpg"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <p className="text-black text-tiny font-bold uppercase italic">Vérifier</p>
                  <Button 
                    as="a"
                    href={cert.path}
                    target="_blank"
                    className="text-tiny text-white bg-black/60 hover:bg-primary font-bold uppercase italic" 
                    variant="flat" 
                    color="default" 
                    radius="lg" 
                    size="sm"
                  >
                    Voir le diplôme
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ title, skills, color }: any) {
  return (
    <Card className="p-6 border-none shadow-lg bg-background/60 backdrop-blur-md">
      <CardHeader className="font-black uppercase text-xl italic pb-0 tracking-tighter">{title}</CardHeader>
      <CardBody className="space-y-4 pt-4">
        {skills.map((s: any) => (
          <div key={s.n} className="space-y-1">
            <div className="flex justify-between text-[10px] font-black uppercase">
              <span>{s.n}</span>
              <span className="text-primary">{s.v}%</span>
            </div>
            <Progress value={s.v} color={color} size="sm" radius="none" />
          </div>
        ))}
      </CardBody>
    </Card>
  );
}