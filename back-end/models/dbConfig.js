const mongoose = require('mongoose');

// connexion a mongoDB
mongoose.connect(
    // uri de la bdd
    "mongodb+srv://YCGManager:CookingChief@cookingchief.1si4k.mongodb.net/edamam?retryWrites=true&w=majority",

    // options
    { useNewUrlParser: true, useUnifiedTopology: true },
    // Callback pour la gestion des erreurs
    (err) =>  {
        if(!err) console.log("La connexion avec MongoDB s'est bien passée");
        else console.log("Erreur de connexion avec MongoDB :", err);
    }
);
