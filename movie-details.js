// Sample movie data (in a real-world app, this would be fetched from an API or database)
const movies = {
    1: {
        title: "Inception",
        description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
        poster: "inception.jpg",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"]
    },
    2: {
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "interstellar.jpg",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"]
    }
    // More movie entries can be added here
};

// Function to get query parameter by name (i.e. 'id')
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch the movie ID from the URL query parameters
const movieId = getQueryParam('id');

// Find the movie data by ID
const movie = movies[movieId];

if (movie) {
    // Populate movie details on the page
    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('movie-description').innerText = movie.description;
    document.getElementById('movie-poster').src = movie.poster;

    // Populate cast list
    const castList = document.getElementById('cast-list');
    movie.cast.forEach(member => {
        const li = document.createElement('li');
        li.innerText = member;
        castList.appendChild(li);
    });
} else {
    document.getElementById('movie-details-container').innerText = "Movie not found!";
}
