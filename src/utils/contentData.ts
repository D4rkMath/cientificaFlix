
// Content data for the application
export const carouselCategories = [
  { id: 1, name: "Populares en Científica" },
  { id: 2, name: "Continuar viendo" },
  { id: 3, name: "Tendencias actuales" },
  { id: 4, name: "Documentales premiados" },
  { id: 5, name: "Ciencia y Tecnología" },
  { id: 6, name: "Recomendaciones para ti" }
];

// Enhanced card content with more details
export const generateCards = (count: number, offset = 0) => {
  const genres = ["Ciencia", "Tecnología", "Naturaleza", "Astronomía", "Historia", "Medicina"];
  const years = [2019, 2020, 2021, 2022, 2023, 2024];
  
  return Array.from({ length: count }, (_, i) => {
    const id = i + offset;
    return {
      id,
      title: `Título ${id + 1}`,
      imageUrl: `https://picsum.photos/id/${(id) % 100 + 10}/300/170`,
      description: `Este documental explora los fascinantes detalles sobre el tema ${id + 1}. Una mirada profunda a los descubrimientos recientes y avances científicos.`,
      genre: genres[id % genres.length],
      year: years[id % years.length],
      duration: `${Math.floor(Math.random() * 2) + 1}h ${Math.floor(Math.random() * 50) + 10}m`,
      rating: (Math.floor(Math.random() * 10) + 70) / 10
    };
  });
};
