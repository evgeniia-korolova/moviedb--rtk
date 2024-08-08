import { useNavigate } from "react-router-dom"


const MovieCard = ({ movie }) => {

    let navigate = useNavigate();

    const showMoreHandler = () => {
        navigate(`movie/${movie.id}`)
    }
    
    let imgSrc = movie.backdrop_path
    let path = `https://themoviedb${imgSrc}`
    return (
        <div>
            <div>
                <img src={path} alt={movie.title} />
            </div>
            <h2>{movie.title}</h2>
            <p>{movie.original_language}</p>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <button onClick={showMoreHandler} >Show more</button>
        </div>
    )
}

export default MovieCard;