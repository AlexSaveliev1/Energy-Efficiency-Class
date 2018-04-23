
const expect = require('chai').expect;
const efcUtil = require('../utils/energy-efficiency-class');

describe('energy-efficiency-class util', function () {
  it('should create energy-efficiency-class', function () {
    const weight = 305;
    const expectedCo2RefValue = 64.00113999999999;
    const co2RefValue = efcUtil.create(weight);

    expect(expectedCo2RefValue).to.be.equal(co2RefValue);
  });

  it('should calculate etc of car by it weight and co2', function () {
    const co2 = 1000;
    const co2RefValue = 64.00113999999999;
    const expectedEfc = 1462.4721684644994;

    const efc = efcUtil.calculate({ co2, co2RefValue });

    expect(expectedEfc).to.be.equal(efc);
  });
});
