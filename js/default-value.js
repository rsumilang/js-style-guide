/**
 * Use best practices to set a default value.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/default-value.md
 */

// Right
foo = foo || 'bar';

// Wrong
foo = foo ? foo : 'bar';
