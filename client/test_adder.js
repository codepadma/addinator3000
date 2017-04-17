const add = require("./adder.js");
class TestSuite {

  assertEquals(a, b) {
    return a === b;
  }

  runTest(testName) {
  	const result = this[testName]();
  	console.log(result, testName);
  }

  runTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(prop => this[prop] instanceof Function)
      .filter(prop => prop.indexOf('test') !== -1)
      .forEach(testName => this.runTest(testName));
    /*
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(function(prop) {
        return this[prop] instanceof Function;
      }, this).filter(function(prop) {
        return prop.indexOf('test') !== -1;
      }).forEach(function(testName) {
        this.runTest(testName);
      }, this); 
    */
  }

  testAddPositiveNumbers() {
    return this.assertEquals(add(5, 1), 6);
  }

  testAddNegativeNumbers() {
    return this.assertEquals(add(-5, -1), -6);
  }

  testAddPositiveAndNegativeNumbers() {
    return this.assertEquals(add(-5, 1), -4);
  }
}

const suite = new TestSuite();
suite.runTests();