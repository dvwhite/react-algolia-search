export const ADD_SEARCH_TERM = 'ADD_SEARCH_TERM';

export const addSearchTerm = (searchTerm) => {
  return {
    type: ADD_SEARCH_TERM,
    payload: searchTerm,
  };
};
