const express = require('express');
const router = express.Router();
const HttpStatus = require('http-status-codes');

const EFCManager = require('../services/energy-efficiency-manager');
const { EMPTY_PARAMS } = require('../constants/error-messages');

router.get('/', function (req, res) {
  EFCManager.getAll().then(result => res.send(result));
});

router.post('/', function (req, res) {
  const { body: { weight, co2 } } = req;

  if (!weight || !co2) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .send({ error: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST), message: EMPTY_PARAMS });
  }

  EFCManager.createOne({ weight, co2 }).then(result => res.send(result));
});

module.exports = router;
