// RTL imports
import '../utils/test/testUtils';

// Redux imports
import configureStore from 'redux-mock-store';
import { ADD_SEARCH_TERM, addSearchTerm } from '../actions/index';
import { initialState } from '../reducers/searchReducer';

// Mock the redux store using redux-mock-store
const middleware = [];
const mockStore = configureStore(middleware);

describe('the Redux actions testing suite', () => {
  test('addSearchTerm returns an action with the expected shape', () => {
    const store = mockStore(initialState);
    const testSearchTerms = 'test search terms';

    // Dispatch actions and assert that the desired shape is returned
    store.dispatch(addSearchTerm(testSearchTerms));
    const actions = store.getActions();
    const expectedPayload = {
      type: ADD_SEARCH_TERM,
      payload: testSearchTerms,
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
