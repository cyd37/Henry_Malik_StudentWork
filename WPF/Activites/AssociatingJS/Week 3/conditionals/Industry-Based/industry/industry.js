/*  Henry Malik
	July 25, 2013
	Joey Dalton
	Assignment: Conditionals
*/	


// Industry-Based Conditional 

// To find out whether or not you should be a visual designer or a back-end designer.

var selection = prompt("Are you more of a visual person or a critical thinker?");

var visual = "visual"; 
var critical = "critical";
var visualAndCritical = "both";

if(selection === "visual" ) {console.log("You should go more towards front end designing then.")
}else{console.log("Maybe you should go towards back-end designing")}

if(selection === "critical") {console.log("You should consider taking up back-end designing.")
}else{console.log("Perhaps you should lean towards front-end designing.")}

if(selection === "both") {prompt("Well in this case, which one do you find easier to handle?")}