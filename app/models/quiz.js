const { Model, DataTypes } = require('sequelize');
const sequelize = require('./pg.client');

class Quiz extends Model {}

Quiz.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: 'quiz',
  }
);

module.exports = Quiz;
