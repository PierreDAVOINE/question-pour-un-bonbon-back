const { Model, DataTypes } = require('sequelize');
const sequelize = require('./pg.client');

class Tag extends Model {}

Tag.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    tableName: 'tag',
  }
);

module.exports = Tag;
