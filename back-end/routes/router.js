const express = require('express');
const router = express.Router();

const Recette = require('../models/recetteModel');
const Twitter = require('twit');

// Récupération des données de la bdd (recettes)
router.get('/', (req, res) => {

    Recette.find()
            .then((recettes) => {
                    console.log("Récupération des données OK");
                res.status(200).json(recettes);
            }).catch((error) => {console.log(error);});
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

    // le checkKeys => permet d'éviter d'avoir l'erreur "pas de '.' dans une key"
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
                // Cas où il n'y a pas de résultat
                console.log("Je n'ai pas trouvé...");
                return res.status(401).json({
                    message: "Error",
                    recette: null
                });
            });
});

// Création client Twitter avec toutes les clés d'accès
const api_client = new Twitter({
    consumer_key: 'EuKQfwTijUYZBkSxmgqoPir6F',
    consumer_secret: 'xVYQgEZN4L1VYBszUStZEiH6VhjJbMyeQyAzMYB0TwR0bDU9Sg',
    access_token: '1359508421301727232-DUalWqDuPUC21F9xd9AZ8LKrQgMVW8',
    access_token_secret: 'k7Z60xBmdUFFiLvQkM3yU9KayhvCTQhwvd2pVjho9Ll5s'
});

// Lorsque on ping le serveur sur la page http://localhost:5500/home_timeline
  router.get('/home_timeline', (req, res) => {
    var params = {screen_name: 'cooking chief'};
    //Requête get pour récupérer la timeline de notre compte puis envoie des données
    api_client
      .get(`statuses/user_timeline`, params)
      .then(timeline => {
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
  });

// Export
module.exports = router;