$(document).ready(function() {

<<<<<<< HEAD
  var elementHTMLContent = $("#top").html();
  console.log('elementHTMLContent', elementHTMLContent);
  
  var elementTextContent = $("#top").text();
  console.log('elementTextContent', elementTextContent);

  var bottomElement = $("#bottom");
  bottomElement.text("Hello up there!");

  $("#top").append("<div> I am more content inside the top</div>");
  
  $("#middle").append("<div> Malcolm in the Middle </div");

  $("#bottom").append("<div> Grotto </div>");

  $("#top").after("<div> The Final Count Down</div>");

  $("#top").after("<div> This is a Sibling to top</div>")

  $("#alertbox").click(
    function() {
     alert("hello world");
    }
  );

  // $("#bottom").hover(function(){
  // 	window.alert("Stop tickling me!")
  // })
  
  $("#allAlone").hide("slow", function(){

  })

  $("#allAlone").show("slow", function(){
  	
  })
=======
  // Use jQuery selector to get the HTML
  // content of an element
  var elementHTMLContent = $("#top").html();
  console.log('elementHTMLContent',elementHTMLContent);

  // Or just get the text
  var elementTextContent = $("#top").text();
  console.log('elementTextContent',elementTextContent);

  // So let's change some content with jQuery
  var bottomElement = $("#bottom");
  bottomElement.text("Hello up there!");

  // How about appending HTML to our DOM elements
  $("#top").append("<div>I am more content inside the top</<div>");
  $("#middle").append("<div>I am more content inside the middle</<div>");
  $("#bottom").append("<div>I am more content inside the bottom</<div>");

  // Let's add some HTML *after* a DOM element instead of inside
  $("#top").after("<div>I am a sibling to top</<div>");


  // Let's use jQuery to handle a DOM event
  $('#alertbox').click(
    function(){
      alert("hello world");
    }
  );

  // Remember our onMouseOver and onMouseOut handlers from before?
  // jQuery provides hover()
  $("#bottom").hover(function () {
    window.alert("Stop touching me!")
  })

  $("#allAlone").hide("slow", function() {
    // do something once the element is hidden
  })

  $("#allAlone").show("slow", function() {
    // do something once the element is shown
  })

>>>>>>> f68ebf9595025c2653c9884effa18be985c8b85a
});

