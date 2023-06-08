const express = require('express');

//Importe le controller api
const controller = require('../controllers/api.controller');

const router = express.Router();

/*=============================
 * Définitions des routes quiz
 *============================== */

// Récupérer la liste des quiz
router.get('/', controller.quiz.getAllQuiz);

// Récupérer un quiz dans son intégralité
router.get('/:quizId', controller.quiz.getOneQuiz);

module.exports = router;
