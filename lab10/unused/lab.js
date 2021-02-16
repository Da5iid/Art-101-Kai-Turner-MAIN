console.log("I am Linked!");
// Playing with anonamous functions. Very confusing.
// Defining the functions.

function runClear() { //this clears the html output.
  clear();
}

function clear() { //clears the output section in the HTML by replacing whatever is there with "" (nothing).
  let blank =("");
  console.log("Clear button has been clicked!");

  document.getElementById("output1").innerHTML = blank;
  document.getElementById("output2").innerHTML = blank;
  document.getElementById("output3").innerHTML = blank;
}

//This chunk defines the actual test functions. Added the code that prints the result in the HTML page.
function firstThing(test) {
  console.log(test + ": This is the firstThing.<br>");

  let output =(test + ": This is the firstThing.<br>");
  document.getElementById("output1").innerHTML = output;
}

function secondThing(test) {
  console.log(test + ": This is the secondThing.<br>");

  let output =(test + ": This is the secondThing.<br>");
  document.getElementById("output2").innerHTML = output;
}

function thirdThing(test) {
  console.log(test + ": This is the thirdThing.<br>");

  let output =(test + ": This is the thirdThing.<br>");
  document.getElementById("output3").innerHTML = output;
}

//Testing the functions in order:

function runTest1() { //function runs test 1 when called.
  firstThing("TEST 1");
  secondThing("TEST 1");
  thirdThing("TEST 1");
}

function runTest2() { //Function runs test 2. Testing the functions with the setTimeout method incorperated, no timings yet. Virtually identical.
  setTimeout(function() {
    firstThing("TEST 2");
  }, 0);

  setTimeout(function() {
    secondThing("TEST 2");
  }, 0);

  setTimeout(function() {
    thirdThing("TEST 2");
  }, 0);
}
  // Third test with timer usage. Big Pog.

function runTest3() { //Function runs this test. This is the one with the timings wokring as described.
  setTimeout(function() {
    firstThing("TEST 3 First Thing");
  }, 3000);

  setTimeout(function() {
    secondThing("TEST 3 Second Thing");
  }, 1000);

  setTimeout(function() {
    thirdThing("TEST 3 Third Thing");
  }, 2000);
}
