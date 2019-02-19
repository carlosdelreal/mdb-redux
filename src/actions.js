import { MOVIE_BASE_PATH, MOVIE_API } from './data/api';

export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';
export const GET_MOVIES = 'GET_MOVIES';

export function toggleMessage() {
	return {
		type: 'TOGGLE_MESSAGE'
	};
}

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
