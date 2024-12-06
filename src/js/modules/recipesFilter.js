import recipes from "../../data/recipes.json";

export default function RecipesFilter() {
    return {
        recipesList: [],
        filteredRecipes: [],
        selectedDifficulty: "toutes",
        difficulties: [],

        init() {
            // Initialiser la liste de recettes
            this.recipesList = recipes.recipes;
            this.filteredRecipes = this.recipesList;
            // Créer la liste des difficultés
            this.difficulties = ["toutes", ...new Set(this.recipesList.map((r) => r.difficulty))];
        },

        filterByDifficulty() {
            // Filtrer les recettes par difficulté
            if (this.selectedDifficulty === "toutes") {
                this.filteredRecipes = this.recipesList;
            } else {
                this.filteredRecipes = this.recipesList.filter(
                    (recipe) => recipe.difficulty === this.selectedDifficulty
                );
            }
        },
    };
}
