'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    const initNum = convertHandler.getNum(req.query.input);
    const initUnit = convertHandler.getUnit(req.query.input);
    if (!initNum && !initUnit) {
      res.json('invalid number and unit')
    } else if (!initUnit) {
      res.json('invalid unit')
    } else if (!initNum) {
      res.json('invalid number')
    } else {
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      const response = { initNum, initUnit, returnNum, returnUnit, string };
      console.log(response)
      res.json(response)
    }

  });
};
