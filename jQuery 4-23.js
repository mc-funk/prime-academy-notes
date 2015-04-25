$(document).ready(function() {
	/*$("#goodbyeW").click(function() { //single quote is more 'javascripty', but "string" is good
		$("#helloW").slideUp().delay(600).slideDown();
	});
	$("#goodbyeN").click(function() { //single quote is more 'javascripty', but "string" is good
		$("#helloN").slideUp().slideDown();
	});*/

	/*$("#goodbyeW").click(function() {
		for (var i=0; i<10; i++){
			$("#helloW").delay(500).slideUp().delay(i*100).slideDown();
		}
	});*/

	$("#goodbyeN").click(function() {
			$("#helloN").css("background-color", "yellow");
			var color = $("#helloN").css("background-color");
			$('#goodbyeN').after("<p>" + color + "</p>");
	});
	$('li').click(function() {
		$(this).toggleClass('selected');
	});
	$('#goodbyeW').click(function() {
		$('li').removeClass('selected');
	});



});