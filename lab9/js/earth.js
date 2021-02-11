console.log("I am Linked!");

function goldBackground() {
  document.getElementById("swagP").style.backgroundColor = "goldenRod";
}

function hellaSwag() {
  let swagArray = ["SWAG"];
  for (i=0; i <= 99; i++) {
    swagArray.push("SWAG");
  }
  swagArray.push(".png");
  let swagString = (swagArray.join(''));
  document.getElementById("swagP").innerHTML = swagString;
}

function replaceEarth() {
  let earthImage = document.getElementById("planet").src = "img/goldEarthPS.png";
}

function updateText() {
  document.getElementById('p1').innerHTML = "SWAGGGG! You bought the F#$@ING EARTH!!!";
  document.getElementById('p2').innerHTML = "Nice... Fucking. Nice.";
}

function swagify() {
  goldBackground();
  hellaSwag();
  replaceEarth();
  updateText();
  updateButton();
}

function updateButton() {
  document.getElementById("purchase").innerHTML = "<b>die fulfilled i guess.</b>"
  document.getElementById("purchase").onclick = function() {
    toHome();
  }
}

function toHome() {
  location.replace("../index.html") //links us back to my home page lol.
}
