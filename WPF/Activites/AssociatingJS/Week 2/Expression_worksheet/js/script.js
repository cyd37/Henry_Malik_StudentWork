/* User: Henry Malik
   Date : July 17 2013
   Assignment: Expression Worksheet */


// Dog Years

var humanAge = 10; // The dog's age in human years. 

var dogAge = humanAge * 7; // The dog's age in human years multiplied by 7 to represent dog's actual age. 
console.log("The dog's real age is", dogAge); // Printing out the representation of the dog's true age to the console.


// Slice of Pie I 

var amountOfSlices = 16; // The amount of pizza slices in each pizza.
var amountOfPeople = 20; // The amount of people at the party. 
var amountOfPizzas = 8;  // The amount of whole pizza at the party.

// pizza * slices / people 

var pizzaEaten = amountOfPizzas * amountOfSlices / amountOfPeople; // This shows that the amount of pizza eaten is the amount of pizzas multiplied by the amount of slices then divided by the amount of people at the party.

console.log("Each person ate" , pizzaEaten, "slices at the party"); // Prints these results to the console.

// Slice of Pie II 

// sparkyGot = amountOfPeople % pizzaEaten

	var sparkyGot = 20 % 6; 
	console.log("Sparky got" , sparkyGot, "slices of pizza"); // Prints the results to the console. 

// Average Shopping Bill

	var bill = [50, 70, 30, 100, 20]; // shows the bill of each day at the grocery store.
	var totalSpent = bill[0] + bill[1] + bill[2] + bill[3] + bill[4];
	var average = totalSpent / 5;

	console.log("You've spent a total of $" , totalSpent, "on groceries over 5 weeks. This brings it to a total of $" , average, "per week.") // Prints these results to the console. 

// Discounts

var itemName = "milk"; // This is the name of the item.
var itemDescription = "skim"; // This describes what the item is about. 
var itemPrice = "4"; // shows the price of item.
var discount = "50"; // shows how much of a discount the items recieves. 
var tax = "3"; // shows the amount of tax being added to the item. 
var itemDiscount = discount / 100; // shows item's discount by dividing the dicount by 100.
var itemTax = tax / 100; // shows the item tax by dividing the tax by 100.

// Item deal with discount first without tax.

discountPrice = itemPrice * itemDiscount; // shows the discount price by multiplying the item price by the item discount. 

discountInclude = itemPrice - discountPrice; // shows the discount of the item by subtracting the item price from the discount price. 

// Tax included after discount is applied. 

taxPrice = discountInclude * itemTax; // shows tax price by multiplying the discount included by the item discount.
taxInclude = taxPrice + discountInclude; // shows tax included by adding the tax price to the discount included. 

console.log("The" , itemName, "was at first $" , itemPrice, "but after the" , discount , "% discount, it is now $" , discountInclude, "without the tax and $" , taxInclude, "with the tax."); // Print results to the console.



