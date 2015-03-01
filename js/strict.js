/**
 * In an effort to write "secure" JavaScript code, apply the "use strict"
 * directive and break bad programming habits.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/strict.md
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 */

// Right
function foo () {
  'use strict';
  var x = 'test';
}

// Wrong
function foo () {
  x = 'test';
}
