const express = require('express');
const router = express.Router();

const Recette = require('../models/recetteModel');

// Récupération des données de la bdd
router.get('/', (req, res) => {
    console.log("test ok");
    Recette.find()
    .then((recettes) => {
        console.log(recettes);
        res.status(200).json(recettes);
    }).
    catch((error) => {
        console.log(error);
    });



});

// Export
module.exports = router;