describe("Transmogrifier", function() {
  var transmogrifier;

  beforeEach(function() {
    transmogrifier = new Transmogrifier();
  });

  it("should create an array", function () {

    var newArray = transmogrifier.createArray("a","b","c","d");
    expect(newArray).toEqual(jasmine.arrayContaining(["a","b"]));

  });

  it("should convert an array to a string", function () {

    var newString = transmogrifier.createStringFromArray(["a","b"], "/");
    expect(newString).toEqual("a/b");

  });

  it("should create a reverse sorted array", function () {

    var newArray = transmogrifier.reverseSort(["a","g","o","c","s","l"]);
    expect(newArray[0]).toEqual("s");
    expect(newArray[1]).toEqual("o");
    expect(newArray[2]).toEqual("l");

  });


});
