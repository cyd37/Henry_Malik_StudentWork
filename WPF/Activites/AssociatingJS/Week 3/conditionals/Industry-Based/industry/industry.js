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

if(selection === "visual") {console.log("You should go more towards front end designing then.") //console will print out what your path should be which would be front-end designs. 
}else{console.log("Make sure you input the correct word/spelling")} //console will print out this message if you mispelled the word or did not select one of the options.

if(selection === "critical") {console.log("You should consider taking up back-end designing.") 
}

if(selection === "both") {var selector = prompt("Well in this case, which one do you find easier to handle? \n \n Select one: \n visualizing \n thinking")}

var visualizing = "visualizing";
var thinking = "thinking"
 
 if(selector === "visualizing") {console.log("You might as well stick with the front-end designing buddy.")}

 if(selector === "thinking") {console.log("You should just continue with the back-end work pal.")}
