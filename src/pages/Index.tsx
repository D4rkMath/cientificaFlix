
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContentCarousel from "../components/ContentCarousel";
import Footer from "../components/Footer";
import { carouselCategories, generateCards } from "../utils/contentData";

const Index = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <HeroSection />

      {/* Content Carousels */}
      <div className="mt-[-100px] md:mt-[-150px] relative z-10 pb-20">
        {carouselCategories.map((category, categoryIndex) => (
          <ContentCarousel 
            key={category.id}
            category={category}
            cards={generateCards(15, categoryIndex * 20)}
            carouselIndex={categoryIndex}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
