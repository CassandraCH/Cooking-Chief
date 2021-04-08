// Modèle de données pour une recette (personnalisation des données récupérées)
export interface Recette {
    id: number;                     // id
    titre: string;                  // label
    image: string;                  // image
    nbPortions: number;             // yield
    listeIngredients: string[];     // ingredientLines
    calories: number;               // calories
    tempsPreparation: number;       // totalTime
    auteur: string;                 // source
    url: string;                    // url
}