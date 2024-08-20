import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import s from './MovieCard.module.scss';
import { addToFavorite } from '../../../data/reducers/favoriteMoviesReducer';


const MovieCard = ({ movie }) => {

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const showMoreHandler = () => {
        navigate(`/movie/${movie.id}`)
        console.log(movie.id)
    }

    const addToFavoriteHandler = () => {
        dispatch(addToFavorite(movie))
        console.log('done')
    }

    const imgUrl = 'https://tmdb.org/t/p/w500';
    
    let imgSrc = movie.backdrop_path
    let path = `${imgUrl}${imgSrc}`
    return (
        <div className={s.MovieCard}>
            <div className={s.MovieCardImg}>
                <img src={path} alt={movie.title} />
            </div>
            <h2>{movie.title}</h2>
            <p>Language : {movie.original_language}</p>
            {/* <p>{movie.overview}</p> */}
            <p>{movie.release_date}</p>
            <button onClick={() => showMoreHandler()} >Show details</button>
            <button onClick={() => addToFavoriteHandler()} >Add to Favorite</button>
        </div>
    )
}

export default MovieCard;