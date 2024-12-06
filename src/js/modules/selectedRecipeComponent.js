export default function () {
    return {
        selectedRecipe: null,
        selectRecipe(recipe) {
            this.selectedRecipe = recipe;
        },
        clearSelection() {
            this.selectedRecipe = null;
        }
    };
}
