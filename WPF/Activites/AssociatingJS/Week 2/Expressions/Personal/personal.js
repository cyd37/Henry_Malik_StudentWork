/* Henry Malik
July 17 2013
Expression Personal- My Cravings */

//These are the amount of reeses Peanut Butter Cups I purchase and the total cost of it per year. 

packsPerDay = prompt("How many packs do you buy a day?"); // how many packs the user will buy per day.
cupsInPack = prompt("How many reeses are in a pack?"); //how much reeses cups come in each pack.
averageCost = prompt("How much do you pay for a pack of your reeses?"); // average cost for a pack of reeses cups.
packsPerYear = packsPerDay * 365; // packs of reeses cups per year
cupsPerYear = packsPerYear * cupsInPack;
totalCost = averageCost * packsPerYear;

console.log("Since you buy", packsPerDay," reeses cups pack each day, which has in", cupsInPack, "reeses cups, you eat", packsPerYear, "packs per year. So this will be ", cupsPerYear, " reeses cups per year. Which then, would come out to be a total cost of $", totalCost, "per year.");


