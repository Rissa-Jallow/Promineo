//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 12;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 100.55;

//create a variable to hold a person's middle initial
let middleInitial = "A";

//create a variable to hold true if it's hot outside and false if it's cold outside
let hotTemperature = true;

//create a variable to hold a customer's first name
let customerFirstName = "FirstName";

//create a variable to hold a street address
let streetAddress = "123 Main Street NE";

//print all variables to the console
console.log(availablePlaneSeats);
console.log("$ " + costOfGroceries);
console.log(middleInitial);
console.log(hotTemperature);
console.log(customerFirstName);
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;
console.log("$ " + costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "S";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
hotTemperature = !hotTemperature;
console.log(hotTemperature);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = customerFirstName + " " + middleInitial + " LastName";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi, my name is " + customerFirstName + " and I live at " + streetAddress);

var num1 = 52;
var num2 = 13;
var x = num1 + num2 + 10;
console.log(x);

var x = 5;
var y = 6;
x = 3 +y
var z = x + y;
y = 5 + 2*x
x = y
console.log(z);

var x = 25;
var y = 3;
var z = "Z = " + (x*2);
console.log(z);