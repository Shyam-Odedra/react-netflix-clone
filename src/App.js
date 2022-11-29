import requests from "./api/requests";
import Banner from "./components/Banner/Banner";
import MoviesRow from "./components/MoviesRow/MoviesRow";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
        <div className="App relative">
            <Navbar />
            <Banner />
            <MoviesRow title='Trending Movies' requestUrl={requests.fetchTrendingMovies} bigHeight/>
            <MoviesRow title='Trending TV Shows' requestUrl={requests.fetchTrendingWebSeries} bigHeight/>
            <MoviesRow title='Action Movies' requestUrl={requests.fetchActionMovies} />
            <MoviesRow title='Comedy Movies' requestUrl={requests.fetchComedyMovies} />
            <MoviesRow title='Drama Movies' requestUrl={requests.fetchDramaMovies} />
            <MoviesRow title='Science Fiction Movies' requestUrl={requests.fetchScienceFictionMovies} />
            <MoviesRow title='Romance Movies' requestUrl={requests.fetchRomanceMovies} />
            <MoviesRow title='Thriller Movies' requestUrl={requests.fetchThrillerMovies} />
            <MoviesRow title='Animation Movies' requestUrl={requests.fetchAnimationMovies} />
            <MoviesRow title='Horror Movies' requestUrl={requests.fetchHorrorMovies} />
        </div>
    );
}

export default App;
