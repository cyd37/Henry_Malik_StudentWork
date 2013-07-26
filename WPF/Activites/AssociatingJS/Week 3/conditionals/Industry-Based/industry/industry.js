/*  Henry Malik
	July 25, 2013
	Joey Dalton
	Assignment: Conditionals
*/	


// Industry-Based Conditional 

// To find out whether or not you should be a visual designer or a back-end designer.

var selection = prompt("Are you more of a visual person or a critical thinker or both? \n \n Select Either: \n \n visual \n critical \n both");

var visual = "visual"; 
var critical = "critical";
var visualAndCritical = "both";

(selection === "visual") ? console.log("You should go more toward front end designing then.") : console.log("Make sure you input the correct word/spelling"); // A ternary showing what would result based on selections.


/*if(selection === "visual") {console.log("You should go more towards front end designing then.") //console will print out what your path should be which would be front-end designs. 
}else{console.log("Make sure you input the correct word/spelling")} //console will print out this message if you mispelled the word or did not select one of the options. */






if(selection === "critical") {console.log("You should consider taking up back-end designing.") // This will print out to the console that you would be better of taking the back-end designing. 
}

if(selection === "both") {var selector = prompt("Well in this case, which one do you find easier to handle? \n \n Select one: \n visualizing \n thinking")} // This will ask you an additional question if you select "both" as an answer.

var visualizing = "visualizing"; //Option based on prompt selection.
var thinking = "thinking" //Option based on prompt selection.
 
 if(selector === "visualizing") {console.log("You might as well stick with the front-end designing buddy.")} //Prints out to the console about the reconsideration of you being a front-end designer.

 if(selector === "thinking") {console.log("You should just continue with the back-end work pal.")} //Prints out to the console about the reconsideration of you being a back-end designer.


