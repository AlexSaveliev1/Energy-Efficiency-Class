const mysql = require('mysql');
const EFC = require('../utils/energy-efficiency-class');
const databaseConfig = require('../configs/database');

const connection = mysql.createConnection({
  host: databaseConfig.HOST,
  user: databaseConfig.USER,
  password: databaseConfig.PASSWORD,
  database: databaseConfig.DATABASE_NAME
});

const getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM cars`, function (err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
};

const createOne = ({ weight, co2 }) => {
  const efc = EFC.calculate({ co2, co2RefValue: EFC.create(weight) });

  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO cars (weight, co2, efc) VALUES (${weight}, ${co2}, ${efc})`;

    connection.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }

      resolve({ id: result.insertId, weight, co2, efc });
    });
  });
};

module.exports = {
  getAll,
  createOne
};
