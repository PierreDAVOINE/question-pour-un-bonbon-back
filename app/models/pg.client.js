require('pg');

const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  // si on voulait faire un conversion de camelCase à snake_case
  define: {
    underscored: true,
  },
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(function () {
    console.log('Connecté à la base de données !');
  })
  .catch(function (err) {
    console.log('Problème de connection à la base de donnée !:', err);
  });

module.exports = sequelize;
