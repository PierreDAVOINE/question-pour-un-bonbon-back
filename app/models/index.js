const Quiz = require('./quiz');
const User = require('./user');
const Question = require('./question');
const Answer = require('./answer');
const Tag = require('./tag');

// User : "un Quiz appartient à un User"
Quiz.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author',
});

// ...et la réciproque : "un User possède plusieurs Quiz"
User.hasMany(Quiz, {
  foreignKey: 'user_id',
  as: 'quizList',
});

// Question : "une question apapartient à un Quiz"
Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
});

// ...et la réciproque : "un Quiz possède plusieurs Questions"
Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questionList',
});

// TODO: Continuer les liaisons entre les modèles

module.exports = { Quiz, User };
