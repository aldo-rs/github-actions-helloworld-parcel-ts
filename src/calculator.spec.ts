import { Calculator } from "./calculator";

describe("Calculator", () => {
  test("should add two numbers", () => {
    const given = "2 + 2";
    const calculator = new Calculator();

    const actual = calculator.calculate(given);

    expect(actual).toBe(4);
  });
});
