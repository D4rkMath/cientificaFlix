
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Plus, ThumbsUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { generateCards } from "@/utils/contentData";

const ContentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Simulate getting the content by ID
  // In a real app, you would fetch this from an API
  const content = generateCards(100).find(item => item.id === Number(id));
  
  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl mb-4">Contenido no encontrado</h1>
        <Button onClick={() => navigate("/")} variant="outline">Volver al inicio</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      
      {/* Hero Banner with Content */}
      <div className="relative">
        <div className="w-full h-[70vh] relative">
          <img 
            src={content.imageUrl.replace('/300/170', '/800/450')} 
            alt={content.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <Button 
            variant="ghost" 
            className="mb-4" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2" size={16} />
            Volver
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
            <span className="text-green-400">{content.rating} valoración</span>
            <span>{content.year}</span>
            <span>{content.duration}</span>
            <span className="border border-white/20 px-2 py-1 rounded">{content.genre}</span>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <Button className="bg-white text-black hover:bg-white/90">
              <Play className="mr-2" size={16} />
              Reproducir
            </Button>
            <Button variant="outline">
              <Plus className="mr-2" size={16} />
              Mi Lista
            </Button>
            <Button variant="outline" className="rounded-full p-2">
              <ThumbsUp size={16} />
            </Button>
          </div>
          
          <p className="text-lg max-w-2xl">{content.description}</p>
        </div>
      </div>
      
      {/* Additional content would go here */}
      <div className="p-6 md:p-12 mt-6">
        <h2 className="text-2xl font-medium mb-4">Contenido relacionado</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {generateCards(4, Number(id) + 100).map(item => (
            <div 
              key={item.id} 
              className="cursor-pointer"
              onClick={() => navigate(`/content/${item.id}`)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full aspect-video object-cover rounded mb-2"
              />
              <h3 className="font-medium">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContentDetails;
