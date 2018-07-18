var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  xit('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should accept a number click', function(){
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, 1)
  })


  it('should clear the number on clearClick', function(){
      calculator.numberClick("5");
      calculator.clearClick();
      assert.equal(calculator.runningTotal, 0);
  })

  it('should accept the add operator click function', function(){
      calculator.operatorClick('+')
      assert.equal(calculator.previousOperator, '+')
  })

  it('should add two numbers together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.add(2)
    assert.equal(calculator.runningTotal, 4)
  })

  it('should subtract two numbers', function(){
    calculator.numberClick(10);
    calculator.operatorClick('-');
    calculator.subtract(5);
    assert.equal(calculator.runningTotal, 5)
  })

  it('should multiply two numbers', function(){
    calculator.numberClick(60);
    calculator.operatorClick("*");
    calculator.multiply(10);
    assert.equal(calculator.runningTotal, 600);
  })

  it('should divide two numbers', function(){
    calculator.numberClick(144);
    calculator.operatorClick("/");
    calculator.divide(12);
    assert.equal(calculator.runningTotal, 12);
  })

  it('should divide a number by zero and  return infinity', function(){
    calculator.numberClick(10);
    calculator.operatorClick("/");
    calculator.divide(0);
    assert.equal(calculator.runningTotal, 'Infinity');
  })

  it('should divide a number by zero and  return 0', function(){
    calculator.numberClick(10);
    calculator.operatorClick("/");
    calculator.divide(0);
    assert.equal(calculator.runningTotal, "Cannot Divide by 0");
  })

});
