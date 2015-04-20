$(document).ready(function() {

  $(".deleteButton").click(function () {
    var todoItemId = $(this)[0].id;

    $.ajax({
      url: "/todo",
      method: "DELETE",
      data: {
        todo_id: todoItemId
      },
      success: function (response) {
        // Refresh the page (Google can tell you how)

        // Remove the DOM element (you've done this before)
        $("#todo_"+todoItemId).remove();
      }
    });
  });



});
