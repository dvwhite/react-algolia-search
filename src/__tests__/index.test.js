import React from 'react';
import ReactDOM from 'react-dom';

// Component imports
import App from '../App';

// RTL imports
import { cleanup } from '@testing-library/react';

// Redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import searchReducer from '../reducers/searchReducer';
const store = createStore(searchReducer, []);

afterEach(cleanup);

// Mock ReactDOM.render
jest.mock('react-dom', () => ({
  render: jest.fn(),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [],
  },
}));

// Mock the redux store functions
// This allows jest.mock.toHaveBeenCalledWith to successfully compare Redux stores
// passed to it
function mockFunction() {
  return {};
}

// Mock the redux store
jest.mock('redux', () => ({
  createStore: () => {
    return {
      dispatch: mockFunction,
      getState: mockFunction,
      replaceReducer: mockFunction,
      subscribe: mockFunction,
    };
  },
}));

describe('index.js testing suite', () => {
  test('it loads the index.js page', () => {
    // Simulate creating and appending the root element to the DOM
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Trigger the render method by requiring index.js
    require('../index.js');

    // Tests that ReactDOM.render has been called, and with App and the root node
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
        <App />
      </Provider>,
      root
    );
  });
});
