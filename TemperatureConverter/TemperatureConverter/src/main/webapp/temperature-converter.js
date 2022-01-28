// Calculates the new temperature once the Go button is clicked
function calculateNewTemperature() {
	var chosenTemperatureScale;
	var userTemperature = document.getElementById('userTemperature').value;
	
	if(userTemperature == "")
		alert("Please enter a temperature to convert.");
	else {
		if(document.getElementById('fTemperature').checked) {
			chosenTemperatureScale = " degrees Fahrenheit.";
			var result = ((userTemperature * 9) / 5) + 32;
			alert(userTemperature + " degrees Celsius converts to " + result + chosenTemperatureScale);
		}
		else if(document.getElementById('cTemperature').checked) {
			chosenTemperatureScale = " degrees Fahrenheit.";
			var result = ((userTemperature - 32) * 5) / 9;
			alert(userTemperature + " degrees Celsius converts to " + result + chosenTemperatureScale);	
		}
	}
}