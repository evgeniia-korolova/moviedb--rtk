import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../reducers/moviesReducer";
import movieInfoReducer from "../reducers/movieInfoReducer";
import favoriteMoviesReducer from "../reducers/favoriteMoviesReducer";


let store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieInfo: movieInfoReducer,
        favoriteMovies: favoriteMoviesReducer
    }
})

export default store;