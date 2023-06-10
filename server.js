require('dotenv').config();
// Initialisation d'express et de ses dépendances
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Initialisation des routes
const router = require('./app/routers/router.js');

const port = process.env.PORT || 3000;

// Initialisation d'express
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors('*'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Utilisation des routers
app.use('/user', router.user);
app.use('/quiz', router.quiz);

app.listen(port, () => {
  console.log(`Question pour un bonbon sur le port ${port}`);
});
