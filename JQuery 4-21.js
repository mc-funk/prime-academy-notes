$(document).ready(function (){ 
	var i = 0;
	$("#btn").on("click", function() {
		$("#ourList").append("<li>Some text " + i + "&nbsp;<button class='removeButton'>Remove</button></li>");
		i++;
		//$("#ourList").children().first().next().next().text("Changed!"); 
		//"DOM" traversal - moving through elements to get where we want to go
	});

	function thingFadeToggle(element) {
		element.fadeToggle("slow", function() {
			thingFadeToggle(element);
			});
	}

	$("#ourList").on('click', '.removeButton', function() {
		$(this).parent().fadeOut("slow", function() {
			thingFadeToggle($(this));
		});
	});

	/* $("#ourList").on('click', '.removeButton', function() {
	//will only execute after fadeOut complete
		$(this).parent().fadeOut("slow", function() {
			$(this).fadeIn(400, function() {
				$(this).fadeIn(400, function() {

				})
			});
		});
	}); */
});
	//callback function - look up definition
	
	/*$function someFunction() {
		//stuff;
	}*/

	//callback function - look up definition

/*$(".removeButton").on("click", function() {
	alert("REMOVIEeeeeeee");
	)};

	$("#someElement").fadeOut("slow", function() { //could also specify in ms e.g. 600

		})

	})*/
	/*$("#ourList").on('click','.removeButton', function() { //review WTF is going on here
		$(this).parent().remove();
	});*/