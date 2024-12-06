import recipes from "../../data/recipes.json";

export default function TotalRecipes() {
    return {
        total: 0,

        // Initialisation de la liste des recettes et calcul du total
        initialize() {
            const list = recipes.recipes;
            this.total = list.length; // Mise à jour du total de recettes
        },
    };
}
