export interface Recette {
    titre: string;                  // label
    image: string;                  // image
    tags: string[];                // healthLabels
    nbPortions: number;             // yield
    listeIngredients: string[];     // ingredientLines
    calories: number;               // calories
    tempsPreparation: number;       // totalTime
    auteur: string;                 // source
    url: string;                    // url
}