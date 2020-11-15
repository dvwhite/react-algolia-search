import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component imports
import App from './App';

// Redux imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchReducer } from './reducers/searchReducer';

// The redux store
const store = createStore(searchReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
