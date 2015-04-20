function Transmogrifier () { }

Transmogrifier.prototype.createArray = function (one, two, three, four) {
  return [one,two,three,four];
};

Transmogrifier.prototype.createStringFromArray = function (theArray, delimiter) {
  return theArray.join(delimiter);
};

Transmogrifier.prototype.reverseSort = function (theArray) {
  return theArray.sort().reverse();
};

