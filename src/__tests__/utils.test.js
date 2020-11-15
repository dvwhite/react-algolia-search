import { replaceStoryText } from '../utils/utils';

const storyTextRaw = 'First<p>Second<p>Third';
const storyTextRawUnicode = 'First&#60;p&#62;Second&#60;p&#62;Third';
const storyTextExpected = 'First<br /><br />Second<br /><br />Third';

describe('the ./utils/utils.js testing suite', () => {
  test('the function cleans text without unicode characters', () => {
    expect(replaceStoryText(storyTextRaw)).toBe(storyTextExpected);
  });

  test('the function cleans text with unicode characters', () => {
    expect(replaceStoryText(storyTextRawUnicode)).toBe(storyTextExpected);
  });

  test('only modifies the argument if the argument is truthy', () => {
    expect(replaceStoryText('')).toBe('');
  });
});
