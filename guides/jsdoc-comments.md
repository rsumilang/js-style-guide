# Use JSDoc for documenting classes and functions

Using JSDoc will help developers understand the purpose and requirements of
your code. In addition, JSDoc will help (most) IDEs with type hinting.

- http://usejsdoc.org/
- http://en.wikipedia.org/wiki/JSDoc

[JavaScript](../js/jsdoc-comments.js)

*Right:*

```js
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
```

*Wrong:*

```js
// Usage: loadUser(5, function() { ... })
function loadUser(id, cb) {
  // ...
}
```