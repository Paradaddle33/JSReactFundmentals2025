const obj1 = { firstName: "John" }; // e.g.
const obj2 = { lastName: "Snow" }; // e.g.

/**
 * Create an object called "myObject".
 *  It should be equal to "obj1" and "obj2" combined.
 *
 * @example
 * console.log(myObject);
 * // { firstName: "Clark", lastName: "Kent" }
 *
 * Your answer should still work when "obj1" and "obj2" are different objects.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
const myObject = { ...obj1, ...obj2 };
 
console.log(myObject);