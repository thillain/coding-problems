/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  if (!s || !t) return "";

  let targetMap = {};

  for (let char of t) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;

  let requiredCount = Object.keys(targetMap).length;
  let formed = 0;
  let windowMap = {};
  let minWindowInfo = [-1, 0, 0];
  console.log(targetMap, requiredCount);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));