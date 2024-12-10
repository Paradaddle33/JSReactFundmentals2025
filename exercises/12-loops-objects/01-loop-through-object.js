const links = {
  Dogs: "http://www.omfgdogs.com",
  Kittens: "https://giphy.com/search/kitten",
  "Hamster Dance": "https://hamster.dance/hamsterdance/",
};

// Create the variable "html"
let html = "";

// Loop through all properties within the "links" object
for (let key in links) {
  if (links.hasOwnProperty(key)) {
    html += `<a href="${links[key]}">${key}</a>`;
  }
}

console.log(html);