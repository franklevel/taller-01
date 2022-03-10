module.exports = function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let curr = 0;

  for (const coin of coins) {
    if (coin > curr + 1) {
      return curr + 1;
    }

    curr += coin;
  }
  return curr + 1;
};
