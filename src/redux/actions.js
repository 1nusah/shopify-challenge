import { ADD_MOVIE, REMOVE_MOVIE, SEARCH_RESULTS } from './actionTypes';
export const addMovie = () => {
	return {
		type: ADD_MOVIE,
	};
};

export const removeMovie = (id) => {
	return {
		type: REMOVE_MOVIE,
		id,
	};
};
export const searchResults = (results) => {
	return {
		type: SEARCH_RESULTS,
		payload: results,
	};
};
