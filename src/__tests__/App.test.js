import React from 'react';
import axios from 'axios';

// Component imports
import App from '../App';

// Redux testing imports
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// RTL imports
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';

afterEach(cleanup);

// Mock the axios library to prevent calls to the API
jest.mock('axios');

describe('the App testing suite', () => {
  test('it mounts the App component', () => {
    const { getByText, getByRole, queryByText } = render(<App />);

    // Assert that the nav bar loaded
    const nav = getByText(/hacker news/i);
    expect(nav).toBeInTheDocument();

    // Assert that the search button loaded
    const searchButton = getByRole('button');
    expect(searchButton).toHaveTextContent(/search/i);
    expect(searchButton).toHaveAttribute('type', 'submit');

    // Assert stories have not loaded yet
    const story = queryByText(/story/i);
    expect(story).toBeNull();
  });

  test('it renders stories if the search form is submitted', async () => {
    // Create a mocked resolve call to axios
    axios.get.mockResolvedValue({
      data: {
        hits: [
          {
            title: 'Palindromes',
            points: 101,
            author: 'b0b',
            created_at: 1605285766227, // 11/13/2020, 11:43:19 AM
            story_text: 'madamimadam',
          },
        ],
      },
    });

    const { getByRole, getByText } = render(<App />);

    // Assert that the stories rendered after submitting the search form
    const searchButton = getByRole('button');
    fireEvent.click(searchButton); // No content in the search form is needed

    // Resolve the promise returned by the mock
    await waitFor(async () => {
      await getByText(/b0b/i);
    });

    // Assert that the mock was called
    const apiURLWithoutTerms =
      process.env.REACT_APP_API_URI + '?query=&tags=story';
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(apiURLWithoutTerms);
  });
});
