import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		movies: [],

		loading: true,
		error: false,
		newItemLading: false,
        pages: 1,
	},
    
	reducers: {
		setMovies(state, action) {
			return { ...state, movies: [...action.payload] };
			// state.movies = action.payload
		},

		setPages(state, action) {
			state.pages += 1;
		},
	},
});

export const {setMovies, setPages} = moviesSlice.actions;

export default moviesSlice.reducer;