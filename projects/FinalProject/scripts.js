const appId = "3c574830"; // Your APP_ID
const appKey = "046f8d2126a77c47f5273f2ccb866263"; // Your APP_KEY
const email = "Edamam-Account-User: Paradaddle333"
// Categories for dropdowns
const categories = ["pork", "beef", "poultry", "fish", "vegetarian"];

// Populate dropdowns for each category
const minimalRequest = { ingr: ["1 apple"] }; 

async function populateDropdowns() {
  categories.forEach(async (category) => {
    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&dishType=${category}&random=true`;
    const dropdown = document.getElementById(`${category}-recipes`);

    try {
      const response = await fetch(apiUrl,{
        method:"GET",
        headers:{
        'Edamam-Account-User': 'Paradaddle333'
        }, 

      });
      const data = await response.json();
      console.log(data); 

      dropdown.innerHTML = '<option value="">--Select a Recipe--</option>'; // Reset dropdown
      data.hits.forEach((hit) => {
        const option = document.createElement("option");
        option.value = JSON.stringify(hit.recipe); // Store recipe as JSON in value
        option.textContent = hit.recipe.label;
        dropdown.appendChild(option);
      });
    } catch (error) {
      console.error(`Error fetching ${category} recipes:`, error);
      dropdown.innerHTML = '<option value="">--Error Loading Recipes--</option>';
    }
  });
}

// Add selected recipe to the meal plan
function addToMealPlan(dropdown) {
  const selectedRecipe = dropdown.value;

  if (selectedRecipe) {
    const recipe = JSON.parse(selectedRecipe); // Parse the stored recipe JSON
    const mealPlan = document.getElementById("meal-plan");

    // Add recipe to meal plan
    const mealItem = document.createElement("div");
    mealItem.innerHTML = `
      <h3>${recipe.label}</h3>
      <p>Calories: ${Math.round(recipe.calories)}</p>
      <a href="${recipe.url}" target="_blank">View Full Recipe</a>
    `;
    mealPlan.appendChild(mealItem);

    // Replace placeholder text if necessary
    if (mealPlan.firstChild.tagName === "P") {
      mealPlan.firstChild.remove();
    }

    // Reset dropdown selection
    dropdown.selectedIndex = 0;
  }
}

// Initialize dropdowns on page load
window.onload = populateDropdowns;
