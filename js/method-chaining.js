/**
 * One method per line should be used if you want to chain methods.
 *
 * You should also indent these methods so it's easier to tell they are part of
 * the same chain.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/method-chaining.md
 */

// Right
User
  .findOne({name: 'foo'})
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

// Wrong
User
  .findOne({name: 'foo'})
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({name: 'foo'})
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({name: 'foo'}).populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({name: 'foo'}).populate('bar')
  .exec(function(err, user) {
    return true;
  });
