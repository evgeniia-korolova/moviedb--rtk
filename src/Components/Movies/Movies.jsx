import { Route, Routes } from "react-router-dom";
import MoviesGallery from "./MoviesGallery/MoviesGallery";
import MovieInfo from "./MovieInfo/MovieInfo";


const Movies = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<MoviesGallery />} />
                <Route path='/movie/:movieId' element={<MovieInfo/>} />
            </Routes>
            
            
        </div>
    )
}

export default Movies;