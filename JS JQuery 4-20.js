var i = 0;

$(document).ready(function (){
	alert("Yup, jQuery loaded!");
	$("#thisId").remove();
	$("#someId").append("<p id='stuff'>Here is some text</p>");
	$("#btn").on("click", function(){
		i++;
/*		if (i % 10 == 1 || i % 100 == 1) {
			$("#someId").append("<p>Here is the " + i + "st item</p>");
		} else if (i % 10 == 2 || i % 100 == 2) {
			$("#someId").append("<p>Here is the " + i + "nd item</p>");
		} else if (i % 10 == 3 || i % 100 == 3) {
			$("#someId").append("<p>Here is the " + i + "rd item</p>");
		} else {
			$("#someId").append("<p>Here is the " + i + "th item</p>");
		}*/

	});
	$("#btn2").on("click", function(){
		i--;
		$("#someId p:last-child").remove()
	}); //can add additional functionality here
	//.append()
	//.after()
	//.prepend()
});

//certain CSS operators avialble to JQuery using ""
//document.ready function: runs as soon as page is ready
//bling notation is a JQuery specific action saying "I'm doing something with JQuery"
//In order for this to work: document.ready function must work correctly, 
//document must be ready, jQuery must be installed