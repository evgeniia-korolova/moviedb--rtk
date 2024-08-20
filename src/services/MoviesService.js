import axios from "axios";





const baseUrl = 'https://api.themoviedb.org/3/';
const imgUrl = 'https://tmdb.org/t/p/w500';
const API_KEY = 'd4ef1072498b844582d90d6ade6ff65f'; 
const page = 1;


export const fetchMovies = async () => {
	const response = await axios.get(
		`${baseUrl}discover/movie?api_key=${API_KEY}&page=${page}&with_genres=12`
	);
	return response.data;
};

export const fetchMovieById = async (movieId) => {
	const response = await axios.get(
		`${baseUrl}/movie/${movieId}?api_key=${API_KEY}`
	);
	return response.data;
};



async function getResource(url) {
	let res = axios.get(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res;
};

export const getAllMovies = () => {
	
//    axios
// 		.get(
// 			`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&with_genres=12`
// 		)
// 		.then((response) => {
// 			console.log(response.data.results);
// 			dispatch(setMovies(response.data.results));
// 		});
}

export const getSingleMovie = (movieId) => {
    getResource(
		`${baseUrl}movie/${movieId}?api_key=${API_KEY}`
	);
}

export const getImage = () => {
     getResource(`${imgUrl}movie/?api_key=${API_KEY}`);
}