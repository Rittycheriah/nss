/*
  .....  YOUR MISSION  .....

  1. Make a JavaScript module that has properties
      that describe your favorite food. One
      property must be an array that will hold
      ingredients.

  2. Create a method that allows you to add
      ingredients for your favorite food.

  3. Use the method you built above to add all of
      the ingredients you can think of for your food.

*/


	var favoriteFood = {
	  name: "Pad Thai",
	  nativeTo: "Thailand",
	  calories: "Way too many",
	  spicy: "yes",
	  ingredients: [],

	  addIngredient: function(ingredient) {
        this.ingredients.push(ingredient);
	  }
	 } 

var myIngredients =[, "palm sugar", "rice noodles", "chili", "garlic,", "ginger", "bean sprouts", "chicken", "peanuts", "lime", "scallions"]

myIngredients.map(function (i) {
  favoriteFood.addIngredient(i);
})

console.log(favoriteFood);
