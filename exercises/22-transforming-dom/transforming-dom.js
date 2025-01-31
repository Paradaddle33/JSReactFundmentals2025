/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  const button = document.querySelector('.button.button-primary');
  const dogImage = document.getElementById('dogImage');

  button.addEventListener('click', function () {
      // Fetch new dog image from the URL
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
              // Update the src attribute of the image
              dogImage.src = data.message;
          })
          .catch(error => console.error('Error fetching the image:', error));
  });
})();
