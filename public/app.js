document.addEventListener('DOMContentLoaded', () => {
  const movieForm = document.querySelector('#movieForm');
  const search = document.querySelector('#user-input');
  const messageOne = document.querySelector('#message-1');
  const movieList = document.querySelector('#movie-list');
  const halfPath = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/';

  const fetchData = async (url) => {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          return data;
      } catch (error) {
          console.error('Error in fetchData:', error);
          throw error;
      }
  };

  const addMovieClickListeners = () => {
      const movieElements = document.querySelectorAll('.movie');
      movieElements.forEach((movieElement) => {
          movieElement.addEventListener('click', () => {
              const movieId = movieElement.dataset.id;
              displaySimilarMovies(movieId);
          });
      });
  };

  movieForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const searchedMovie = encodeURIComponent(search.value.trim());
      messageOne.textContent = '';
      movieList.textContent = '';

      try {
          const url = `http://localhost:3000/search?query=${searchedMovie}`;
          const data = await fetchData(url);

          movieList.innerHTML = data
              .map((movie) => {
                  const fullPath = `${halfPath}${movie.poster_path}`;
                  return `<div class="movie" data-id="${movie.id}">
                      <img src="${fullPath}" alt="${movie.title}">
                      <h1>${movie.title}</h1>
                      <h4>Click Image for Similar Titles</h4>
                      <p>${movie.overview}</p>
                  </div>`;
              })
              .join('');
          addMovieClickListeners();
          messageOne.textContent = '';

      } catch (error) {
          console.error('Error fetching data:', error);
          messageOne.textContent = 'An error occurred while fetching data.';
      }
  });

  const displaySimilarMovies = async (movieId) => {
      const url = `http://localhost:3000/similar/${movieId}`;
      try {
          const data = await fetchData(url);

          movieList.innerHTML = data
              .map((similarMovie) => {
                  return `<div class="movie" data-id="${similarMovie.id}">
                      <ul>
                          <li>${similarMovie.original_title}</li>
                      </ul>
                  </div>`;
              })
              .join('');
          addMovieClickListeners();
      } catch (error) {
          console.error('Error fetching similar movies:', error);
          messageOne.textContent = 'An error occurred while fetching similar movies.';
      }
  };
});
