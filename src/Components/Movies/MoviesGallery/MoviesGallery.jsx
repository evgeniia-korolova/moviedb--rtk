import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../../data/reducers/moviesReducer";
import MovieCard from "../MovieCard/MovieCard";


const MoviesGallery = () => {

    let dispatch = useDispatch();
    let movies = useSelector(state => state.movies.movies)

    const API_KEY = 'd4ef1072498b844582d90d6ade6ff65f';
    const page = 1;

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=12`)
        .then(response=> dispatch(setMovies(response.data.results)) )
    }, [])
    return (
        <div>MoviesGallery
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    )
}

export default MoviesGallery;