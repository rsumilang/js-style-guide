/**
 * Use lowerCamelCase for variables, properties and function names.
 *
 * Variables, properties and function names should use `lowerCamelCase`. They
 * should also be descriptive. Single character variables and uncommon
 * abbreviations should generally be avoided.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/lower-camel-case.md
 */

// Right
var adminUser = db.query('SELECT * FROM users ...');

// Wrong
var admin_user = db.query('SELECT * FROM users ...');
