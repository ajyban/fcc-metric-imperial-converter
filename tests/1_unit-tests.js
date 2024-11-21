const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
    suite('convertHandler', function () {
        test('should correctly read a whole number input', function (done) {
            assert.equal(convertHandler.getNum('2L'), 2);
            done();
        });
        test('should correctly read a decimal number input', function (done) {
            assert.equal(convertHandler.getNum('2.1L'), 2.1);
            done();
        });
        test('should correctly read a fractional input', function (done) {
            assert.equal(convertHandler.getNum('2/1L'), 2);
            done();
        });
        test('should correctly read a fractional input with a decimal', function (done) {
            assert.equal(convertHandler.getNum('2.1/1L'), 2.1);
            done();
        });
        test('should correctly return an error on a double-fraction (i.e. 3/2/3)', function (done) {
            assert.equal(convertHandler.getNum('2.1/1/1L'), null);
            done();
        });

        test('should correctly default to a numerical input of 1 when no numerical input is provided.', function (done) {
            assert.equal(convertHandler.getNum('L'), 1);
            done();
        });
        test('should correctly read each valid input unit', function (done) {
            assert.equal(convertHandler.getUnit('2L'), 'L');
            done();
        });
        test('should correctly return an error for an invalid input unit', function (done) {
            assert.equal(convertHandler.getUnit('2.1Lits'), null);
            done();
        });
        test('should return the correct return unit for each valid input unit', function (done) {
            assert.equal(convertHandler.getUnit('2/1L'), 'L');
            done();
        });
        test('should correctly return the spelled-out string unit for each valid input unit.', function (done) {
            assert.equal(convertHandler.spellOutUnit('L'), 'liters');
            done();
        });
        test('should correctly convert gal to L', function (done) {
            assert.equal(convertHandler.getReturnUnit('L'), 'gal');
            done();
        });
        test('should correctly convert L to gal', function (done) {
            assert.equal(convertHandler.getReturnUnit('gal'), 'L');
            done();
        });
        test('should correctly convert mi to km', function (done) {
            assert.equal(convertHandler.getReturnUnit('mi'), 'km');
            done();
        });
        test('should correctly convert km to mi', function (done) {
            assert.equal(convertHandler.getReturnUnit('km'), 'mi');
            done();
        });
        test('should correctly convert lbs to kg', function (done) {
            assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
            done();
        });
        test('should correctly convert kg to lbs', function (done) {
            assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
            done();
        });
    });
});