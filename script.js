const API_KEY = "fcc680d3";

function searchMovie() {
  const name = document.getElementById("movieInput").value.trim();

  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`)
    .then(res => res.json())
    .then(data => {
      if (data.Response === "True") {
        showMovie(data);
      } else {
        document.getElementById("movies").innerHTML =
          "<h2>❌ Movie not found (correct spelling required)</h2>";
      }
    });
}

function showMovie(movie) {
  document.getElementById("movies").innerHTML = `
    <div class="movie-card">
      <img src="${movie.Poster}">
      <h2>${movie.Title}</h2>
      <p>⭐ ${movie.imdbRating}</p>
      <p>${movie.Plot}</p>
    </div>
  `;
}
