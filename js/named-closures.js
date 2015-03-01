/**
 * Naming your closures will produce better stack traces, heap and cpu
 * profiles.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/named-closures.md
 */

// Right
req.on('end', function onEnd() {
  console.log('winning');
});

// Wrong
req.on('end', function() {
  console.log('losing');
});
