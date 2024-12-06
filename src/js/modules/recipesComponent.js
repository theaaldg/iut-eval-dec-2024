export default function () {
    return {
        recipes: [],
        init() {
            fetch('/src/data/recipes.json')
                .then(response => response.json())
                .then(data => {
                    this.recipes = data.recipes;
                    console.log('Recettes chargées:', this.recipes);  // Déboguer
                })
                .catch(error => {
                    console.error('Erreur de chargement des recettes:', error);
                });
        },
    };
}
