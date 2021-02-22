//uses jquery to select some div elements, and then puts in a button that does cool stuff.
//also has functions that toggle classes in the CSS

//adds button to the title
$("#title").append("<button id=titleButton>");
$("#titleButton").html("here's one button!");
$("#titleButton").click(function() {swagify1()});

function swagify1() {
  //console.log("button 1");
  $("#title").toggleClass("swag1");
}

//adds button to the challenges section
$("#challenges").append("<button id=challengesButton>");
$("#challengesButton").html("here's two button!");
$("#challengesButton").click(function() {swagify2()});

function swagify2() {
  //console.log("button 1");
  $("#challenges").toggleClass("swag2");
}

//adds button to the problems section
$("#problems").append("<button id=problemsButton>");
$("#problemsButton").html("here's three button!");
$("#problemsButton").click(function() {swagify3()});

function swagify3() {
  //console.log("button 1");
  $("#problems").toggleClass("swag3");
}

//-----bonus-----

$("#bonus").append("<button id=bButton1>");
$("#bButton1").html("haha");
$("#bButton1").click(function() {flipB2()});


$("#bonus").append("<button id=bButton2>");
$("#bButton2").html("haha");
$("#bButton2").click(function() {flipB1()});


function flipB1() {
  $("#bButton1").toggleClass("b1");}

function flipB2() {
  $("#bButton2").toggleClass("b2");}



  //$("#id").append("<button id=button1>Button text!</button>");
  //$("#button1").click(function() {"insert button code here OR function"});
