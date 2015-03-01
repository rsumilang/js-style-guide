/**
 * Use JSDoc for documenting classes and functions
 *
 * Using JSDoc will help developers understand the purpose and requirements of
 * your code. In addition, JSDoc will help (most) IDEs with type hinting.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/jsdoc-comments.md
 * @see http://usejsdoc.org/
 * @see http://en.wikipedia.org/wiki/JSDoc
 */

// Right

/**
 * Load User
 *
 * @param {number} id The id of the user
 * @param {function(a, b)} [cb] Callback handler
 * @todo Fix redis bug when incrementing counter
 */
function loadUser(id, cb) {
  // ...
}

// Wrong

// Usage: loadUser(5, function() { ... })
function loadUser(id, cb) {
  // ...
}
