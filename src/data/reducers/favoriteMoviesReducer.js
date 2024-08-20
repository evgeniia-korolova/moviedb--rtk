import { createSlice } from "@reduxjs/toolkit";


const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState: {
        favorite: []
    },
    reducers: {
        addToFavorite(state, action) {
            state.favorite.push(action.payload)
        },
        removeFromFavorite(state, action) {
            // let { id } = action.payload;
            state.favorite = state.favorite.filter(favorite => favorite.id !== action.payload)
        }
    }
})

export const {addToFavorite, removeFromFavorite } = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;