export default function recipeApp() {
    return {
        recipes: [],
        filteredRecipes: [],
        loading: true,
        difficultyFilter: '',

        // Fonction d'initialisation
        init() {
            fetch('./src/data/recipes.json')
                .then(response => response.json())
                .then(data => {
                    this.recipes = data.recipes;
                    this.filteredRecipes = data.recipes;
                    this.loading = false;
                });
        },

        // Fonction de filtrage
        filterRecipes() {
            if (this.difficultyFilter) {
                this.filteredRecipes = this.recipes.filter(recipe => recipe.difficulty === this.difficultyFilter);
            } else {
                this.filteredRecipes = this.recipes;
            }
        }
    };
}
