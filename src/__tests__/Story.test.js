import React from 'react';

// Component imports
import Story from '../components/Story';

// RTL imports
// import { render, cleanup } from '@testing-library/react';
import { render, cleanup } from '../utils/test/testUtils';

afterEach(cleanup);

// Test objects
const testStory = {
  title: 'Jokes',
  points: 1011,
  author: 'blankAuthor',
  created_at: 1605285766227, // 11/13/2020, 11:43:19 AM
  story_text: 'joking',
  idx: 1,
};

describe('the Story test suite', () => {
  test('the component mounts', () => {
    const { getByText } = render(<Story data={testStory} />);

    // Assert that the story renders with the test data
    const storyTitle = getByText(/jokes/i);
    expect(storyTitle).toBeInTheDocument();
  });
});
