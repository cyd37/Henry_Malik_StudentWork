/* User: Henry Malik
   Date : July 17 2013
   Assignment: Expression Worksheet */


// Dog Years

var humanAge = 10; // The dog's age in human years. 

var dogAge = humanAge * 7; // The dog's age in human years multiplied by 7 to represent dog's actual age. 
console.log("The dog's real age is", dogAge); // Printing out the representation of the dog's true age to the console.


// Slice of Pie I 

var amountOfSlices = 16;
var amountOfPeople = 20; 
var amountOfPizzas = 8;

// pizza * slices / people 

var pizzaEaten = amountOfPizzas * amountOfSlices / amountOfPeople;

console.log("Each person ate" , pizzaEaten, "slices at the party");

// Slice of Pie II 

// sparkyGot = amountOfPeople % pizzaEaten

	var sparkyGot = 20 % 6;
	console.log("Sparky got" , sparkyGot, "slices of pizza");

	// Average Shopping Bill

	var bill = [50, 70, 30, 100, 20];
	var totalSpent = bill[0] + bill[1] + bill[2] + bill[3] + bill[4];
	var average = totalSpent / 5;

	console.log("You've spent a total of $" , totalSpent, "on groceries over 5 weeks. This brings it to a total of $" , average, "per week.")

