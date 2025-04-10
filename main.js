
// Content data for the application
const carouselCategories = [
  { id: 1, name: "Populares en Científica" },
  { id: 2, name: "Continuar viendo" },
  { id: 3, name: "Tendencias actuales" },
  { id: 4, name: "Documentales premiados" },
  { id: 5, name: "Ciencia y Tecnología" },
  { id: 6, name: "Recomendaciones para ti" }
];

// Generate content cards data
const generateCards = (count, offset = 0) => {
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

// DOM Elements
const navbar = document.getElementById('navbar');
const carouselsContainer = document.getElementById('carousels-container');
const homePage = document.getElementById('home-page');
const detailsPage = document.getElementById('details-page');
const notFoundPage = document.getElementById('not-found-page');
const backButton = document.getElementById('back-button');
const backToHomeButton = document.getElementById('back-to-home');

// Current page state
let currentPage = 'home';
let currentContentId = null;

// Event listeners for navigation
backButton.addEventListener('click', navigateToHome);
backToHomeButton.addEventListener('click', navigateToHome);

// Initialize the application
function init() {
  // Handle navbar background on scroll
  window.addEventListener('scroll', handleScroll);
  
  // Generate and render carousels
  renderCarousels();
  
  // Check if there's a content ID in the URL (e.g., ?content=123)
  const urlParams = new URLSearchParams(window.location.search);
  const contentId = urlParams.get('content');
  
  if (contentId) {
    navigateToContent(parseInt(contentId));
  }
}

// Handle navbar background on scroll
function handleScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Render all carousels
function renderCarousels() {
  carouselCategories.forEach((category, index) => {
    const cards = generateCards(15, index * 20);
    renderCarousel(category, cards, index);
  });
}

// Render a single carousel
function renderCarousel(category, cards, index) {
  const carouselElement = document.createElement('div');
  carouselElement.className = 'carousel';
  carouselElement.innerHTML = `
    <h2 class="carousel-title">${category.name}</h2>
    <div class="carousel-container">
      <button class="carousel-button left">
        <i class="icon-chevron-left"></i>
      </button>
      <div class="carousel-track" id="carousel-${category.id}">
        ${cards.map(card => createCardHTML(card)).join('')}
      </div>
      <button class="carousel-button right">
        <i class="icon-chevron-right"></i>
      </button>
    </div>
  `;
  
  carouselsContainer.appendChild(carouselElement);
  
  // Add event listeners to carousel buttons
  const track = carouselElement.querySelector('.carousel-track');
  const leftButton = carouselElement.querySelector('.carousel-button.left');
  const rightButton = carouselElement.querySelector('.carousel-button.right');
  
  leftButton.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth * 0.8, behavior: 'smooth' });
  });
  
  rightButton.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
  });
  
  // Add event listeners to cards
  const cardElements = carouselElement.querySelectorAll('.card-container');
  cardElements.forEach((cardElement, i) => {
    cardElement.addEventListener('click', () => {
      navigateToContent(cards[i].id);
    });
  });
}

// Create HTML for a content card
function createCardHTML(card) {
  return `
    <div class="card-container" data-id="${card.id}">
      <div class="netflix-card">
        <img src="${card.imageUrl}" alt="${card.title}" />
        <div class="netflix-card-overlay">
          <h3>${card.title}</h3>
          <div class="netflix-card-overlay-buttons">
            <button class="button-play">
              <i class="icon-play"></i>
            </button>
            <button class="button-info">
              <i class="icon-info"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Navigate to content details page
function navigateToContent(contentId) {
  const content = findContentById(contentId);
  
  if (!content) {
    navigateToNotFound();
    return;
  }
  
  // Update URL
  window.history.pushState({}, '', `?content=${contentId}`);
  
  // Update page state
  currentPage = 'details';
  currentContentId = contentId;
  
  // Update details page content
  updateDetailsPage(content);
  
  // Show details page
  showPage('details');
}

// Navigate to home page
function navigateToHome() {
  // Update URL
  window.history.pushState({}, '', '/');
  
  // Update page state
  currentPage = 'home';
  currentContentId = null;
  
  // Show home page
  showPage('home');
}

// Navigate to not found page
function navigateToNotFound() {
  // Update page state
  currentPage = 'not-found';
  
  // Show not found page
  showPage('not-found');
}

// Show the specified page
function showPage(page) {
  homePage.classList.remove('active');
  detailsPage.classList.remove('active');
  notFoundPage.classList.remove('active');
  
  switch (page) {
    case 'home':
      homePage.classList.add('active');
      break;
    case 'details':
      detailsPage.classList.add('active');
      break;
    case 'not-found':
      notFoundPage.classList.add('active');
      break;
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Update details page with content information
function updateDetailsPage(content) {
  const detailsImage = document.getElementById('details-image');
  const detailsTitle = document.getElementById('details-title');
  const detailsRating = document.getElementById('details-rating');
  const detailsYear = document.getElementById('details-year');
  const detailsDuration = document.getElementById('details-duration');
  const detailsGenre = document.getElementById('details-genre');
  const detailsDescription = document.getElementById('details-description');
  const relatedGrid = document.getElementById('related-grid');
  
  // Update details
  detailsImage.src = content.imageUrl.replace('/300/170', '/800/450');
  detailsImage.alt = content.title;
  detailsTitle.textContent = content.title;
  detailsRating.textContent = `${content.rating} valoración`;
  detailsYear.textContent = content.year;
  detailsDuration.textContent = content.duration;
  detailsGenre.textContent = content.genre;
  detailsDescription.textContent = content.description;
  
  // Generate related content
  const relatedContent = generateCards(4, content.id + 100);
  
  // Update related content
  relatedGrid.innerHTML = relatedContent.map(item => `
    <div class="related-item" data-id="${item.id}">
      <img src="${item.imageUrl}" alt="${item.title}" />
      <h3>${item.title}</h3>
    </div>
  `).join('');
  
  // Add event listeners to related content
  const relatedItems = relatedGrid.querySelectorAll('.related-item');
  relatedItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      navigateToContent(relatedContent[index].id);
    });
  });
}

// Find content by ID
function findContentById(id) {
  // We're generating content on the fly, so we'll create it based on the ID
  const offset = Math.floor(id / 20) * 20;
  const index = id - offset;
  const cards = generateCards(20, offset);
  return cards[index] || null;
}

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const contentId = urlParams.get('content');
  
  if (contentId) {
    navigateToContent(parseInt(contentId));
  } else {
    navigateToHome();
  }
});

// Initialize the app when content is loaded
document.addEventListener('DOMContentLoaded', init);
