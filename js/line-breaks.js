/**
 * Text files in unix end with a new line character. Appending a new line to
 * the end of your JavaScript source will help utilities that are designed to
 * operate on text files.
 *
 * In addition, only use unix line breaks in your strings. Mixing in unix and
 * windows line breaks only makes things harder to parse.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/line-breaks.md
 */

// Right
console.log("Use UNIX new lines like this ->\n");

// Wrong
console.log("Windows -> \r\n");