const mysql = require('mysql');
const databaseConfig = require('../../configs/database');

const createNewConnectionWithoutDatabase = () => mysql.createConnection({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD
});

const createConnectionToDatabase = () => mysql.createConnection({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DATABASE_NAME
});

module.exports = {
  createNewConnectionWithoutDatabase,
  createConnectionToDatabase
};
