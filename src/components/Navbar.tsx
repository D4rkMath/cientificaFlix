
import React, { useState, useEffect } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 flex items-center justify-between px-4 md:px-12 py-3 transition-colors duration-300 ${
        navbarBg ? "bg-netflix-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <img 
          src="https://www.cientifica.edu.pe/sites/default/files/logo-cientifica-blanco.svg" 
          alt="Científica Logo" 
          className="h-8 logo-cientifica"
        />
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="navbar-link text-sm">Inicio</a>
          <a href="#" className="navbar-link text-sm">Series</a>
          <a href="#" className="navbar-link text-sm">Películas</a>
          <a href="#" className="navbar-link text-sm">Novedades populares</a>
          <a href="#" className="navbar-link text-sm">Mi lista</a>
          <a href="#" className="navbar-link text-sm">Explorar por idiomas</a>
        </div>
        <div className="md:hidden flex items-center">
          <span className="text-white text-sm mr-1">Explorar</span>
          <ChevronDown size={16} />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Search className="h-5 w-5 text-white" />
        <a href="#" className="navbar-link text-sm hidden md:inline">Niños</a>
        <Bell className="h-5 w-5 text-white" />
        <div className="flex items-center gap-1">
          <img 
            src="https://picsum.photos/id/237/32/32" 
            alt="User Profile" 
            className="h-8 w-8 rounded"
          />
          <ChevronDown size={16} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
