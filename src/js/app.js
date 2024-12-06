import Alpine from "alpinejs";
import TotalRecipes from "./modules/totalRecipes.js";
import RecipesDisplay from "./modules/recipesDisplay.js";
import persist from '@alpinejs/persist'

window.Alpine = Alpine;

// Déclaration des composants Alpine.js
Alpine.data("TotalRecipes", TotalRecipes);
Alpine.data("RecipesDisplay", RecipesDisplay);

Alpine.plugin(persist)
// Initialisation d'Alpine.js
Alpine.start();
