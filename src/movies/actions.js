import { MOVIE_BASE_PATH, MOVIE_API } from './api';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export function getMovies() {
	return async function (dispatch) {
		const res = await fetch(`${MOVIE_BASE_PATH}discover/movie?${MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
		const movies = await res.json();
		return dispatch({
			type: 'GET_MOVIES',
			data: movies.results
		});
	}
}

export function getMovie(id) {
	return async function (dispatch) {
		const res = await fetch(`${MOVIE_BASE_PATH}movie/${id}?${MOVIE_API}&language=en-US`);
		const movie = await res.json();
		return dispatch({
			type: 'GET_MOVIE',
			data: movie
		});
	}
}

export function resetMovie() {
	return {
		type: 'RESET_MOVIE'
	};
}
