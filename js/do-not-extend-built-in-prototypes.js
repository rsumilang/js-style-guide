/**
 * Do not extend built-in prototypes
 *
 * Do not extend the prototype of native JavaScript objects.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/do-not-extend-built-in-prototypes.md
 */

// Right
var a = [];
if (!a.length) {
  console.log('winning');
}

// Wrong
Array.prototype.empty = function() {
  return !this.length;
};

var a = [];
if (a.empty()) {
  console.log('losing');
}
