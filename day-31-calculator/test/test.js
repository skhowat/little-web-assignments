var assert = require('assert');


var Calculator = {
  add: function(input) {
    if (input === '') {
      return 0;
    }

    if(input.indexOf('//') !== -1) {
      var deLimeter = input.slice(2, 3);
      console.log(deLimeter);
      var numsOnly = input.slice(4);
      var nums = numsOnly.split(deLimeter);
      var sum = 0;
      for (var i = 0; i < nums.length; i++) {
        sum += Number(nums[i]);
      }

      return sum;
    }

    if (input.indexOf(',') === -1) {

      return Number(input);
    }


    if(input.indexOf('\n') !== -1 || input.indexOf(',') !== -1) {
      var nums = input.split(/[\n,]+/);
      var sum = 0;
      for (var i=0; i<nums.length; i++) {
        sum += Number(nums[i]);
      }
      return sum;
    }


  }
}

describe('String Caluculator add method', function() {
  it('should return 0 when the value is a blank string', function() {
    var result = Calculator.add('');

    assert.equal(0, result);
  });

  it('should return 3 when the input is "3" ', function() {
    var result = Calculator.add('3');

    assert.equal(3, result);
  });

  it ('should return 8 when the input "4,4"', function () {
    var result = Calculator.add('4,4');
    assert.equal(8, result);
  });

  it('should return 10 when the input is "2,3,5"', function() {
    var result = Calculator.add("2,3,5");
    assert.equal(10, result);
  });

  it ('should return 6 when the input is “1\n2,3”', function() {
    var result = Calculator.add("1\n2,3");
    assert.equal(6, result);
  });

  it ('should return 3 when the input is "//;\n1;2"', function() {
    var result = Calculator.add("//;\n1;2");
    assert.equal(3, result);
  });

  it ('should return “negatives not allowed” when the input is " -1, -5"', function () {
    var result = Calculator.add("-1, -5");
    assert.equal('"negatives not allowed", -1, -5', result);
  });
});
