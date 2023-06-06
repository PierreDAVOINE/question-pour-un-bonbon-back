const express = require('express');

//Importe le controller api
const controller = require('../controllers/api.controller');

const router = express.Router();

/*=============================
 * Définitions des routes quiz
 *============================== */

//Récupérer de toutes les tâches
router.get('/:quizId', controller.quiz.getOneQuiz);

module.exports = router;
