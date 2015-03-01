/**
 * Use for...in correctly with Objects
 *
 * Functions inherited from prototypes are included when extending objects. To
 * insure checking against the correct property, use `hasOwnProperty`.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/for-in.md
 */

// Right
for (var bar in foo) {
  if (foo.hasOwnProperty(bar)) {
    // do something.
  }
}

// Wrong
for (var bar in foo) {
  // do something.
}
