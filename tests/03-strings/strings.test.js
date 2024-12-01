import {
  getName,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
} from "./strings-test-helper.js";

describe("Strings", () => {
  describe("01-create-a-string", () => {
    test('should contain a variable called "myName" that is equal to your name', () => {
      const name = getName();
      expect(typeof name).toBe("string");
      expect(name.length).toBeGreaterThan(1);
    });
  });

  describe("02-get-character-position", () => {
    test('should contain a variable "characterPosition" and it should be equal to the index of "letter" within "firstName"', () => {
      expect(getTheCharacterPosition("James", "a")).toBe(1);
    });
  });

  describe("03-string-length", () => {
    test('should contain a constant "strLength" and it should count the number of characters within a string "str"', () => {
      expect(stringLength("Javascript")).toBe(10);
    });
  });

  describe("04-get-last-character", () => {
    test('should contain a constant called "lastCharacter" and it should equal lastCharacter the last character (or letter) within the string "str"', () => {
      expect(getLastCharacter("Marvel")).toBe("l");
    });
  });

  describe("05-get-last-word-in-place-name", () => {
    test('should contain a variable "newPlace" that is equal to the second word within a place name "place"', () => {
      expect(getLastWordInPlaceName("Los Angeles")).toBe("Angeles");
    });
  });
});
