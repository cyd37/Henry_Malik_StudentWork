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

if(competitorWeight >= 250){ console.log("The Competitor is elligible!")

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

//Grade Letter Calculator

var gradeNumber = prompt ("What grade did you receive at the end of your course as a whole number?");
    
if (gradeNumber >= 95){
    console.log("You received a " + gradeNumber + " which results to an A+"); //If the grade is a 95 or better, it will be an A+.
    
} else if(gradeNumber <= 94 && gradeNumber >= 90){
    console.log("You received a " + gradeNumber + " which results to an A."); //If the grade is greater than an 89 but less than a 95, it's an A.
    
} else if(gradeNumber <= 89 && gradeNumber >= 85){
    console.log("You received a " + gradeNumber + " which results to a B+."); //If the grade is greater than 84 but less than 90, it's an B+.
    
} else if(gradeNumber <= 84 && gradeNumber >= 80){
    console.log("You received a " + gradeNumber + " which results to a B."); //If the grade is greater than 79 but less than 85, it's an B.
    
} else if(gradeNumber <= 79 && gradeNumber >= 76){
    console.log("You received a " + gradeNumber + " which results to a C+."); //If the grade is greater than 75 but less than 80, it's an C+.
    
} else if(gradeNumber <= 75 && gradeNumber >= 73){
    console.log("You received a " + gradeNumber + " which results to a C."); //If the grade is greater than 72 but less than 76, it's an C.
   
} else if(gradeNumber <= 72 && gradeNumber>= 70){
    console.log("You received a " + gradeNumber + " which results to a D.");  //If the grade is greater than 69 but less than 73, it's an D.
    
} else
    console.log("You received a " + gradeNumber + " which results to a failure."); //This returns to a failure.



    // Movie Ticket Price

//Given items
var timeForShow = 2;
var age = 13;
var regularTicket = 12;
var discountTicket = 7;

((age <= 10 || age >= 55) || (timeForShow <= 3 || timeForShow >= 5)) ? console.log("The ticket Price is",discountTicket) : console.log("The ticket price is",regularTicket);

if((age <= 10 || age >= 55 ) || (timeForShow >= 3 || timeForShow <= 5)){
    console.log("The ticket price is",discountTicket);
}else{
    console.log("the ticket price is",regularTicket);
}


