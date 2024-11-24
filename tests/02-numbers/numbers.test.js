import {
  add,
  subtract,
  getPercentage,
  increment,
  decrement,
  getOrderOfOperations,
} from "./numbers-test-helper.js";

describe("Numbers", () => {
  describe("01-add", () => {
    test('should contain a constant called "sum" that should result in a number', () => {
      const number = add();
      expect(typeof number).toBe("number");
      expect(isNaN(number)).toBe(false);
    });
    test('"sum" should equal to one number plus another', () => {
      const str = add.toString();
      expect(str).toMatch(/\+/);
      expect(str).toMatch(/\+/);
    });
  });

  describe("02-subtract", () => {
    test('should contain a variable "difference" equal to the numbers "b" minus "a"', () => {
      const difference = subtract(3, 20);
      expect(difference).toBe(17);
    });
  });

  describe("03-multiple-and-divide", () => {
    test('should contain a constant called "percentage" that should result in a number', () => {
      const number = getPercentage();
      expect(typeof number).toBe("number");
      expect(isNaN(number)).toBe(false);
    });
    test('"percentage" should equal to one number divided by another times the constant "ONE_HUNDRED"', () => {
      const str = getPercentage.toString();
      expect(str).toMatch(/\=/);
      expect(str).toMatch(/\//);
      expect(str).toMatch(/\*/);
      const array = str.split("ONE_HUNDRED");
      expect(array.length).toBeGreaterThan(2);
    });
  });

  describe("04-increment", () => {
    test('should use the increment operator to increment the variable "age" by 1', () => {
      expect(increment.toString()).toMatch(/\+\+/);
      expect(increment(19)).toBe(20);
    });
  });

  describe("05-decrement", () => {
    test('should use the decrement operator to decrement the variable "age" by 1', () => {
      expect(decrement.toString()).toMatch(/--/);
      expect(decrement(18)).toBe(17);
    });
  });

  describe("06-order-of-operations", () => {
    test("should equal the number 800", () => {
      const number = getOrderOfOperations();
      expect(typeof number).toBe("number");
      expect(number).toBe(800);
    });
    test("should still contain a plus (+) and multiple (*) sign", () => {
      const str = getOrderOfOperations.toString();
      expect(str).toMatch(/\=/);
      expect(str).toMatch(/\+/);
      expect(str).toMatch(/\*/);
    });
  });
});
