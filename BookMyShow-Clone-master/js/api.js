const API_KEY = '9bb77154';
const BASE_URL = 'https://www.omdbapi.com/';

async function fetchMovies(searchTerm) {
  const url = `${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
}

async function fetchMovieDetails(imdbID) {
  const url = `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
}

async function fetchPopularMovies() {
  const popularMovies = ['Avengers', 'Batman', 'Inception', 'Titanic', 'Spiderman'];
  const randomMovie = popularMovies[Math.floor(Math.random() * popularMovies.length)];
  return fetchMovies(randomMovie);
}