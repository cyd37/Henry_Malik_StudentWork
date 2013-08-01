/*	Malik Henry
	Joseph "Joey" Dalton
	August 1, 2013
	Assignment: Funtions 
*/

//Industry-Based Function 





var imageAddr = "test.jpg" + "? n=" + Math.random(); // Defining the imageAddr variable a picture plus a random number.
var startTime, endTime; // Creating two more variables to mark start and end of task. 
var downloadSize = 200000; // Creating a next variable and assigning it the value of your download size.
var download = new Image(); // Creates variable and assigned a value. 
download.onload = function () //Creates a function for the download variable. 

{
	 endTime = (new Date()).getTime(); // Using the onload function and it's defining the time variables created earlier. 
	showResults();
}
		 startTime = (new Date()).getTime(); // Defining the start time variable using the date and time command. 
	download.src = imageAddr; // Downloading the content assigned to the imageAddr variable.

function showResults() // Defines bandwith related variables and perform mathematical operation then displays results.

{ 
	
		var duration = (endTime - startTime) / 1000; //Creates a variable for duration ands assigns two values and divides it with an expression of 1,000.
		var bitsLoaded = downloadSize * 8; //Creates a variable that includes the downloadSize variable and multiplies it by 8 for the amount of bits in a byte. 
		var speedBps = (bitsLoaded /duration).toFixed(2); // Creates variable that uses the two previous variables.
	    var speedKbps = (speedBps /1024).toFixed(2); // Creates a variable. 
		var speedMbps = (speedKbps /1024).toFixed(2); //Creates a variable.
		   alert("Your connection speed is: \n" + speedBps + " bps\n" + speedKbps + " kbps\n" + speedMbps + " Mbps\n" ); //Shows the speed of your network connection. 
}