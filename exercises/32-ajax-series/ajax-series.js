(async function () {
  
  const dropdown = document.getElementById("dropdown");

  try {
    // Fetch new dog image from the URL using async and await
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const data = response.data;
    //console.log(data[0]);
    console.log(response);
    

    // Update the src attribute of the image
  } catch (error) {
    console.error('Error fetching the image:', error);
  };

  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */
})();
