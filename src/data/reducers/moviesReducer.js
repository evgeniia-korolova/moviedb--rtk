import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: []
    },
    reducers: {
        setMovies(state, action) {
            return { ...state, movies: [...action.payload] }
            // state.movies = action.payload
        }
    }
})

export const {setMovies} = moviesSlice.actions;

export default moviesSlice.reducer;