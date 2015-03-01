/**
 * Limit your lines to 80 characters. This is useful if you sometimes work in
 * a terminal like me and useful when doing diffs in split screens.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/80-characters-per-line.md
 */

// Right
if (true) {
  var email = 'foo@bar.com';
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var isEmail = regex.test(email);
}

// Wrong
if (true) {
  var email = 'foo@bar.com';
  var isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}