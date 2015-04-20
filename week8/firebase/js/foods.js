$(document).ready(function() {
  $.get("https://nss-demo-instructor.firebaseio.com/foods.json",
    function (foods) {
      var foodSection = $(".foods"),
          begin = "<div>",
          end = "</div>";

      foods.forEach(function (food) {
        foodSection.append(begin + food.name + end);
      })
    }
  )
});
