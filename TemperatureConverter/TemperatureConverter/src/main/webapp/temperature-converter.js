// Calculates the new temperature once the Go button is clicked
function calculateNewTemperature() {
	var chosenTemperatureScale = " degrees ";
	var userTemperatureLeft = document.getElementById('userTemperatureLeft').value;
	var userTemperatureRight = document.getElementById('userTemperatureRight').value;
	
	// Check if both textboxes are empty
	if(userTemperatureLeft == "" && userTemperatureRight == "")
		alert("Please enter a temperature to convert.");
	else {
		// Check if both textboxes are filled
		if(userTemperatureLeft != "" && userTemperatureRight != "")
			alert("At least one textbox must be empty.");
		else if((document.getElementById('fTemperatureLeft').checked || document.getElementById('cTemperatureLeft').checked) && (document.getElementById('fTemperatureRight').checked || document.getElementById('cTemperatureRight').checked))
			alert("Only one temperature scale may be checked at any given time.")
		else {
			// If left textbox is filled, convert from left to right
			if(document.getElementById('fTemperatureLeft').checked) {
				chosenTemperatureScale = " Celsius.";
				var result = convertToCelsius(userTemperatureLeft);
				alert(userTemperatureLeft + " degrees Fahrenhet converts to " + result + chosenTemperatureScale);
			}
			else if(document.getElementById('cTemperatureLeft').checked) {
				chosenTemperatureScale = " Fahrenheit.";
				var result = convertToFahrenheit(userTemperatureLeft);
				alert(userTemperatureLeft + " degrees Celsius converts to " + result + chosenTemperatureScale);
			}
			
			// If right textbox is filled, convert from right to left
			else if(document.getElementById('fTemperatureRight').checked) {
				chosenTemperatureScale = " Celsius.";
				var result = convertToCelsius(userTemperatureRight);
				alert(userTemperatureLeft + " degrees Fahrenhet converts to " + result + chosenTemperatureScale);	
			}
			else if(document.getElementById('cTemperatureRight').checked) {
				chosenTemperatureScale = " Fahrenheit.";
				var result = convertToFahrenheit(userTemperatureRight);
				alert(userTemperatureLeft + " degrees Celsius converts to " + result + chosenTemperatureScale);
			}
			else {
				alert("Please select a temperature scale.");
			}
			uncheckRadioButton();
		}
	}
}

// Converts a temperature from Celsius to Fahrenheit
function convertToFahrenheit(userTemperature) {
	return ((userTemperature * 9) / 5) + 32;
}

// Converts a temperature from Fahrenheit to Celsius
function convertToCelsius(userTemperature) {
	return ((userTemperature - 32) * 5) / 9;
}

// Resets all radio buttons to default (unchecked) state
function uncheckRadioButton() {
	// TODO Only grabs first radio button and resets it; does not reset both forms if both forms have radio buttons checked
	var radio = document.querySelector('input[type=radio]:checked');
	radio.checked = false;
}