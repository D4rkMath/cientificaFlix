
import React from "react";
import { Play, Info } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative pt-[40%] md:pt-[45%] lg:pt-[38%] bg-cientifica-darkblue">
      {/* Hero Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="https://picsum.photos/id/1005/1920/800" 
          alt="Featured Content" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute bottom-[15%] left-12 hero-details">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-shadow animate-fade-in">
          Descubre la Ciencia
        </h1>
        <p className="text-base md:text-lg mb-6 w-full md:w-3/4 opacity-90 animate-slide-up">
          Una aventura por los hallazgos más impresionantes del mundo científico moderno. 
          Explora con nosotros los misterios del universo.
        </p>
        <div className="flex items-center gap-3">
          <button className="button-play">
            <Play size={20} /> <span>Reproducir</span>
          </button>
          <button className="bg-cientifica-gray/80 text-white rounded px-5 py-1 flex items-center gap-1 hover:bg-cientifica-gray/90 transition">
            <Info size={20} /> <span>Más información</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
