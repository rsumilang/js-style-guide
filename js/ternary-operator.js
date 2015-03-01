/**
 * Use the ternary operator to do simple if / else logic. You may also use
 * multiple lines to indent the ternary result and break the 2 space
 * indentation rule and use 4.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/ternary-operator.md
 */

// Right
var good = test ? foo() : bar();

// Right
var good = test ?
    foo() :
    bar();

// Wrong
if (test) {
  var good = foo();
} else {
  var good = bar();
}
