const sortedSquaredArray = require("./sortedSquaredArray");

describe("sorted squared array", () => {
  it("should return [ 1, 4, 9, 25, 36, 64, 81 ]", () => {
    expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([
      1, 4, 9, 25, 36, 64, 81,
    ]);
  });
  it("should return [1, 4]", () => {
    expect(sortedSquaredArray([-2, -1])).toEqual([1, 4]);
  });
  it("should return [0, 25, 25, 100, 100]", () => {
    expect(sortedSquaredArray([-10, -5, 0, 5, 10])).toEqual([
      0, 25, 25, 100, 100,
    ]);
  });
});
