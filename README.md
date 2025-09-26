# 🌮 Site Web de Recettes – Projet Web L2 ISIL

Application web en **HTML, CSS et JavaScript pur** permettant de parcourir, rechercher et consulter des recettes avec détails, ingrédients, évaluations et commentaires.

## 📌 Fonctionnalités
- **Page d’accueil** : hero section (titre, description, bouton vers catalogue), à-propos, catégories, 3 recettes aléatoires à chaque chargement.
- **Catalogue** : liste de toutes les recettes issues de `recettesDB.js` avec nom, catégorie, origine, durée, note.  
  - Recherche par nom (barre de recherche).  
  - Filtre optionnel par catégorie.  
  - Clic sur une recette → redirection vers sa page détails.
- **Détails d’une recette** : affiche ingrédients, instructions, images, évaluations et commentaires.

## 🛠️ Technologies
- **HTML5 / CSS3** : structure et mise en page responsive (desktop, tablette, mobile).  
- **JavaScript** : manipulation du DOM, récupération des données depuis `recettesDB.js`, gestion des paramètres d’URL pour l’affichage détaillé.
