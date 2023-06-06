const { Quiz } = require('../models');

const controller = {
  //* Récupérer un quizz par rapport à son id
  getOneQuiz: async (req, res) => {
    const { quizId } = req.params;
    console.log(quizId);
    try {
      // On va chercher le quizz en BDD
      // const quiz = await datamapper.getOneQuiz(quizId);
      const quiz = await Quiz.findByPk(quizId);
      if (!quiz) {
        throw new Error(
          "Une erreur est survenue lors de la recherche du quiz ou le quiz n'héxiste pas."
        );
      }
      return res.json(quiz);
    } catch (err) {
      //Gestion de l'erreur
      console.error(err);
      return res.status(204).send(err);
    }
  },
};

module.exports = controller;
