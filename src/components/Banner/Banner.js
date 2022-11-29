import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import axios from '../../api/axios';
import requests from '../../api/requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await axios.get(requests.fetchTrendingList);
        const movie = request?.data?.results[Math.floor(Math.random() * request?.data?.results?.length - 1)];
        setMovie(movie);
    }

    const openTrailer = (movie) => {
        console.log(movie?.title || movie?.original_name || movie?.name);
        if (trailerUrl) {
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie?.title || movie?.original_name || movie?.name || '')
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                    setOpen(true);

                }).catch(error => console.log(error));
        }
    }

    return (
        <div className='banner' style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')` }}>
            <div className='content left-5 lg:left-16'>
                <h1 className='bannerTitle text-3xl lg:text-4xl xl:text-5xl'>{movie?.title || movie?.original_name || movie?.name}</h1>
                <div className="buttons">
                    <button type='button' className="bannerBtn" onClick={() => openTrailer(movie)}>Play Trailer</button>
                    <button type='button' className="bannerBtn">More Info</button>
                </div>
                <h1 className='description max-w-full lg:max-w-xl'>{movie.overview}</h1>
            </div>
            <div className='fadeBottom'></div>
            {isOpen && <ModalVideo channel='youtube' isOpen={isOpen} videoId={trailerUrl} onClose={() => setOpen(false)} />}
        </div>
    )
}

export default Banner;