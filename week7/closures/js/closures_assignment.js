/*
  .....  YOUR MISSION  .....

<<<<<<< HEAD
  Using your knowledge of closures, create a function named secretKey()
  that accepts any integer as an argument. That function should return
  another function that, when called, should output any random number
  between 1 and the number passed into secretKey().
*/


function secretKey (a) {
  var random; 

  function random(b) {
  	return Math.random() * a;
=======
  Using your knowledge of closures, create a
  function named secretKey() that accept any
  integer as an argument. That function should
  return another function that, when called,
  should output any random number between 1 and
  the number passed into secretKey().
*/


function secretKey (randNum) {

  return function () {

    return Math.random() * randNum;

>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
  }

  return random;
}

var createKey = secretKey(341);
<<<<<<< HEAD

console.log(createKey());

=======
console.log('createKey()',createKey());
>>>>>>> a1819c2e680fbf4f29f9160a16439de137c8af49
