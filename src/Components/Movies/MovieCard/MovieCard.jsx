import { useNavigate } from "react-router-dom";
import s from './MovieCard.module.scss';


const MovieCard = ({ movie }) => {

    let navigate = useNavigate();

    const showMoreHandler = () => {
        navigate(`/movie/${movie.id}`)
        console.log(movie.id)
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
            <p>{movie.original_language}</p>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <button onClick={showMoreHandler} >Show details</button>
        </div>
    )
}

export default MovieCard;