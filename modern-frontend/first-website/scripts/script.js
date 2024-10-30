const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
console.log("Current year: ", new Date().getFullYear);

year.innerText = thisYear;
