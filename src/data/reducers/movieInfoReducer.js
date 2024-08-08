import { createSlice } from '@reduxjs/toolkit';

const movieInfoSlice = createSlice({
	name: 'movieInfo',
	initialState: {
		movie: {},
	},
	reducers: {
		setMovie(state, action) {
			return { ...state, movie: [...action.payload] };
			// state.movie = action.payload
		},
	},
});

export const { setMovie } = movieInfoSlice.actions;

export default movieInfoSlice.reducer;
