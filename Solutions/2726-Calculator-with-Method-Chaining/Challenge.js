class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.solution = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.solution += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.solution -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.solution *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value == 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.solution /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.solution = this.solution ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.solution;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()); // 10 + 5 - 7 = 8
console.log(new Calculator(2).multiply(5).power(2).getResult()); // (2 * 5) ^ 2 = 100
console.log(new Calculator(20).divide(0).getResult()); // 20 / 0
