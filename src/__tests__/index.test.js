import React from 'react';
import ReactDOM from 'react-dom';

// Component imports
import App from '../App';

// RTL imports
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

// Mock ReactDOM.render
jest.mock('react-dom', () => ({
  render: jest.fn(),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [],
  },
}));

describe('index.js testing suite', () => {
  test('it loads the index.js page', () => {
    // Simulate the creation and appending of the root element to the DOM
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    // Trigger the render method by requiring index.js
    require('../index.js');

    // Tests that ReactDOM.render has been called, and with App and the root node
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
    expect(ReactDOM.render).toHaveBeenLastCalledWith(<App />, root);
  });
});
