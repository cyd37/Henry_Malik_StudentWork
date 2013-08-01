/*	Malik Henry
	Joseph "Joey" Dalton
	August 1, 2013
	Assignment: Funtions 
*/

//Industry-Based Function 





var imageAddr = "test.jpg" + "? n=" + Math.random(); // Defining the imageAddr variable a picture plus a random number.
var startTime, endTime; // Creating two more variables to mark start and end of task. 
var downloadSize = 200000; // Creating a next variable and assigning it the value of your download size.
var download = new Image(); // Creates variable and assigned to 
download.onload = function ()