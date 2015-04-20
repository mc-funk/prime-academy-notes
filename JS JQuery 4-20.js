$(document).ready(function (){
	alert("Yup, jQuery loaded!");
	$("#thisId").remove();
	$("#someId").append("<p id='stuff'>Here is some text</p>");

	//.append()
	//.after()
	//.prepend()
});

//certain CSS operators avialble to JQuery using ""


//document.ready function: runs as soon as page is ready
//bling notation is a JQuery specific action saying "I'm doing something with JQuery"
//In order for this to work: document.ready function must work correctly, 
//document must be ready, jQuery must be installed