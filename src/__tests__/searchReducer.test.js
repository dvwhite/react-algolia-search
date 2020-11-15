// RTL imports
import '../utils/test/testUtils';
import { searchReducer, initialState } from '../reducers/searchReducer';
import { ADD_SEARCH_TERM } from '../actions';

describe('the search terms reducer testing suite', () => {
  test('the initial state is returned for unrecognized action types', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  test('action types are executed as specified in the reducer', () => {
    expect(
      searchReducer(initialState, {
        type: ADD_SEARCH_TERM,
        payload: 'testing redux',
      })
    ).toEqual({
      searchTerms: ['testing redux'],
    });
  });
});
