import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './MovieRow.css';
import ModalVideo from 'react-modal-video'
import movieTrailer from 'movie-trailer';

function MoviesRow({ title, requestUrl, bigHeight }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const request = await axios.get(requestUrl);
        setMovies(request?.data?.results);
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
        <>
            <div className='mt-5 movieRow ml-5 lg:ml-14'>
                <h2 className='title text-xl lg:text-2xl'>{title}</h2>
                <div className='posterRow'>
                    {movies.map((movie) => (
                        <img key={movie.id} onClick={() => openTrailer(movie)} className={`poster cursor-pointer ` + (bigHeight ? 'max-h-52 lg:max-h-64' : 'max-h-28 lg:max-h-40')} src={`https://image.tmdb.org/t/p/w780${bigHeight ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    ))}
                </div>
            </div>
            {isOpen && <ModalVideo channel='youtube' isOpen={isOpen} videoId={trailerUrl} onClose={() => setOpen(false)} />}
        </>
    )
}

export default MoviesRow;