// afficher les details
function displayRecipeDetails(recipeId) {
  //trouver la recette pr l'id
  const recipe = recettesDB.find(recipe => recipe.id === recipeId);
  //calculer la moyenne de la recette 
  const averageRating = calculateAverageRating(recipe.comments);
  //construction de l'HTML
  if (recipe) {
    const recipeDetailsHTML = `
    <div class="recipeDetails">
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="detailsdroite">
      <p><strong>Note moyenne:</strong> ${averageRating}</p>
      <p><strong>Category:</strong> ${recipe.category}</p>
      <p><strong>Country:</strong> ${recipe.country}</p>
      <p><strong>Duration:</strong> ${recipe.duration}</p>
      </div>
      <h3 >Ingredients:</h3>
      <ul id="ingredients">
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      <h3>Instructions:</h3>
      <ol id="ingredients">
        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
      </ol>
      <h3>Comments:</h3>
      <ul id="ingredients" class="comment-list">
        ${recipe.comments.map(comment => `<li><strong>${comment.user}:</strong> ${comment.content} (${comment.rating})</li>`).join('')}
      </ul>
      <div>
    `;

    document.getElementById('recipe-details').innerHTML = recipeDetailsHTML;
  }
}
//la fonction pour calculer la moyenne
function calculateAverageRating(comments) {
  if (comments.length === 0) {
    return "No ratings";
  }

  const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
  const averageRating = totalRating / comments.length;

  return averageRating.toFixed(1); // arrondir 1 apres la virgule
}


//recuperer le recipeId de l' URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');
displayRecipeDetails(parseInt(recipeId));
