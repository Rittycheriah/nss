$(document).ready(function() {

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
});

