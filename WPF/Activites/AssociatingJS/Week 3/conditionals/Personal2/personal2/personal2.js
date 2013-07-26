/*  Henry Malik
	July 25, 2013
	Joey Dalton
	Assignment: Conditionals
*/	


// My Personal Condition



// A kid wants to buy a snack from the grocery store and wants to know if he/she can purchase this snack because of his/her allergies.

// The kid is allergic to nuts and coconut. 

/* This is the kid's selection from the store: 

    Oreos
    Almond Joy
    Snickers
    Reeses Cups
 */   

var selection = prompt("Select one of the snacks we have available from the store. \n  oreos \n almond \n snickers \n reeses"); //Opens the prompt to make a selection.

var oreo = "chocolate"; //Oreo

var almond = "coconut"; //Almond Joy

var snickers = "nuts"; // Snickers

var reeses = "peanut Butter"; // Reeses Cup peanut Butter


if((selection === "almond") || (selection === "snickers")){
    console.log("sorry you can't have this"); // Prints to the console that you cannot have the item.
}else{
    console.log("Here you go, have a good day!") // Prnts to the console that you can have the item.
}

