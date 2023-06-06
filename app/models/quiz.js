const { Model, DataTypes } = require('sequelize');
const sequelize = require('./pg.client');

class Quiz extends Model {}

Quiz.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize, // on mentionne la connexion à la BDD
    tableName: 'quiz',
  }
);
// on exporte la class directement !
module.exports = Quiz;
