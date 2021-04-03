const express = require('express');
const router = express.Router();

const Recette = require('../models/recetteModel');

// Récupération des données de la bdd
// router.get('/', (req, res) => {
//     console.log("test ok");
//     Recette.find()
//                 .then((recettes) => {
//                     // console.log(recettes);
//                     res.status(200).json(recettes);
//                 }).
//                 catch((error) => {
//                     console.log(error);
//                 });

// });


// Récupération d'une donnée
router.get('/recettes/:id', (req, res) => {

    Recette.findOne({q: req.params.id})
        .then((recette) => {
            // Cas où recherche trouvée
            console.log(recette);
            return res.status(200).json({
                message: "Success : "+q,
                recette: recette
            });
        }).catch((error) => {
            //Cas où il n'y a pas de résultat
            console.log("nous n'avons pas trouvé...");
            return res.status(401).json({
                message: "Error",
                recette: null
            });
        });

});

// Export
module.exports = router;