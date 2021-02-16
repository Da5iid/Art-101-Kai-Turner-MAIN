/*
This block o' code defines functions for the two buttons present on the parent HTML page.
The two primary funcntions called by the buttons are runScromble() and glitch1().
Both have some supporting functions, not to be used by the HTML buttons.
*/
console.log("JS has loaded!");

//Primary function called by the HTML button.
function runScromble() {
  let name = getUsername();
  console.log(name);
  scromble(name)
}

//simple function to get username from user.
function getUsername() {
  let name = prompt("Please enter your name:","Your Name");
  return name;
}

//scromble the given username.
function scromble(username) {
  console.log(username);

  //split the string
  var nameArray = username.split('');
  console.log("nameArray= ", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort(function(a, b){return 0.5 - Math.random()});
  console.log("nameArraySort= ", nameArraySort);

  //join array back to a string
  var nameSorted = nameArray.join('');
  console.log("nameSorted= ", nameSorted);

  //print new name: fills a div with a hard coded P element. Includes output ID for external CSS styling.
  document.getElementById("output").innerHTML = "<p id='output'>Here is your new name: <b>" + nameSorted + "</p>";
}

//------------------------------------------------------------------------------


//glitch function called by HTML button: messes with the page.
function glitch1(){

  //changes the color of the pseudo page div that holds everything
    document.getElementById("pageDiv").style.backgroundColor = randomRGB();

  //changes the scale of the pseudo page div randomly.
    document.getElementById("pageDiv").style.transform = "scale(" + (Math.random()+0.1) + "," + (Math.random()+0.1) + ")";

  //changes the real body background to its own random color.
    document.body.style.backgroundColor = randomRGB();
}


//generates a random RGB value and returns at as a nice string HTML likes
function randomRGB() {
  let minimum = 50; //min value for each RGB value, 50 min keeps colors bright.
  let maximum = 255; //max value, should not exceed 255
  function randRGB(min, max) {
    let output = (Math.random() * (max - min) + min);
    return output;
  }
//applies RGB values for each
  let r = randRGB(maximum, minimum);
  let g = randRGB(maximum, minimum);
  let b = randRGB(maximum, minimum);
  //console.log(r);

//puts it all together
  let rgbString = "rgb("+r+","+ g +","+ b +")";
  console.log(rgbString);
  return rgbString;
}
