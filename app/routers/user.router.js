const express = require('express');

//Importe le controller api
const controller = require('../controllers/api.controller');

const router = express.Router();

/*=============================
 * Définitions des routes user
 *============================== */

// Connexion d'un utilisateur
router.post('/login', controller.user.login);

// Création d'un compte utilisateur
router.post('/signup', controller.user.signup);

// Mise à jour d'un utilisateur
router.patch('/:userId', controller.user.updateUser);

// Suppression d'un utilisateur
router.delete('/:userId', controller.user.deleteUser);

module.exports = router;
