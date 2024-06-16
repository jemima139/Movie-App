# Movie-App
Movie App
This Movie App allows users to search for movies using an external API (presumably The Movie Database - TMDb) and display details about the searched movies. Users can also click on a movie to find similar movies.

Features
Search Movies: Users can enter a movie title in the search box to find relevant movies.
Display Movie Details: Upon searching, the app displays movie posters, titles, overviews, and allows users to click for similar titles.
Similar Movies: Clicking on a movie poster displays a list of similar movies based on the selected movie.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
External APIs: The Movie Database (TMDb) API for fetching movie data
Setup Instructions
To run the Movie App locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/jemima139/Movie-App.git
cd Movie-App
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Add your API key for TMDb (if required):
plaintext
Copy code
TMDB_API_KEY=2e319a9f30059667fe06ab266d8c6219
Start the server:

bash
Copy code
npm start
Access the application:

Open your web browser and navigate to http://localhost:3000.
API Usage
Search Endpoint: http://localhost:3000/search?query={searchedMovie}

Replace {searchedMovie} with the movie title you want to search for.
Similar Movies Endpoint: http://localhost:3000/similar/{movieId}

Replace {movieId} with the ID of the movie for which you want to find similar movies.
