const { ONE_HUNDRED_PERCENTS, FIRST_ARGUMENT, SECOND_ARGUMENT } = require('../constants/energy-efficiency-class');

const create = weight => FIRST_ARGUMENT + SECOND_ARGUMENT * weight;
const calculate = ({ co2, co2RefValue }) => (co2 - co2RefValue) / co2RefValue * ONE_HUNDRED_PERCENTS;

module.exports = {
  create,
  calculate
};
