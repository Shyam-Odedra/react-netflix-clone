const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrendingMovies : `/trending/movie/week?api_key=${API_KEY}`,
    fetchTrendingWebSeries : `/trending/tv/week?api_key=${API_KEY}`,
    fetchTrendingList : `/trending/all/week?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}

export default requests;