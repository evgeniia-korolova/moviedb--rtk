import axios from "axios";


const baseUrl = 'https://api.themoviedb.org/3/';
const imgUrl = 'https://tmdb.org/t/p/w500';
const API_KEY = 'd4ef1072498b844582d90d6ade6ff65f'; 
const page = 1;

async function getResource(url) {
	let res = axios.get(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}

	return await res;
};

export const getAllMovies = () => {
    return getResource(
		`${baseUrl}discover/movie?api_key=${API_KEY}&page=${page}&with_genres=12`
	);
}

export const getSingleMovie = (movieId) => {
    getResource(
		`${baseUrl}movie/${movieId}?api_key=${API_KEY}`
	);
}

export const getImage = () => {
     getResource(`${imgUrl}movie/?api_key=${API_KEY}`);
}