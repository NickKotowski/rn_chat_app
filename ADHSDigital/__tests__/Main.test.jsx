const Main = require('../src/screens/main.tsx');

describe("add", () => {
  it("should add two numbers", () => {
    expect(Main.add(1, 1)).toEqual(2);
  });
});
