const mongoose = require('mongoose');

// modèle de données pour les recettes
const RecetteModeletteSchema = mongoose.Schema({
    q: { type: String, required: true },
    from: { type: Number},
    to: { type: Number },
    more: { type: Boolean},
    count: { type: Number },
    hits: { type: Array, required: true }
});


// Export du modèle
module.exports = mongoose.model('recipes', RecetteModeletteSchema);

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
