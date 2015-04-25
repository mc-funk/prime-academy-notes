$(document).ready(function (){ 
	$("#someList").on("click", "button", function() {
		//$(this).closest("ul").remove(); //where $(this) is the button clicked
		//$(this).closest("#someList").remove();
		var el = $(this).closest("#someList").siblings(".container");
		var isClicked = false;

		if(!isClicked) {
			setInterval(function() {
				el.animate({
					width: "+=10",
					height: "+=20"
				}, 250);
			}, 3000);
		}

		isClicked = true;
	})

});