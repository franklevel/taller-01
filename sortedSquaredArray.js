module.exports = function sortedSquaredArray(arr) {
  return arr?.map((el) => Math.pow(el, 2)).sort((a, b) => a - b);
};
