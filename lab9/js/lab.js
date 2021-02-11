console.log("I am Linked!");

//This JS program allows the user to push a button and print money on the screen
//Within the code is segments that add additional money per click, and also change some HTML attributes and styles
//as a result of clicking. Not terribly complicated but has a fun effect.

var moneyArray = ["$$$"]; //array that will house all the "$$$" strings
var condenced;
var moneyCount = 0;

function letsGo() { //function is called by the HTML button on the webpage. Does the money printing.
  let outputEl = document.getElementById("codeOut");
  let newEl = document.createElement("p");

  condenced = moneyArray.join(''); //condences all the money strings in moneyArray into a single string.
  newEl.innerHTML = condenced;

  moneyArray.push("$$$"); //[$$$,$$$] adds a new block of dollarsigns to the moneyArray for use next time.
  moneyCount++; //incraments the money counter, this is used to decide when certain events happen.
  console.log(moneyCount);

  if (moneyCount == 19) {
    moneyArray[20] = "Dawg is that enough?"
  }

  newEl.id = "cash"; //adds an ID to the P element that holds the cash so it can be styled via CSS
  outputEl.appendChild(newEl); //appends the new block into the div element specified earlier.

  goldText(); //updates the text elements to gold one at a time. Also runs the dialoug.

//If statements that run various functions based on how many times the user has clicked the money button.
  if (moneyCount == 9) {
    goldBackground()
  }
  if (moneyCount >= 10 && moneyCount <= 13) {
    postImage();
  }
  if (moneyCount == 17) {
    cashOutButton();
  }
}


//defining functions that change stuff
function goldBackground() {
  document.body.style.backgroundColor = "goldenRod";
}

//changes all text to gold one at a time
var goldCount = 0;

function goldText() {
  goldCount++;
  if (goldCount <= 8) {
    let id = ("toGold" + goldCount);
    console.log(id);
    document.getElementById(id).style.color = "gold";
  }
  if (goldCount == 2) {
    document.getElementById("toGold2").innerHTML = "This lab was pretty <b>swag</b> ngl.";
  }
  if (goldCount == 4) {
    document.getElementById("toGold4").innerHTML = "Optimal swag <b>achieved.</b>  :O  Wasn't even a challenge.";
  }
  if (goldCount == 6) {
    document.getElementById("toGold6").innerHTML = "What problems? We're printing <b>FREE MONEY</b> and a <b>LOT</b> of it. Might as well drop out of college amirite???";
  }
  if (goldCount == 8) {
    document.getElementById("toGold8").style.color = "goldenRod";
    document.getElementById("toGold8").innerHTML = "Damn, we might have enough money to start buying some cool s#it!";
    document.getElementById("moneyButton").innerHTML = "Buy Cool Shit + Print more MONEY!"
  }
  if (goldCount == 9) {
    document.getElementById("toGold8").style.color = "white";
    document.getElementById("toGold8").innerHTML = "YOOOOO! We turned the '.style.backgroundColor' element into <b>PURE GOLD!</b> Lit! What else can we buy??";
    document.getElementById("moneyButton").innerHTML = "Buy <b>MORE<B> Cool Shit + Print <B>MORE MONEY!</b>";
  }
  if (goldCount == 10) {
    document.getElementById("toGold8").innerHTML = "AW $#IT! We just bought a whole ass <b>BITCOIN!!!</b> Always wanted me one of thems.";
  }
  if (goldCount == 11) {
    document.getElementById("toGold8").innerHTML = "DAMN SON! Thats a <b>fiiiiiine Rolli' !</b> But I still think we can go <b>BIGGER</b> with all that <b>CASH</b> we just printed! >:3";
    document.getElementById("moneyButton").innerHTML = "Buy <b>MORE<B> Expensive Shit + Print <B>MORE MONEY!</b>";
  }
  if (goldCount == 12) {
    document.getElementById("toGold8").innerHTML = "Solid gold LaMbo?? Solid heckin choice <b>B!</b> Haha we got liquid assets up the wazzu' to pay for the insurance premium on that bad boy too, so don't you worry!";
    document.getElementById("moneyButton").innerHTML = "Buy <b>MORE<B> Over-Priced Shit + Print <B>MORE MONEY!</b>";
  }
  if (goldCount == 13) {
    document.getElementById("toGold8").innerHTML = "Pulling out <b>ALL</b> the stops I see! You just literally bought the <b>Entire Gold Stock of Fort Knox</b> with money you printed for <b>FREE!</b> I had no idea that was even possible!";
    document.getElementById("moneyButton").innerHTML = "Print <B>MOAR MONEY!!!!!</b>";
  }
  if (goldCount == 14) {
    document.getElementById("toGold8").innerHTML = "Well, since you now own 56% of the nation's <b>Gold Reserves</b> and also <b>98%</b> of the worlds <b>WEALTH,</b> what is there left to buy that could top all that??";
    document.getElementById("moneyButton").innerHTML = "Print <B>some extra spending cash :)</b>";
  }
  if (goldCount == 15) {
    document.getElementById("toGold8").innerHTML = "...wait. <b>WAIT.</b> I got it!!!! Oh we weren't even starting to think <b>BIG ENOUGH!!</b>  >:)";
    document.getElementById("moneyButton").innerHTML = "What do you mean fam?</b>";
  }
  if (goldCount == 16) {
    document.getElementById("toGold8").innerHTML = "Dawg get ready to heckin <b>CASH OUTTT</b> because this next purchase is of god dam <b>GLOBAL. PORPORTIONS.</b> >:3";
    document.getElementById("moneyButton").innerHTML = "Aight bet, let's <b>get it!</b>";
  }
  if (goldCount == 17) {
    document.getElementById("toGold8").innerHTML = "Yeah <b>B,</b> hit that <b>Cash OUT</b> button when you're ready. >:)))))";
    document.getElementById("moneyButton").innerHTML = "Print <b>more cash per click</b> than the universe allows.</b>";
  }
}

//posts images of golden swag things one at a time
var imagesArray = ["img/bitcoin.png","img/rolex.png","img/lambo.png","img/gold.jpg"];
var imageCounter = 0;
function postImage() {
  let imgDiv = document.getElementById("images");
  let newImage = document.createElement("img");

  let currentImage = imagesArray[imageCounter];
  console.log(currentImage);

  newImage.src = (currentImage);
  imgDiv.appendChild(newImage);
  imageCounter++;
}

//a new button appears prompting the user to "cash out";
//getting the newButton.onclick to set correctly was a CHALLENGE. Turns out you
//need to write it as an anonamous function, as if you try to pass it just a regular
//function outside of quotes, it runs immeditly even before you press the button.
//Quite hard to find that answer too. Glad I did tho ugh.
function cashOutButton() {
  let outputDiv = document.getElementById("buttons");
  let newButton = document.createElement("button");
  newButton.id = "cashOut";
  newButton.onclick = function() {
    toPlanet();
  }
  newButton.innerHTML = "<b>Cash OUT!!!</b>";
  outputDiv.appendChild(newButton);
  console.log(newButton);
}
//<button id="cashOut" onclick="toPlanet()"><b>Cash OUT</b></button> <- Creates something like this.


function toPlanet() {
  location.replace("../lab9/index2.html") //links us to space lol.
}
