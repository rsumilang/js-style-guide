/**
 * Use slashes for single line comments that help clarify difficult segments of
 * your code. Don't use comments for trivial things.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/single-line-comments.md
 */

// Right

// 'ID_SOMETHING=VALUE' -> ['ID_SOMETHING=VALUE', 'SOMETHING', 'VALUE']
var matches = item.match(/ID_([^\n]+)=([^\n]+)/);

var isSessionValid = (session.expires < Date.now());
if (isSessionValid) {
  // ...
}

// Wrong

// Execute a regex
var matches = item.match(/ID_([^\n]+)=([^\n]+)/);

// Check if the session is valid
var isSessionValid = (session.expires < Date.now());
// If the session is valid
if (isSessionValid) {
  // ...
}
