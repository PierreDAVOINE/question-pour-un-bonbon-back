const Quiz = require('./quiz');
const User = require('./user');

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

module.exports = { Quiz, User };
