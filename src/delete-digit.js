const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nSrting = String(n);
  let result = 0;

  for (let i = 0; i < nSrting.length; i++) {
    const step = Number(nSrting.slice(0, i) + nSrting.slice(i + 1));
    if (step > result) {
      result = step;
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
