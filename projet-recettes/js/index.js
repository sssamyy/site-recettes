/*index*/

// Define a function to generate three random recipes
function generateRandomRecipes() {
    let randomIds = [];
    while (randomIds.length < 3) {
      let randomId = Math.floor(Math.random() * 10) + 1;
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    return randomIds.map(id => recettesDB.find(recipe => recipe.id === id));
  }
  
  // Call the generateRandomRecipes function to get three random recipes
  let randomRecipes = generateRandomRecipes();
  
  // Define a function to display a recipe in HTML
  function displayRecipe(recipe) {
    let html = `
    
  
      
      <div class="col-md-4">
         <div id="ho_shad" class="services_box text_align_left">
            <h3>${recipe.name}</h3>
            <figure><img src="${recipe.image}" alt="#"/></figure>
            <p>${recipe.category}</p>
            <a class="read_more" href="catalogue.html">Voir tous</a>
         </div>
      </div>
      </div>
    `;
    return html;
  }
  
  // Display the three random recipes in the HTML
  let rando = document.querySelector('#random-recipes');
  randomRecipes.forEach(recipe => {
    rando.innerHTML += displayRecipe(recipe);
  });
  
  /*search bar*/
  function searchRecipesAndRedirect(event) {
    event.preventDefault();
    const searchInput = document.getElementById("search-input");
    
    const searchTerm = searchInput.value.toLowerCase().trim();
  
    const filteredRecipes = recettesDB.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(searchTerm);
    });
  
    if (filteredRecipes.length === 0) {
      recipeGrid.innerHTML = "<p>No recipes found</p>";
      return;
    }
  
    // store the searched term in session storage so we can retrieve it later
    sessionStorage.setItem("searchTerm", searchTerm);
     // redirect to catalogue.html
    if ( searchTerm !== '') {
      
    window.location.href = "catalogue.html";}
    
    }
    
  
 
  
  
  
  