import React from 'react';

// RTL imports
import { render as rtlRender } from '@testing-library/react';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Reducer imports
import { searchReducer } from '../../reducers/searchReducer';

// Custom render function overrides the render function in RTL
// It wraps tested components in the Provider component from react-redux
function render(
  ui,
  {
    initialState,
    store = createStore(searchReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything in RTL
export * from '@testing-library/react';

// export the extended render method
export { render };
