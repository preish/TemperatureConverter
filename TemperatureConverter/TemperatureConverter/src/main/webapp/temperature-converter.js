// Indicates that the Click Me button has been pressed
function calculateNewTemperature() {
	var temperatureScale = document.getElementsByTagName('input');
	
	for(i = 0; i < temperatureScale.length; i++) {
		if(temperatureScale[i].type = "radio") {
			if(temperatureScale[i].checked)
				if(temperatureScale[i].localName = "Fahrenheit")
				alert('You selected Fahrenheit!')
		}
	}
}