import recipes from "../../data/recipes.json";

export default function NbRecipes() {
    return {
        recipesCount: 0,
        init() {
            // Charge le fichier JSON et met à jour le nombre de recettes
            const recipeArray = recipes.recipes;
            this.recipesCount = recipeArray.length;
        },
    };
}
