const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.TMDB_API_KEY;

app.use(express.static('public'));

app.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                query,
                api_key: apiKey
            }
        });
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Error fetching movies');
    }
});

app.get('/similar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {
            params: {
                api_key: apiKey
            }
        });
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching similar movies:', error);
        res.status(500).send('Error fetching similar movies');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
