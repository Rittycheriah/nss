describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should add two numbers", function () {
    var first = 1;
    var second = 7;

    var total = calculator.add(first, second);
    expect(total).toEqual(first + second);

  });

  it("should multiply two numbers", function () {
    var first = 3;
    var second = 11;

    var total = calculator.multiply(first, second);
    expect(total).toEqual(first * second);

  });

  it("should subtract two numbers", function () {
    var first = 10;
    var second = 7;

    var total = calculator.subtract(first, second);
    expect(total).toEqual(first - second);

  });

  it("should divide two numbers", function () {
    var first = 60;
    var second = 15;

    var total = calculator.divide(first, second);
    expect(total).toEqual(first / second);

  });

  it("should show the remainer after dividing two numbers", function () {
    var first = 60;
    var second = 11;

    var total = calculator.remainder(first, second);
    expect(total).toEqual(first % second);

  });

});
