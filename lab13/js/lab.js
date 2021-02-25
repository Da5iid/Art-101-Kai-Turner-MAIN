
console.log("I am linked"); //good ol' I am Linked.

//sets the button function as soon as the JS is loaded
$("#button").click(function() {setUpLoop()});

//function called by button. Grabs the form input, and makes sure it is a number
//before passing it to the getFizz function. Makes use of parseInt and isInteger to test the string.
function setUpLoop() {
  let count = $("#input").val();
  let countInt = parseInt(count); //converts to int from string

  if (Number.isInteger(countInt)) { //is it a real int?
    if (countInt <= 1000 && countInt >= 1) { //anything bigger than 1000 is too big
      runLoop(countInt);
    } else {
      alert("Please use a number between 1 and 1000!")
    }
  } else {
    alert("Please input a valid integer for the loop count!");
  }
}

//the loop function. Appends counting P elements to the output div however many times the user specifies.
function runLoop(count) {
  $("#output").html("");
  for (let i = 1; i <= count; i++) {
    tempFizz = getFizz(i);
    //console.log(tempFizz);
    $("#output").append("<p>" + tempFizz + "</p>");
  }
}

//getFizz does the actual Fizzing. puts together a string that includes the base number and any FizzBuzz whatevers attached to it.
function getFizz(i) {
  //let returnNum = i;
  let returnString = ""; //initializes as empty STRING! IMPORTANTE!
  if (i % 3 == 0) {
    returnString += "Fizz";
  }
  if (i % 5 == 0) {
    returnString += "Buzz";
  }
  if (i % 7 == 0) {
    returnString += "Boom";
  }
  if (returnString.length == 0) {
    return i; //just gives the number back if nothing was added to the string.
  }
  returnString = i + " - " + returnString + "!";
  return returnString;
}



//I still refuse to use var >:3

// if (Number.isInteger(parseInt(returnString)) == true) { //this nested function I wrote was cool so I left it here.
//   return i;
// }
