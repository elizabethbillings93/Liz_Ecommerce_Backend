// Loads variables from .env file into process.env. Storing separate from code.
require('dotenv').config();
// Transaction support for MySQL
const Sequelize = require('sequelize');
// Add-on for providing fully functional MySQL Database server for Heroku application
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
