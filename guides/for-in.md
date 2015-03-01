# For...in

Use for...in correctly with Objects

Functions inherited from prototypes are included when extending objects. To
insure checking against the correct property, use `hasOwnProperty`.

*Right:*

```js
for (var bar in foo) {
  if (foo.hasOwnProperty(bar)) {
    // do something.
  }
}
```

*Wrong:*

```js
for (var bar in foo) {
  // do something.
}
```