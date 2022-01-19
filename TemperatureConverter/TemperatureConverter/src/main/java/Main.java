import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int userChoice = 0;
		byte FAHRENHEIT_CHOICE = 1;
		byte CELSIUS_CHOICE = 2;
		float result = 0.0f;
		
		// Display greeting message
		printGreeting();
		
		// Handle input invalid exceptions
		try {
			// Loop until user choice is valid
			while ((userChoice = getUserChoice(scanner)) != FAHRENHEIT_CHOICE && userChoice != CELSIUS_CHOICE)
				System.out.println("Please enter either 1 or 2.");
		}
		catch (Exception exception) {
			System.out.println("Something went wrong. Please try again.");
		}
		
		// Calculate temperature conversion
		if (userChoice == FAHRENHEIT_CHOICE) {
			System.out.println("\n\n\n" + "--Converting from Celsius to Fahrenheit--");
			float userTemperature = getTemperature(scanner);
			result = getFahrenheitTemperature(userTemperature);
		} else {
			System.out.println("\n\n\n" + "--Converting from Fahrenheit to Celsius--");
			float userTemperature = getTemperature(scanner);
			result = getCelsiusTemperature(userTemperature);
		}
		
		// Display the result of the temperature conversion
		System.out.println("\n\n\n" + "The result of the temperature conversion is " + result + " degrees.");
		System.out.println("Thanks for using this program! Have a nice day! :)");
		scanner.close();
	}
	
	// Display the program description and greeting
	public static void printGreeting() {
		System.out.println("Welcome to Temperature Converter 3000!");
		System.out.println("This program converts a temperature from Celsius to Fahrenheit and vice versa.");
		System.out.println("1 - Convert Celcius to Fahrenheit");
		System.out.println("2 - Convert Fahrenheit to Celsius");
		System.out.print("Please type in either 1 or 2: ");
	}
	
	// Get the user's choice of temperature conversion
	public static int getUserChoice(Scanner scanner) {
		return scanner.nextInt();
	}
	
	// Get the user's desired temperature to convert
	public static float getTemperature(Scanner scanner) {
		System.out.print("Please enter the temperature you wish to convert: ");
		return scanner.nextFloat();
	}
	
	// Convert the user's temperature to Fahrenheit
	public static float getFahrenheitTemperature(float userTemperature) {
		return (((userTemperature * 9) / 5) + 32);
	}
	
	// Convert the user's temperature to Celsius
	public static float getCelsiusTemperature(float userTemperature) {
		return (((userTemperature - 32) * 5) / 9);
	}

}
