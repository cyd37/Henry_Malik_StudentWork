/* Henry Malik
July 17 2013
Expression Worksheet- Web Design Schedule */

//This shows the amount of time you would spend working on a main client design and code pages written per year.


hoursPerDay = prompt("How many hours do you spend with your client everyday?:");
codePagesPerDay = prompt("How many pages of codes do you write for your client each day?:"); 
totalHours = hoursPerDay * 365;
totalPages = codePagesPerDay * 365;

console.log("Since you spend", hoursPerDay,  " hours per day with your client for the year, you would have worked", totalHours,  "hours in the year for that client. Also, since you wrote", codePagesPerDay, "pages of codes each day for a year, you would have wrote", totalPages, "codes of pages in the year for that main client.");