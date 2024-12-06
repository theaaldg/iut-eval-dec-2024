import recipes from "../../data/recipes.json";

export default function RecipesDisplay() {
    return {
        completeList: [],
        filteredList: [],
        activeDifficulty: "toutes",
        activeCategory: "toutes",
        activePreparationTime: "toutes",
        searchQuery: "",
        difficultyLevels: [],
        categories: [],
        preparationTimes: ["toutes", "Rapide (< 30 min)", "Moyen (30-60 min)", "Long (> 60 min)"],
        favorites: Alpine.$persist([]), // Utilisation du plugin persist pour stocker les favoris
        isDetailOpen: false,
        currentRecipe: null,
        stepIndex: 0,

        initialize() {
            this.completeList = recipes.recipes;
            this.filteredList = this.completeList;

            // Chargement des favoris depuis localStorage
            this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            // Remplir les niveaux de difficulté et les catégories uniques à partir des données
            this.difficultyLevels = ["toutes", ...new Set(this.completeList.map((rec) => rec.difficulty))];
            this.categories = ["toutes", ...new Set(this.completeList.map((rec) => rec.category))];
        },

        // Applique les filtres en fonction des critères sélectionnés
        applyFilters() {
            this.filteredList = this.completeList
                .filter((recipe) => this.activeDifficulty === "toutes" || recipe.difficulty === this.activeDifficulty)
                .filter((recipe) => this.activeCategory === "toutes" || recipe.category === this.activeCategory)
                .filter((recipe) => {
                    if (this.activePreparationTime === "toutes") return true;
                    if (this.activePreparationTime === "Rapide (< 30 min)") return recipe.preparationTime < 30;
                    if (this.activePreparationTime === "Moyen (30-60 min)") return recipe.preparationTime >= 30 && recipe.preparationTime <= 60;
                    if (this.activePreparationTime === "Long (> 60 min)") return recipe.preparationTime > 60;
                })
                .filter((recipe) => recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        },

        // Ajoute ou retire une recette des favoris et met à jour le localStorage
        toggleFavorite(recipe) {
            const index = this.favorites.findIndex(fav => fav.id === recipe.id);
            if (index === -1) {
                this.favorites.push(recipe); // Ajouter aux favoris
            } else {
                this.favorites.splice(index, 1); // Retirer des favoris
            }

            // Mise à jour dans localStorage
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },

        // Vérifie si une recette est dans les favoris
        isFavorite(recipe) {
            return this.favorites.some(fav => fav.id === recipe.id);
        },

        openRecipeDetail(recipe) {
            this.currentRecipe = recipe;
            this.stepIndex = 0;
            this.isDetailOpen = true;
        },

        closeRecipeDetail() {
            this.currentRecipe = null;
            this.isDetailOpen = false;
            this.stepIndex = 0;
        },

        // Change l'étape de la recette (précédent / suivant)
        changeStep(direction) {
            if (direction === "next" && this.stepIndex < this.currentRecipe.instructions.length - 1) {
                this.stepIndex++;
            } else if (direction === "prev" && this.stepIndex > 0) {
                this.stepIndex--;
            }
        },

        // Réinitialise les filtres et réaffiche toutes les recettes
        resetFilters() {
            this.activeDifficulty = "toutes";
            this.activeCategory = "toutes";
            this.activePreparationTime = "toutes";
            this.searchQuery = "";
            this.filteredList = this.completeList;
        },
    };
}
