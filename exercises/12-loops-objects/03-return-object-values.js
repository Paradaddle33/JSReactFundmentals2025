const blogPost = {
  title: "Building a Form Validation API",
  author: "Mark Marshall",
  date: "2021-08-05",
  content:
    "It's required! Let's learn how to leverage the JavaScript Constraint API to remind your users when they need to finish filling out those pesky form fields. And we will show you how to do this with keeping accessibility in mind. ...",
}; // e.g.

/**
 * Create an array called "values".
 * It should be equal to all the values within the "blogPost" object.
 */

// Extract all values from the "blogPost" object
let values = Object.values(blogPost);

console.log(values);

