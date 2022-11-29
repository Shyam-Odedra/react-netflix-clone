import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;


// export default class MoviesDetailsApis {
//     async gettingTrendingMovies(type) {
//         const response = await fetch(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${API_KEY}`);
//         const data = await response.json();
//         return data;
//     }

//     async gettingMoviesDetail(type ,id) {
//         const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`);
//         const data = await response.json();
//         return data;
//     }
    
//     async gettingMoviesByGenres(genre){
//         const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`);
//         const data = await response.json();
//         return data;
//     }
// }