const nonConstructibleChange = require("./nonConstructibleChange");

describe("non constructible change", () => {
  it("should return 20", () => {
    expect(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])).toEqual(20);
  });
  it("should return 6", () => {
    expect(nonConstructibleChange([1, 1, 1, 1, 1])).toEqual(6);
  });
  it("should return 55", () => {
    expect(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])).toEqual(
      55
    );
  });
});
