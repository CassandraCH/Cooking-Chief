const mongoose = require('mongoose');

// connexion a mongoDB
mongoose.connect(
    "uri", // a remplir !!!!!!!
    // options
    { useNewUrlParser: true, useUnifiedTopology: true },
    // Callback pour la gestion des erreurs
    (err) =>  {
        if(!err) console.log("La connexion avec MongoDB s'est bien passée");
        else console.log("Erreur de connexion avec MongoDB :", err);
    }
);
