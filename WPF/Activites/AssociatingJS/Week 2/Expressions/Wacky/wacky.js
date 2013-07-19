/* Henry Malik
July 17 2013
Expression Worksheet- Skype Users */

// This shows how much money you would spend on a Pay As You Go Skype Credit deal in the USA . 

minsPerCall = prompt("How much minutes would you use per call?"); // how many minutes the user will use on each Skype call.

var mins = 2.03;

costPerCall = minsPerCall * mins; // Cost of each call per minute.


console.log("Since you use", minsPerCall," minutes each call, which cost $", mins, "per call, you would be able to find out how much money you would spend per calls which of course, because of your minutes spent, you would have spent $", costPerCall, "dollars per call." );


