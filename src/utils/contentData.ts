
// Placeholder content data
export const carouselCategories = [
  { id: 1, name: "Populares en Científica" },
  { id: 2, name: "Continuar viendo" },
  { id: 3, name: "Tendencias actuales" },
  { id: 4, name: "Documentales premiados" },
  { id: 5, name: "Ciencia y Tecnología" },
  { id: 6, name: "Recomendaciones para ti" }
];

// Placeholder card content
export const generateCards = (count: number, offset = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + offset,
    title: `Título ${i + offset + 1}`,
    imageUrl: `https://picsum.photos/id/${(i + offset) % 100 + 10}/300/170`
  }));
};
