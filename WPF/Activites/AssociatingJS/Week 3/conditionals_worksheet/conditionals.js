/* Malik Henry
   Web Programming Fundamentals
   Mr. Joey Dalton
   July 24, 2013
   Assignment: Conditionals Worksheet
 */
 

//Example

//To get in the heavyweight division of the Strawberry Festival’s pie eating contest you must weigh 250 lbs or more.  Determine whether an entrant qualifies based on his weight.

// To see whether or not the competitor is equal to 250 lb or more.

var competitorWeight = 249; 

var minWeight = 249

if(competitorWeight >= 250){ console.log("The Competitor is elligble!")

}else{}

if(competitorWeight <= minWeight) {console.log("You need to gain more weight")}


//Fahrenheit To Celsius

//Given

var temp = 77; // This is 77 F

var converted = "C"; // This is what the temperature will be converted to.

if(converted === "F") {    //This shows that it has to be strict equality. 

	tempToF = temp * 9 / 5 + 32
	console.log(tempToF); // If the selection is F, it will use this block of code.
}else{

	tempToC = (temp - 32) * 5 / 9 // If the selection is C, this block of code will be used.
	console.log(tempToC);
}


