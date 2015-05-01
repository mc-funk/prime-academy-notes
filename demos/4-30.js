var cityData = null;
var cityHTML = null;
var firstCity = null;


$(document).ready(function () {

    $("#get-info-btn").on("click", function() {
        if (cityData === null) {
            $.get('data.json', function (data) {
                cityData = data;
                firstCity = cityData.locations[0].location;
                $("#more-stuff").find(".location-name").append("<p>" + firstCity + "</p>");
            });

            $.get('location.html', function (data2) {
                cityHTML = data2;
                $("#more-stuff").append(cityHTML);
            });
        } else {

            $("#more-stuff").find(".location-name").append("<p>" + firstCity + "</p>");
            $("#more-stuff").append(cityHTML);
        }
         //it will not error out if you don't put in the argumen

        $("#more-stuff").on("click", 'button', function() {
            $(this).parent().append(cityData.locations[0].location);
        })

    });
});