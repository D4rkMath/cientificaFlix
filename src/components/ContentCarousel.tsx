
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";

interface ContentCarouselProps {
  category: {
    id: number;
    name: string;
  };
  cards: Array<{
    id: number;
    title: string;
    imageUrl: string;
  }>;
  carouselIndex: number;
}

const ContentCarousel = ({ category, cards, carouselIndex }: ContentCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Carousel scroll handlers
  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const scrollAmount = direction === "left" 
      ? -carousel.clientWidth * 0.8 
      : carousel.clientWidth * 0.8;
    
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="px-4 md:px-12 mb-8">
      <h2 className="text-xl font-medium mb-2 text-white">{category.name}</h2>
      
      <div className="carousel-container">
        {/* Left scroll button */}
        <button 
          className="carousel-button left-0" 
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={30} />
        </button>
        
        {/* Carousel track */}
        <div 
          className="carousel-track" 
          ref={carouselRef}
        >
          {cards.map(item => (
            <ContentCard 
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        
        {/* Right scroll button */}
        <button 
          className="carousel-button right-0" 
          onClick={() => scroll("right")}
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default ContentCarousel;
