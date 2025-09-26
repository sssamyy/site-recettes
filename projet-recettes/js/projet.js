//pour index
 
 function displaySearchedRecipe() {
  // check si il ya un mot enregistré
const searchTerm = sessionStorage.getItem("searchTerm");

if (searchTerm) {
  // afficher le resultat
  const filteredRecipes = recettesDB.filter((recipe) => {
    const recipeName = recipe.name.toLowerCase();
    return recipeName.includes(searchTerm);
  });

  if (filteredRecipes.length === 0) {
    recipeGrid.innerHTML = "<p>No recipes found</p>";
  } else {
    createGridItems(filteredRecipes);
  }
} else {
  // toute la liste des recettes
  createGridItems(recettesDB);
  searchInput.value = "";
}

}
document.addEventListener("DOMContentLoaded", function() {
  // appeler la fonction display ici
  displaySearchedRecipe();
});


/*search bar*/
/*catalogue*/



  function searchRecipes(event) {
    event.preventDefault();
    const searchInput = document.getElementById("search-input");
    

    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredRecipes = recettesDB.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(searchTerm);
    });
  
    if (filteredRecipes.length === 0) {
      recipeGrid.innerHTML = "<p>Aucune recette trouvée</p>";
      return;
    }
   
  
    createGridItems(filteredRecipes);
    searchInput.value = "";
   
  }
  
  
    
    /*créer la grille a partir du tableau recetteDB*/
  
   function createGridItems(data) {
    const gridContainer = document.getElementById('grid-container');

    let gridItems = "";
  
    data.forEach((item) => {
      const { name, category, country, duration, image } = item;
      gridItems += `
        <div class="grid-item">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <ul>
            <li><strong>Catégorie:</strong> ${item.category}</li>
            <li><strong>Pays:</strong> ${item.country}</li>
            <li><strong>Temps de préparation:</strong> ${item.duration}</li>

          </ul>
          
         
          <a href="details.html?id=${item.id}">
          <button class="btn-details">View Details</button>
        </a>
        </div>
      `;
    });
  
    gridContainer.innerHTML = gridItems;
  }
  
  createGridItems(recettesDB);
  

// Filtrer les recettes par categories
function filterRecipes(category) {
  const filteredRecipes = recettesDB.filter(recipe => {
    return category === '' || recipe.category === category;
  });
  createGridItems(filteredRecipes);
}

// changement category selection
const categorySelector = document.getElementById('category-selector');
categorySelector.addEventListener('change', (event) => {
  const category = event.target.value;
  filterRecipes(category);
});

   


    
/*une autre facon pour faire l'insertion des elements*/

  /*function createGridItems(data) {
    const gridContainer = document.getElementById("grid-container");
    
    data.forEach((item) => {
      const { name, category, country, duration, image } = item;
  
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      
      const img = document.createElement("img");
      img.src = image;
      img.alt = name;
      gridItem.appendChild(img);
      
      const h3 = document.createElement("h3");
      h3.textContent = name;
      gridItem.appendChild(h3);
      
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      li1.innerHTML = `<strong>Catégorie:</strong> ${category}`;
      ul.appendChild(li1);
      const li2 = document.createElement("li");
      li2.innerHTML = `<strong>Pays:</strong> ${country}`;
      ul.appendChild(li2);
      const li3 = document.createElement("li");
      li3.innerHTML = `<strong>Temps de préparation:</strong> ${duration}`;
      ul.appendChild(li3);
      gridItem.appendChild(ul);
  
      gridContainer.appendChild(gridItem);
    });
  };*/