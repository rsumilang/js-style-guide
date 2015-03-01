/**
 * Array / Map creation
 *
 * Use trailing commas and put *short* declarations on a single line. Only
 * quote keys when your interpreter complains.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/array-map-creation.md
 */

// Right
var a = ['hello', 'world'];
var b = {
  good: 'code',
  'is generally': 'pretty'
};

// Wrong

var a = [
  'hello', 'world'
];
var b = {"good": 'code'
        , is generally: 'pretty'
        };
