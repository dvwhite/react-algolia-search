import React from 'react';
import axios from 'axios';

// Component imports
import SearchForm from '../components/SearchForm';

// Redux testing imports
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// RTL imports
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';

afterEach(cleanup);

// Mock the axios library so that requests aren't sent to the Hacker News API
jest.mock('axios');

// Test objects
const blankTestObject = {
  data: {
    hits: [
      {
        title: '',
        points: 0,
        author: '',
        created_at: 0,
        story_text: '',
      },
    ],
  },
};

const populatedTestObject = {
  data: {
    hits: [
      {
        title: 'Jokes',
        points: 1011,
        author: 'blankAuthor',
        created_at: 1605285766227, // 11/13/2020, 11:43:19 AM
        story_text: 'joking',
      },
    ],
  },
};

// Create a mock for the setResults prop passed down from App
const setResults = jest.fn();

describe('the SearchForm testing suite', () => {
  beforeEach(() => jest.clearAllMocks());

  test('it renders the component', () => {
    const { getByRole, getByPlaceholderText } = render(
      <SearchForm setResults={setResults} />
    );

    // Assert that the input element rendered
    const input = getByPlaceholderText(/search hacker news.../i);
    expect(input).toBeInTheDocument();

    // Assert that the button element rendered
    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('it calls the API when the search button is clicked', async () => {
    axios.get.mockResolvedValue(blankTestObject);

    const { getByRole } = render(<SearchForm setResults={setResults} />);

    // Assert the API was called on submit
    const button = getByRole('button');
    fireEvent.click(button);

    // Assert that the mock was called
    const apiURLWithoutTerms =
      process.env.REACT_APP_API_URI + '?query=&tags=story';
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(apiURLWithoutTerms);
  });

  test('it clears the search terms after the search button is clicked', async () => {
    axios.get.mockResolvedValue(blankTestObject);

    const { getByRole, getByPlaceholderText } = render(
      <SearchForm setResults={setResults} />
    );

    // Get a reference to the form elements
    const button = getByRole('button');
    const input = getByPlaceholderText(/search hacker news.../i);
    expect(input).toBeEmptyDOMElement(); // should initialize empty

    // Set the input value because it's a controlled component
    input.value = 'not important';
    expect(input.value).toBe('not important');

    // Assert that the text clears on form submit
    fireEvent.click(button);

    await waitFor(async () => {
      await expect(input).toBeEmptyDOMElement(); // state should reset on submit
    });
  });

  test('it saves the search results from the API to state', async () => {
    axios.get.mockResolvedValue(populatedTestObject);

    const { getByRole, getByPlaceholderText } = render(
      <SearchForm setResults={setResults} />
    );

    // Get a reference to the form elements
    const button = getByRole('button');
    const input = getByPlaceholderText(/search hacker news.../i);

    // Click the submit button to call setResults
    fireEvent.click(button);

    await waitFor(async () => {
      await expect(input).toBeEmptyDOMElement();
    });

    expect(setResults).toHaveBeenCalledTimes(1);
    expect(setResults).toHaveBeenCalledWith(populatedTestObject.data.hits);
  });
});
