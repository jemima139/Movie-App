const axios = require('axios');
const apiKey = process.env.TMDB_API_KEY;

const movieID = async (searchedMovie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}&api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const body = response.data;

        if (body.results.length === 0) {
            throw new Error('Movie not found');
        }

        const movieIDD = body.results[0].id;
        const movieTitle = body.results[0].original_title;
        return { movieIDD, movieTitle };
    } catch (error) {
        throw new Error('Unable to connect to Movie service!');
    }
};

module.exports = movieID;
