import React from 'react';

// Component imports
import StoryList from '../components/StoryList';

// Redux testing imports
// import configureStore from 'redux-mock-store';
// import { Provider } from 'react-redux';

// RTL imports
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

// Test objects
const testStories = [
  {
    title: 'Jokes',
    points: 1011,
    author: 'blankAuthor',
    created_at: 1605285766227, // 11/13/2020, 11:43:19 AM
    story_text: 'joking',
    idx: 1,
  },
  {
    title: 'React',
    points: 10000,
    author: 'fb',
    created_at: 1605285766227, // 11/13/2020, 11:43:19 AM
    story_text: 'programming',
    idx: 2,
  },
];

describe('the Story test suite', () => {
  test('the component mounts', () => {
    const { getByTestId } = render(<StoryList stories={null} />);

    // Assert the stories container element renders
    const storyContainer = getByTestId('story-list-container');
    expect(storyContainer).toBeInTheDocument();
  });

  test('the Story components render', () => {
    const { getByText } = render(<StoryList stories={testStories} />);

    // Assert that each story renders with the test data
    const storyTitle1 = getByText(/jokes/i);
    expect(storyTitle1).toBeInTheDocument();

    const storyTitle2 = getByText(/react/i);
    expect(storyTitle2).toBeInTheDocument();
  });
});
