import { ADD_SEARCH_TERM } from '../actions/index';

// Store the search terms in an array of strings
// Note: existing whitespace is included since it can influence search results
const initialState = {
  searchTerms: [],
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SEARCH_TERM:
      return {
        ...state,
        searchTerms: [...state.searchTerms, action.payload], // append to existing search terms
      };
    default:
      return state;
  }
}

export default searchReducer;
