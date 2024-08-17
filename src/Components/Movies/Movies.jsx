import { Route, Routes } from "react-router-dom";
import MoviesGallery from "./MoviesGallery/MoviesGallery";
import MovieInfo from "./MovieInfo/MovieInfo";
import s from './Movies.module.scss'

const Movies = () => {


    return (
        <div className={s.Movies}>
            <nav>
                <h2>Genres</h2>
            </nav>
            <div>

            <Routes>
                <Route path="/" element={<MoviesGallery />} />                
                <Route path='/movie/:movieId' element={<MovieInfo/>}/>
            </Routes>
            </div>
            
            
        </div>
    )
}

export default Movies;