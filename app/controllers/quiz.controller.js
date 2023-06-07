const { Quiz } = require('../models');

const controller = {
  //* Récupérer la liste des quiz
  getAllQuiz: async (req, res) => {
    console.log('getAllQuiz');
    try {
      // On va chercher la liste des quiz en BDD
      const quiz = await Quiz.findAll();
      // Si il n'y a pas de quiz, on renvoie une erreur
      if (!quiz) {
        console.log('Aucun résultat trouvé.');
        return res.status(404).json({ message: 'Aucun quiz trouvé.' });
      }
      // Sinon on renvoie la liste des quiz
      return res.json(quiz);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Le serveur à rencontré un problème.' });
    }
  },

  //* Récupérer un quizz intégralement via à son id
  getOneQuiz: async (req, res) => {
    const { quizId } = req.params;
    try {
      // On va chercher le quizz en BDD
      const quiz = await Quiz.findByPk(quizId);
      // Si le quizz n'existe pas, on renvoie une erreur
      if (!quiz) {
        console.log('Aucun résultat trouvé.');
        return res.status(404).json({ message: "Aucun quiz n'a été trouvé." });
      }
      // Sinon on renvoie le quizz
      return res.json(quiz);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: 'Le serveur à rencontré un problème.' });
    }
  },
};

module.exports = controller;
