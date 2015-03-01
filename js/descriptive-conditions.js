/**
 * Any non-trivial conditions should be assigned to a descriptively named
 * variable or function:
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/descriptive-conditions.md
 */

// Right
var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
  console.log('winning');
}

// Wrong
if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
  console.log('losing');
}
