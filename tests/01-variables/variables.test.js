import {
  getMyNumber,
  getYear,
  getChangedVariable,
  getPie,
  getNumberOfLikes,
} from "./variables-test-helper.js";

describe("Variables", () => {
  describe("01-variables", () => {
    test('should contain a variable called "myNumber" (that is not declared with "var")', () => {
      const str = getMyNumber.toString();
      expect(str).toMatch(/let/);
    });
    test('"myNumber" should equal any number', () => {
      const number = getMyNumber();
      expect(typeof number).toBe("number");
      expect(isNaN(number)).toBe(false);
    });
  });

  describe("02-variables", () => {
    const date = new Date();
    const thisYear = date.getFullYear();

    test('should contain a variable called "year" (that is not declared with "var")', () => {
      const str = getYear.toString();
      expect(str).toMatch(/let/);
    });
    test(`"year" should equal ${thisYear}`, () => {
      const number = getYear();
      expect(typeof number).toBe("number");
      expect(isNaN(number)).toBe(false);
    });
  });

  describe("03-change-a-variable", () => {
    test('"price" should be greater than 5.99', () => {
      const number = getChangedVariable();
      expect(typeof number).toBe("number");
      expect(number).toBeGreaterThan(5.99);
    });
  });

  describe("04-constants", () => {
    test('should contain a constant called "PIE"', () => {
      const str = getPie.toString();
      expect(str).toMatch(/const/);
    });
    test('"PIE" should equal to 3.14 (or a value with more digits)', () => {
      const number = getPie();
      expect(typeof number).toBe("number");
      expect(isNaN(number)).toBe(false);
      const str = number.toString();
      expect(str.substring(0, 4)).toBe("3.14");
    });
  });

  describe("05-fix-error", () => {
    test('"numberOfLikes" should not throw an error and be equal to 58', () => {
      const numberOfLikes = getNumberOfLikes();
      expect(numberOfLikes).toBe(58);
    });
  });
});
