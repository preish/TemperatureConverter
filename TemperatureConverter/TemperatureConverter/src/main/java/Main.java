import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int FAHRENHEIT_CHOICE = 1;
		
		// Display greeting message
		printGreeting();
		
		try {
			// Get user choice
			int userChoice = getUserChoice(scanner);
		}
		catch (Exception e) {
			System.out.println("Please enter a whole number.");
		}
		
		// Get the temperature
		float userTemperature = getTemperature(scanner);
		
		

	}
	
	public static void printGreeting() {
		System.out.println("Welcome to Temperature Converter 3000!");
		System.out.println("This program converts a temperature from Celsius to Fahrenheit and vice versa.");
		System.out.println("1 - Convert Celcius to Fahrenheit");
		System.out.println("2 - Convert Fahrenheit to Celsius");
		System.out.print("Please type in either 1 or 2: ");
	}
	
	public static int getUserChoice(Scanner scanner) {
		return scanner.nextInt();
	}
	
	public static float getTemperature(Scanner scanner) {
		return scanner.nextFloat();
	}
	
	public static float convertTemperature(float userTemperature) {
		return 0.0f;
	}

}
