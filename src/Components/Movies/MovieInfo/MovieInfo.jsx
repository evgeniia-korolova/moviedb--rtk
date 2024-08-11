import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setMovie } from '../../../data/reducers/movieInfoReducer';

const MovieInfo = () => {

    let movie = useSelector(state => state.movieInfo.movie)

    let movieId = useParams();
    let dispatch = useDispatch()

    const API_KEY = 'd4ef1072498b844582d90d6ade6ff65f';   

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then(response=> dispatch(setMovie(response.data.results)) ) 
        // .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            <h2>Title</h2>
            {/* <p>Origin country : {movie.origin_country[0]}</p> */}
            <p>Origin country : {movie.title}</p>
        </div>
    )
}

export default MovieInfo;