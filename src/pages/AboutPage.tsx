import { useEffect, useState } from "react";
import { Button, Chip, Spinner, Image } from "@heroui/react";

const UNSPLASH_ACCESS_KEY = "fJ7TbzjxZU0L7D-oBgqZYS-BQeLZAppzijZnI8lriaA"; 

export default function About() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUnsplashImages = async () => {
      try {
        setLoading(true);
        // per_page=10 pour avoir plusieurs images
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=coding,gaming,software&per_page=10&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        const urls = data.results.map((photo: any) => photo.urls.regular);
        setImages(urls);
      } catch (error) {
        console.error("Erreur Unsplash:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUnsplashImages();
  }, []);

  // Fonctions de navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Timer automatique (optionnel, s'arrête si l'utilisateur interagit)
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section id="a-propos" className="max-w-7xl mx-auto px-6 py-24 min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* GAUCHE : PRÉSENTATION */}
        <div className="space-y-6">
          <Chip color="primary" variant="dot" className="font-mono uppercase text-xs">
            System.ready()
          </Chip>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Développeur Web & <br />
            <span className="text-primary italic">Game Designer.</span>
          </h1>

          <p className="text-default-500 text-lg max-w-lg leading-relaxed font-sans">
            Je m'appelle <span className="text-foreground font-semibold">Yanis Laldji</span>. 
            Mon travail consiste à fusionner la performance du développement web moderne 
            avec l'immersion visuelle du jeu vidéo. Je crée des interfaces qui racontent une histoire.
          </p>

          <div className="flex gap-4 pt-4">
            <Button color="primary" radius="full" size="lg" className="font-bold shadow-lg">
              Voir mes projets
            </Button>
            <Button variant="bordered" radius="full" size="lg">
              Me contacter
            </Button>
          </div>
        </div>

        {/* DROITE : CARROUSEL AVEC FLÈCHES */}
        <div className="relative h-[450px] w-full flex items-center justify-center group">
          {loading ? (
            <Spinner color="primary" size="lg" />
          ) : (
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-1 border-white/10">
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="Tech Preview"
                  className={`absolute inset-0 object-cover w-full h-full transition-all duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                  removeWrapper
                />
              ))}
              
              {/* Overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* FLÈCHES DE NAVIGATION */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              
              {/* Indicateurs de progression (optionnels) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      i === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}