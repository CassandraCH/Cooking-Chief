const express = require('express');
const router = express.Router();

const Recette = require('../models/recetteModel');

// Récupération des données de la bdd
router.get('/', (req, res) => {

    Recette.find()
                .then((recettes) => {
                    // console.log(recettes);
                     console.log("Récupération des données OK");
                    res.status(200).json(recettes);
                }).
                catch((error) => {
                    console.log(error);
                });

});

// Ajout d'une nouvelle donnée à la bdd
router.post('/', (req, res) => {
    const nouveau = new Recette({
        q: req.body.q,
        from: req.body.from,
        to: req.body.to,
        more: req.body.more,
        count: req.body.count,
        hits: req.body.hits
    });


    nouveau.save({ checkKeys: false }, (err, docs) => {
        if(!err) res.send(docs);
        else console.log("Erreur pour créer une nouvelle donnée : "+err);
    })
});


// Récupération d'une donnée (pas utilisé :/ )
router.get('/recettes/:id', (req, res) => {
    // tout mettre en minuscule
    const id = req.params.id.toLowerCase();
    console.log(req.params.id);

    Recette.findOne({q: id})
        .then((recette) => {
            // Cas où recherche trouvée
            console.log(recette);
            return res.status(200).json({
                message: "Success : "+ recette,
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