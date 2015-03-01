/**
 * Use the triple equality operator as it will work just as expected.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/eqeqeq.md
 */

// Right
var a = 0;
if (a !== '') {
  console.log('winning');
}

// Wrong
var a = 0;
if (a == '') {
  console.log('losing');
}
