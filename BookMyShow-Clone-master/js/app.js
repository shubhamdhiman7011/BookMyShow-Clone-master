const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${10 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 10000);

//side navigation bar

jQuery(document).ready(function () {

    $('.login, .overlay').on('click', function () {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.open-menu').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    /* other code */

});


// login page

// Get the modal
var modal = document.getElementById('id01');

// close it
if (target == modal) {
    modal.style.display = "none";
}

const searchBar = document.getElementById('search-bar');
const moviesGrid = document.getElementById('movies-grid');
const errorMessage = document.getElementById('error-message');
const loadingIndicator = document.getElementById('loading');
const modal = document.getElementById('movie-detail-modal');
const modalContent = document.getElementById('movie-details');
const closeModal = document.getElementById('close-modal');

// Show loading indicator
function showLoading() {
  loadingIndicator.classList.remove('hidden');
}

// Hide loading indicator
function hideLoading() {
  loadingIndicator.classList.add('hidden');
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
}

// Hide error message
function hideError() {
  errorMessage.classList.add('hidden');
}

// Render movies in the grid
function renderMovies(movies) {
  moviesGrid.innerHTML = ''; // Clear previous results
  movies.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
      <img class="movie-poster" src="${movie.Poster}" alt="${movie.Title}" />
      <h2 class="movie-title">${movie.Title}</h2>
      <p class="movie-year">Year: ${movie.Year}</p>
      <p class="movie-type">Type: ${movie.Type}</p>
    `;
    movieCard.addEventListener('click', () => openMovieDetail(movie.imdbID));
    moviesGrid.appendChild(movieCard);
  });
}

// Open movie detail in a modal
async function openMovieDetail(imdbID) {
  showLoading();
  hideError();
  const movie = await fetchMovieDetails(imdbID);
  hideLoading();
  
  modalContent.innerHTML = `
    <img src="${movie.Poster}" alt="${movie.Title}" />
    <h2>${movie.Title}</h2>
    <p><strong>Year:</strong> ${movie.Year}</p>
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Cast:</strong> ${movie.Actors}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>Ratings:</strong> ${movie.imdbRating}</p>
  `;
  
  modal.classList.remove('hidden');
}

// Close the modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Fetch and display random popular movies on page load
async function loadRandomMovies() {
  showLoading();
  hideError();
  const response = await fetchPopularMovies();
  hideLoading();
  
  if (response.Response === 'True') {
    renderMovies(response.Search);
  } else {
    showError('Failed to load random movies');
  }
}

// Search for movies based on input
const handleSearch = debounce(async (query) => {
  if (query.length < 3) return;
  
  showLoading();
  hideError();
  
  const response = await fetchMovies(query);
  hideLoading();
  
  if (response.Response === 'True') {
    renderMovies(response.Search);
  } else {
    showError('No movies found');
  }
}, 300);

// Event listener for search bar input
searchBar.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});

// Initial load
window.onload = loadRandomMovies;