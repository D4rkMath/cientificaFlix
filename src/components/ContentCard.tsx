
import React from "react";
import { Play, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContentCardProps {
  id: number;
  title: string;
  imageUrl: string;
}

const ContentCard = ({ id, title, imageUrl }: ContentCardProps) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(`/content/${id}`);
  };

  return (
    <div className="card-container w-[220px] md:w-[260px]">
      <div className="netflix-card group" onClick={handleCardClick}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full aspect-video object-cover rounded"
        />
        <div className="netflix-card-overlay">
          <h3 className="text-sm font-medium mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            <button className="button-play p-1">
              <Play size={16} />
            </button>
            <button className="button-info">
              <Info size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
