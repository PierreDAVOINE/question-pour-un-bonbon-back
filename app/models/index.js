const Quiz = require('./quiz');
const User = require('./user');
const Question = require('./question');
const Answer = require('./answer');
const Tag = require('./tag');
const Level = require('./level');

//* QUIZ / USER
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

//* QUESTION / QUIZ
// Question : "une question apapartient à un Quiz"
Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
});

// ...et la réciproque : "un Quiz possède plusieurs Questions"
Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questionList',
});

//* ANSWER / QUESTION
// Answer : "une réponse appartient à une Question"
Answer.belongsTo(Question, {
  foreignKey: 'question_id',
});

// ...et la réciproque : "une Question possède plusieurs réponses"
Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answerList',
});

// Question : "une question possède une réponse correcte"
Question.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'correctAnswer',
});

//* TAG / QUIZ
// Tag : "un Tag possède plusieurs Quiz"
Tag.belongsToMany(Quiz, {
  foreignKey: 'tag_id',
  as: 'quizList',
  through: 'quiz_has_tag',
  otherKey: 'quiz_id',
});

// "un Quiz possède plusieurs Tags"
Quiz.belongsToMany(Tag, {
  foreignKey: 'quiz_id',
  as: 'tagList',
  through: 'quiz_has_tag',
  otherKey: 'tag_id',
});
// ! =================

//* QUESTION / LEVEL
// Question : "une Question appartient à un Level"
Question.belongsTo(Level, {
  foreignKey: 'level_id',
  as: 'level',
});

// ...et la réciproque : "un Level possède plusieurs Questions"
Level.hasMany(Question, {
  foreignKey: 'level_id',
  as: 'questionList',
});

module.exports = { Quiz, User, Question, Answer, Tag, Level };
