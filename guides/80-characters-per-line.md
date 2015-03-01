# 80 Characters Per Line

Limit your lines to 80 characters. This is useful if you sometimes work in
a terminal like me and useful when doing diffs in split screens.

[JavaScript](../js/80-characters-per-line.js)

*Right:*

```js
if (true) {
  var email = 'foo@bar.com';
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var isEmail = regex.test(email);
}
```

*Wrong:*

```js
if (true) {
  var email = 'foo@bar.com';
  var isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}
```