console.log("I am Linked!");

//Super basic square root calculator and name Fixer program. The Square root
//program has additional logic that fixes the answer if something that's not a number is passed over.

function squareRootPrompt() {
  //let finalRooted;
  let userAnswer = (prompt("Pick a number to square root: ")); //prompts the user to input
  let rooted = sqrRoot(userAnswer);

  console.log(rooted);

//  if(rooted == NaN) {
//    finalRooted = "not a number.";
//  }
// This did not work.

  console.log("The square root of "+ userAnswer +" is " + rooted);
  let output =("The square root of "+ userAnswer +" is " + rooted);

  document.getElementById("output").innerHTML = output;
}


function sqrRoot(number) {
  return Math.sqrt(number);
}

function nameWarp() {
  let userName = (prompt("Enter your name so I can 'fix' it:"));
  let nameArray = userName.split('');
  let nameSorted = nameArray.sort();

  let cased = nameSorted.map(nameSorted => nameSorted.toLowerCase());
  //nameArraySorted.toUpperCase([0]);
  //console.log(nameArray);
  nameSorted = cased.join('');
  let nameOutput = ("Your fixed name is : " + nameSorted);
  document.getElementById("output").innerHTML = nameOutput;
}

//let userAnswer = (prompt("Pick a number to square root: ")); //prompts the user to input
//let rooted = sqrRoot(userAnswer);
//console.log("The square root of "+ userAnswer +" is " + rooted);
//document.writeln("The square root of "+ userAnswer +" is " + rooted)
