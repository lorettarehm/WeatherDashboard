// Added listener into the form
$("#search-button").on("click", function (event) {
    event.preventDefault();
    console.log($(this).prop("tagName"));

    // Get city name from user input
    var city = $("#search-input").val().trim();
    // Check that city is not empty. If it is, alert the user
    if (city === "") {
        alert("Please select a city");
    } else {
        console.log(city);
        // Call Geocoding API to retrieve coordinates about city
        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
        var geoQuery = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + config.API_KEY;

        console.log(geoQuery);

        $.ajax({url: geoQuery, method: "GET"}).then(function (response) {
            console.log(response);
            var latitude = response[0].lat;
            var longitude = response[0].lon;
            console.log(latitude, "-", longitude);
        });
    };
});
