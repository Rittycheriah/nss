var targetDiv = document.getElementById("mousey");
var hiddenDiv = document.getElementById("hidden");

//Change the class when the mouse enters
// targetDiv.onmouseover = function() {
//   targetDiv.classList.add('blue');
// }

<<<<<<< HEAD
// you can toggle a class on and off every tiem
// targetDiv.onmouseover = function (){
// 	targetDiv.classList.toggle('red');
=======
// Change the class when the mouse enters
// targetDiv.onmouseover = function () {
//   targetDiv.classList.remove('red');
//   targetDiv.classList.add('blue');
// }



// You can toggle a class on an off every time you mouse over
// targetDiv.onmouseover = function () {
//   targetDiv.classList.toggle('red');
// }



// Turn the red off when mouse enters
// Turn the red back on when the mouse leaves
// targetDiv.onmouseover = function () {
//   targetDiv.classList.remove('red');
// }

// targetDiv.onmouseout = function () {
//   targetDiv.classList.add('red');
// }



// Why use JavaScript instead of CSS?
// var peopleToDisplay = [];
// peopleToDisplay.push("Robert Johnson");
// peopleToDisplay.push("John Lee Hooker");
// peopleToDisplay.push("T-Bone Walker");
// peopleToDisplay.push("Muddy Waters");
// peopleToDisplay.push("Big Mama Thornton");
// peopleToDisplay.push("Robert Cray");

// targetDiv.onmouseover = function () {
//   hiddenDiv.classList.toggle('hide');
//   hiddenDiv.innerHTML = peopleToDisplay.join("<br/>");
// }

// targetDiv.onmouseout = function () {
//   hiddenDiv.classList.add('hide');
>>>>>>> f68ebf9595025c2653c9884effa18be985c8b85a
// }

// turn the red off when mouse eneters
// targetDiv.onmouseover = function () {
// 	targetDiv.classList.remove('red');
// }

// targetDiv.onmouseout = function() {
// 	targetDiv.classList.add('red');
// }

// turn the red back on when the mouse leaves

//Why use Javascript instead of CSS? 
// var peopleToDisplay = [];

// peopleToDisplay.push("Robert Walker");
// peopleToDisplay.push("John Lee Hooker");
// peopleToDisplay.push("T-Bone Walker");
// peopleToDisplay.push("Muddy Waters");
// peopleToDisplay.push("big Mama thornton");
// peopleToDisplay.push("Robert Cray");

// targetDiv.onmouseover = function() {
// 	hiddenDiv.classList.toggle('hide');
// 	hiddenDiv.innerHTML = peopleToDisplay.join("<br/>");	
// }

// targetDiv.onmouseout = function() {
// 	hiddenDiv.classList.add('hide');
// }

targetDiv.onclick = function() {
  alert("helloworld");
};