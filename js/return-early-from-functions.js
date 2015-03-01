/**
 * To avoid deep nesting of if-statements, always return a function's value as
 * early as possible.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/return-early-from-function.md
 */

// Right
function isPercentage(val) {
  if (val < 0) {
    return false;
  }

  if (val > 100) {
    return false;
  }

  return true;
}

// Wrong
function isPercentage(val) {
  if (val >= 0) {
    if (val < 100) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// This example can shorten things further
function isPercentage(val) {
  var isInRange = (val >= 0 && val <= 100);
  return isInRange;
}
