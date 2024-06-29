const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres' // O el dialecto que estés utilizando
});

const conn = sequelize;

module.exports = { conn };
