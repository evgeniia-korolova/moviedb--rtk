import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setPages } from "../../../data/reducers/moviesReducer";
import MovieCard from "../MovieCard/MovieCard";
// import { getAllMovies } from "../../../services/MoviesService";
import s from './MoviesGallery.module.scss';


const MoviesGallery = () => {

    let dispatch = useDispatch();
    let movies = useSelector(state => state.movies.movies);
    let page = useSelector(state => state.movies.pages);

    const API_KEY = 'd4ef1072498b844582d90d6ade6ff65f';
    const basePage = 1;

    const getMovies = () => {
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=12`)
            .then(response => {
                console.log(response.data.results)
                dispatch(setMovies(response.data.results))
            })
    }

    const showMoreMoviesHandler = () => {
        dispatch(setPages())
        getMovies()
    }

    useEffect((page = basePage) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=12`)
            .then(response => {
                console.log(response.data.results)
                dispatch(setMovies(response.data.results))
            })
    }, [dispatch])

    // useEffect(() => {
    //     getAllMovies()
    //     .then(response=> console.log(response.data.results) )
    // }, [])


    return (
        <div className={s.MoviesGallery}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            <button className={s.showMoreBtn} onClick={showMoreMoviesHandler}>Show more</button>
        </div>
    )
}

export default MoviesGallery;