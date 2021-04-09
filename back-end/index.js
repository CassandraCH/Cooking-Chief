const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/router');

// connexion à la bdd
require('./models/dbConfig');

mongoose.set('useFindAndModify', false);

const app = express();

app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors()); // autorisation d'accès à tout le monde

app.use('/', router);

// Lancement du serveur (en local pour le moment)
const port = 5500;
app.listen(port, () => console.log(`Début du serveur sur le port ${port}`));
