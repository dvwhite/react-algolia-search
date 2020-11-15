/**
 * Parse a string containing unicode characters
 * @param {string} strToParse: The string to parse from Unicode
 * @returns {string}
 */
function replaceStoryText(strToParse) {
  // Replace <p> text and unicode equivalent with a break element
  const pCharText = '<p>'; // Signifies a line feed char
  const pCharUnicode = '&#60;p&#62;'; // The same line feed char in unicode
  const lineBreaks = '<br /><br />';

  // Using string.split.join is compatible with older browsers
  if (strToParse) {
    // An object containing each origin character and what to replace it with
    const replacements = {
      [pCharText]: lineBreaks,
      [pCharUnicode]: lineBreaks,
    };

    // Replace each character in the replacements object
    for (let key in replacements) {
      strToParse = strToParse.split(key).join(replacements[key]);
    }
  }
  return strToParse;
}

export { replaceStoryText };
