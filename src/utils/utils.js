/**
 * Parse a string containing unicode characters
 * @param {string} strToParse: The string to parse from Unicode
 * @returns {string} 
 */
function replaceStoryText(strToParse) {
  // Replace <p> text and unicode equivalent with a break element
  const pCharText = '<p>'; // Signifies a line feed char
  const pCharUnicode = '&#60;p&#62;'; // The same line feed char in unicode
  const lineBreaks = '<br /><br />'

  // Using string.split.join is compatible with older browsers
  if (strToParse) {
    strToParse = strToParse.split(pCharText).join(lineBreaks);
    strToParse = strToParse.split(pCharUnicode).join(lineBreaks);
    return strToParse;
  }
}

export { replaceStoryText }
