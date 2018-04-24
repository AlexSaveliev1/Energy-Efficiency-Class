const { createNewConnectionWithoutDatabase, createConnectionToDatabase } = require('./database/connections');

const create = () => {
  const connection = createNewConnectionWithoutDatabase();

  connection.connect(function (err) {
    if (err) {
      throw err;
    }
    console.log('Connected to database');

    connection.query('CREATE DATABASE IF NOT EXISTS CEFC', function (err) {
      if (err) {
        throw err;
      }
      console.log('Database created');

      createTable();

      return connection.end();
    });
  });
};

const createTable = () => {
  const connection = createConnectionToDatabase();
  const sql = 'CREATE TABLE IF NOT EXISTS cars (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, weight INT, co2 INT, efc DOUBLE)';

  connection.query(sql, function (err) {
    if (err) {
      throw err;
    }

    console.log('Table created');

    return connection.end();
  });
};

module.exports = {
  create
};
