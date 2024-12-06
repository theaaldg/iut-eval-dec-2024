import Alpine from "alpinejs";
window.Alpine = Alpine;

// Import des composants
import recipesComponent from './modules/recipesComponent.js';
import filterComponent from './modules/filterComponent.js';
import selectedRecipeComponent from './modules/selectedRecipeComponent.js';
import RecipesFilter from "./modules/recipesFilter.js";  // Importation du filtre de recettes

Alpine.data("RecipesFilter", RecipesFilter);  // Enregistrement du filtre de recettes

// Enregistrement des autres composants
Alpine.data('recipesComponent', recipesComponent);
Alpine.data('filterComponent', filterComponent);
Alpine.data('selectedRecipeComponent', selectedRecipeComponent);

// Démarrage d'Alpine.js
Alpine.start();
