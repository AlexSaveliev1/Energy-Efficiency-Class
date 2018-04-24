const mysql = require('mysql');
const databaseConfig = require('../configs/database');

const connection = mysql.createConnection({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DATABASE_NAME
});

const create = () => {
  connection.connect(function (err) {
    if (err) {
      throw err;
    };
    console.log('Connected to database');

    connection.query('CREATE DATABASE IF NOT EXISTS CEFC', function (err) {
      if (err) {
        throw err;
      }
      console.log('Database created');

      createTable(connection);

      return connection;
    });
  });
};

const createTable = (connection) => {
  const sql = 'CREATE TABLE IF NOT EXISTS cars (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, weight INT, co2 INT, efc DOUBLE)';

  connection.query(sql, function (err) {
    if (err) {
      throw err;
    }

    console.log('Table created');
  });
};

module.exports = {
  create
};
