
var module = (function () {
  var color = "blue";

  return {
    a: 1, 
    getColor: function () {
      return color;
    },
  };

})();

console.log(module.getColor());




















