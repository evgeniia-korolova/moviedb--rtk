import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setMovie } from '../../../data/reducers/movieInfoReducer';
import { fetchMovieById } from "../../../services/MoviesService";

import s from './MovieInfo.module.scss';

const MovieInfo = () => {

    let movie = useSelector(state => state.movieInfo.movie)

    let {movieId} = useParams();
    let dispatch = useDispatch()

    const API_KEY = 'd4ef1072498b844582d90d6ade6ff65f';   

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        // axios.get(`https://api.themoviedb.org/3/movie/653346?api_key=${API_KEY}`)
            .then(response => {
                console.log(response.data)
                dispatch(setMovie(response.data))
            }) 
        // .then(response => console.log(response.data))
    }, [movieId, dispatch])
    
//     useEffect(() => {
//     const getMovie = async () => {
//       try {
//           const data = await fetchMovieById(movieId);
//           console.log(data)
//         dispatch(setMovie(data));
//       } catch (error) {
//         console.error("Failed to fetch movie:", error);
//       }
//     };

//     getMovie();
//   }, [dispatch, movieId]);

    const imgUrl = 'https://tmdb.org/t/p/w500';
    
    let imgSrc = movie.backdrop_path
    let path = `${imgUrl}${imgSrc}`

   

    return (
        <div className={s.MovieInfo}>
            <div className={s.MovieInfoImg}>
                <img src={path} alt={movie.title} />
            </div>
            <div className={s.MovieInfoDescription}>

                <h2>{movie.title} ({movie.release_date})</h2>
                
                <ul>
                    {movie.genres && movie.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <p>Origin country : {movie.origin_country}</p>
                <h3>Overview</h3>
                <p>{movie.overview }</p>
            </div>
            
        </div>
    )
}

export default MovieInfo;