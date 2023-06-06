// Connexion à la base de données
// const client = require("./pg.client");
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./pg.client');

class User extends Model {
  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }
}

User.init(
  {
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: 'user',
  }
);

module.exports = User;
