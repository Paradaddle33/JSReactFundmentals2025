document.addEventListener("DOMContentLoaded", async function () {
  const dropdown = document.getElementById("dropdown");
  const mainImg = document.getElementById("get-schwifty");

  try {
    // Fetch list of characters from the API
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const data = response.data;

    // Populate the dropdown with character names
    data.results.forEach(character => {
      const option = document.createElement("option");
      option.value = character.id;
      option.textContent = character.name;
      dropdown.appendChild(option);
    });

    // Add event listener for character selection
    dropdown.addEventListener("change", async function () {
      const characterId = dropdown.value;

      if (characterId && characterId !== "Select a character") {
        // Fetch the selected character's details
        const characterResponse = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        const characterData = characterResponse.data;

        // Update the character image
        mainImg.src = characterData.image;
        mainImg.alt = characterData.name;
      } else {
        // Reset the character image if no character is selected
        mainImg.src = "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg";
        mainImg.alt = "Get Schwifty";
      }
    });
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
});
