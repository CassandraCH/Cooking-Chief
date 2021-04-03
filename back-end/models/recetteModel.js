const mongoose = require('mongoose');

// modèle de données pour les recettes
const RecetteSchema = mongoose.Schema({
    q: { type: String, required: true },
    from: { type: Number},
    to: { type: Number },
    more: { type: Boolean},
    count: { type: Number },
    hits: { type: Array, required: true }
});


// Export du modèle
module.exports = mongoose.model('recipes', RecetteSchema);
