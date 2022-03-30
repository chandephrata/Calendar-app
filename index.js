//write your code here!!

const calendarApi ="https://www.daysoftheyear.com/"



fetch(calendarApi)
.then(resp => resp.json())
.then(displayDefaultDays)


function displayDefaultDays (data) {
     console.log(data)
}



const date = new Date();

const month = date.getMonth();

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];


document.querySelector(".date h1").innerHTML= months[date.getMonth()]  // removed current month in <h1> on HTML and replaced it with innerHTML in js so it can dynamically display each month to the DOM

document.querySelector(".date p").innerHTML=date.toDateString();   ///removed current date in <p> on HTML and replaced it with innerHTML in js so it can dynamically display each date to the DOM


