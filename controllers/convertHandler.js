function isValidFraction(inp) {
  if (inp.split('/').length > 2) {
    return false;
  }
  return inp.split('/');
}

function ConvertHandler() {

  this.getNum = function (input) {
    let result = input.match(/[.\d\/]+/g) ? input.match(/[.\d\/]+/g)[0] : '1';
    console.log(result)
    let nums = isValidFraction(result);
    if (!nums) {
      return null;
    }
    if (isNaN(nums[0]) || isNaN(nums[1] || '1')) {
      return null
    }
    result = parseFloat(nums[0]) / (parseFloat(nums[1] || '1'))
    return result;
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-zA-Z]+/g);
    switch (result[0].toLowerCase()) {
      case 'km':
        return 'km';
      case 'gal':
        return 'gal';
      case 'lbs':
        return 'lbs';
      case 'mi':
        return 'mi';
      case 'l':
        return 'L';
      case 'kg':
        return 'kg';
      default:
        return null;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit.toLowerCase()) {
      case 'km':
        return 'mi';
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'mi':
        return 'km';
      case 'l':
        return 'gal';
      case 'kg':
        return 'lbs';
      default:
        return null;
    }
  };

  this.spellOutUnit = function (unit) {
    let result = null;
    if (unit.toLowerCase() === 'l') {
      result = 'liters';
    }
    if (unit.toLowerCase() === 'gal') {
      result = 'gallons';
    }
    if (unit.toLowerCase() === 'km') {
      result = 'kilometers';
    }
    if (unit.toLowerCase() === 'mi') {
      result = 'miles';
    }
    if (unit.toLowerCase() === 'lbs') {
      result = 'pounds';
    }
    if (unit.toLowerCase() === 'kg') {
      result = 'kilograms';
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    console.log(initUnit)
    if (initUnit.toLowerCase() === 'l') {
      result = initNum / galToL;
    }
    if (initUnit.toLowerCase() === 'gal') {
      result = initNum * galToL;
    }
    if (initUnit.toLowerCase() === 'km') {
      result = initNum / miToKm;
    }
    if (initUnit.toLowerCase() === 'mi') {
      result = initNum * miToKm;
    }
    if (initUnit.toLowerCase() === 'lbs') {
      result = initNum * lbsToKg;
    }
    if (initUnit.toLowerCase() === 'kg') {
      result = initNum / lbsToKg;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result = `${parseFloat(initNum.toFixed(5))} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };

}

module.exports = ConvertHandler;
