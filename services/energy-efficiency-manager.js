const EFC = require('../utils/energy-efficiency-class');
const { createConnectionToDatabase } = require('../initializers/database/connections');

const getAll = () => {
  const connection = createConnectionToDatabase();

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM cars`, function (err, result) {
      if (err) {
        return reject(err);
      }

      connection.end();

      return resolve(result);
    });
  });
};

const createOne = ({ weight, co2 }) => {
  const connection = createConnectionToDatabase();
  const efc = EFC.calculate({ co2, co2RefValue: EFC.create(weight) });

  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO cars (weight, co2, efc) VALUES (${weight}, ${co2}, ${efc})`;

    connection.query(sql, function (err, result) {
      if (err) {
        reject(err);
      }

      connection.end();

      return resolve({ id: result.insertId, weight, co2, efc });
    });
  });
};

module.exports = {
  getAll,
  createOne
};
