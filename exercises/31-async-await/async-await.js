(function () {
  const button = document.querySelector('[type = "button"]');
  const blockquote = document.querySelector("#quote");
  //console.log(button);
 // console.log(blockquote);
  
 button.addEventListener('click', async function () {
  //console.log('click');
  try {
    // Fetch new dog image from the URL using async and await
    const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = response.data;
    //console.log(data[0]);
    blockquote.textContent = data[0];

    // Update the src attribute of the image
  } catch (error) {
    console.error('Error fetching the image:', error);
  }
});
})();
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what Ron Swanson's opinions are.
   *
   * Please use async & await to solve this problem.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
