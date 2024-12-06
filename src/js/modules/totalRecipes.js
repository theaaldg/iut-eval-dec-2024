import recipes from "../../data/recipes.json";

export default function TotalRecipes() {
    return {
        total: 0,
        initialize() {
            const list = recipes.recipes;
            this.total = list.length;
        },
    };
}
