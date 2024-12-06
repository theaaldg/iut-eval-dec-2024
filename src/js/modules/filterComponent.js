export default function () {
    return {
        difficultyFilter: '',
        filterRecipes() {
            if (this.difficultyFilter === '') {
                return this.$parent.recipes;
            }
            return this.$parent.recipes.filter(recipe => recipe.difficulty === this.difficultyFilter);
        },
    };
}
