import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../reducers/moviesReducer";
import movieInfoReducer from "../reducers/movieInfoReducer";


let store = configureStore({
    reducer: {
        movies: moviesReducer,
        movieInfo: movieInfoReducer,
    }
})

export default store;