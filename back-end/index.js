const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postsRoutes = require('./routes/router');

// connexion à la bdd
require('./models/dbConfig');

mongoose.set('useFindAndModify', false);

const app = express();

// app.use(bodyParser.json());
