(function () {
  const button = document.querySelector('.button.button-primary');
  const dogImage = document.getElementById('image');

  button.addEventListener('click', async function () {
    try {
      // Fetch new dog image from the URL using async and await
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      const data = response.data;

      // Update the src attribute of the image
      dogImage.src = data.message;
    } catch (error) {
      console.error('Error fetching the image:', error);
    }
  });
})();
