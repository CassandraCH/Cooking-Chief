const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');

// connexion à la bdd
require('./models/dbConfig');

mongoose.set('useFindAndModify', false);

const app = express();

app.use(bodyParser.json());

app.use(cors()); // autorisation d'accès à tout le monde

app.use('/', router);

// Lancement du serveur
const port = 3000;
app.listen(port, () => console.log(`Début du serveur sur le port ${port}`));