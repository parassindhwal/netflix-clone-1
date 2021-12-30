//Typically we would store in {process.env.API_KEY}
const API_KEY = "ec3a128658899f851827242f4302958b";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export const fetchMovieURL = (movie_id) => `/movie/${movie_id}/videos?api_key=${API_KEY}`;

export const fetchTvURL = (tv_id) => `/tv/${tv_id}/videos?api_key=${API_KEY}`;

export default requests;

// &language=en-US

// https://api.themoviedb.org/3/tv/63174/videos?api_key=ec3a128658899f851827242f4302958b&language=en-US