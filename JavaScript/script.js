const buttons = document.querySelectorAll(".button-container");

	buttons.forEach((button) => {
		button.addEventListener("mouseover", function() {
			this.style.transform = "scale(1.30)";
			this.style.transition = "0.5s";
		});
	
		button.addEventListener("mouseout", function() {
			this.style.transform = "scale(1)";
			this.style.transition = "0.5s";
		});
	
		button.addEventListener("click", function() {
			window.location.href = "form.html";
		});
});

const myApiKey = "zpka_86397f6fcf0f46dcb8215298f7d6a868_bbb57f02";
const dublinKey = "207931";

const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${dublinKey}?apikey=${myApiKey}`;

function displayWeather() {
	fetch(weatherUrl)
		.then(response => response.json())
		.then(data => {
			const temperature = data[0].Temperature.Metric.Value;
			const description = data[0].WeatherText;
			
			const weatherElement = document.getElementById("weather-container");
			if(weatherElement) {
				weatherElement.innerHTML = `Current weather in Dublin: ${temperature}°C, ${description}`;
			}
		})
		.catch(err => console.error("Weather error:", err));
	}

window.onload = displayWeather;

function processBooking() {
	var form = document.forms["hotel-form"];
	var firstName = form["firstname"].value;
	var lastName = form["lastname"].value;
	var gender = form["gender"].value;
	var email = form["email"].value;
	var phone = form["phone-number"].value;
	var street = form["street"].value;
	var zip = form["zip-code"].value;
	var city = form["city"].value;
	var country = form["country"].value;
	var checkIn = form["check-in"].value;
	var checkOut = form["check-out"].value;
	var adults = form["adults"].value;
	var children = form["children"].value;
	
	if(firstName == "" || lastName == "" || gender == "" || email == "" || phone == "" || street == "" || zip == "" || city == "" || country == "" || checkIn == "" || checkOut == "" || adults == "" || children == "") {
			alert("Please fill in all fields");
	}
	else {
		alert("Your Booking Request is ready to be processed by us! You will receive an Email shortly.");
	form.reset();
	}
}