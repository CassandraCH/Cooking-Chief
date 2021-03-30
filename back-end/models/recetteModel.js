const mongoose = require('mongoose');

// modèle de données pour les recettes
const RecetteModel = mongoose.model(
    "nom-bdd", // nom bdd
    {

    }, // modèle de données
    "nom-tableau" // nom table
);

// Export du modèle
module.exports = { RecetteModel };




//  RecetteModel {
//     id: number;                     // id
//     titre: string;                  // label
//     image: string;                  // image
//     nbPortions: number;             // yield
//     listeIngredients: string[];     // ingredientLines
//     calories: number;               // calories
//     tempsPreparation: number;       // totalTime
//     auteur: string;                 // source
//     url: string;                    // url
// }

// Peut être ajouter le mot-clé qui a été recherché ???