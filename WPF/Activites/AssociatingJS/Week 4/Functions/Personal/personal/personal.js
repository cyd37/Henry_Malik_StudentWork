/*	Malik Henry
	Joseph Dalton
	August 1, 2013
	Assignment: Functions
*/

//This code uses the image rollover function. 


if (document.images) {     // You would have to put in your own images for this to work.
	smile = new Image
	nosmile = new Image

	smile.src = "malik.jpg"
	nosmile.src = "malik1.jpg"
}


function swapImage(thisImage,newImage) { // This function changes the images. 
	if (document.images) {
		document[thisImage].src = eval(newImage + ".src")
	}
}

console.log("Your image should be rolled over when the mouse hover overs the image.");
-->

