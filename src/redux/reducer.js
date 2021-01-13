import { ADD_MOVIE, REMOVE_MOVIE, SEARCH_RESULTS } from './actionTypes';
const initialState = {
	nominationList: [],
	searchResults: [],
};
const nominationListReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return {
				...state,
				nominationList: [...state.nominationList, action.item],
			};
		case REMOVE_MOVIE:
			let newList = [...state.nominationList];
			const index = state.nominationList.findIndex(
				(nominationItem) => nominationItem.id === action.id
			);
			console.log('index is ', index);
			if (index >= 0) {
				newList.splice(index, 1);
				console.log(newList);
			} else {
				console.warn(`cant remove item as it is not in the list`);
			}
			return { ...state, nominationList: newList };
		case SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.payload,
			};
		default:
			return state;
	}
};

export default nominationListReducer;
