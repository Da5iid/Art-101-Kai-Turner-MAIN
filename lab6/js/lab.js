console.log("I am linked!");
let currentYear = 2021;

/*

This JS file defines an array that has a list of all the common modes of transportation we use.
It also has 2 objects, one for Kai's car and one for Lu's car.

*/

//Define Kai's Car
/*
let user1 = "Kai";
let make1 = "Fiat";
let model1 = "500 Abarth";
let color1 = "White w/ red accents";
let year1 = 2013;
let age1 = currentYear - year1;
*/



var myTransport = [" Feet"," Car"," Roller Skates"," Skate Board"," Bike."];


var kaisCar = {user:"Kai", make:"Fiat", model:"500 Abarth", color:"White w/ red accents", year:2013, name:"Sophie, AKA, 'The Egg'"};
kaisCar.age = (2021 - kaisCar.year);


var lusCar = {user:"Lu", make:"Volvo", model:"480", color:"Navy Blue", year:1989};
lusCar.age = (2021 - lusCar.year);




console.log(kaisCar);
console.log(lusCar);

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("Kai's Main Ride: <pre>", JSON.stringify(kaisCar, null, '\t'), "</pre>");
document.writeln("Lu's Main Ride: <pre>", JSON.stringify(lusCar, null, '\t'), "</pre>");


/*
//Define Lucinda's Car
let user2 = "Lucinda";
let make2 = "Volvo";
let model2 = "480";
let color2 = "Navy Blue";
let year2 = 1989;

let age2 = currentYear - year2;

//printing the stuff to the website.
document.writeln("User: " + user1 +"<br>");
document.writeln("Make: " + make1 +"<br>");
document.writeln("Model: " + model1 +"<br>");
document.writeln("Color: " + color1 +"<br>");
document.writeln("Year: " + year1 +"<br>");
document.writeln("Age: " + age1 +"<br><br>");

document.writeln("User: " + user2 +"<br>");
document.writeln("Make: " + make2 +"<br>");
document.writeln("Model: " + model2 +"<br>");
document.writeln("Color: " + color2 +"<br>");
document.writeln("Year: " + year2 +"<br>");
document.writeln("Age: " + age2 +"<br>");
*/

//hi hi
