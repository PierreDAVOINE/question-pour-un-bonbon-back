const { Model, DataTypes } = require('sequelize');
const sequelize = require('./pg.client');

class Question extends Model {}

Question.init(
  {
    question: { type: DataTypes.STRING, allowNull: false },
    anecdote: { type: DataTypes.STRING, allowNull: true },
    wiki: { type: DataTypes.STRING, allowNull: true },
  },
  {
    sequelize,
    tableName: 'question',
  }
);

module.exports = Question;
