
console.log("I am linked");

$("#button").click(function() {runSort()});

function runSort() {
  let name = $("#input").val();
  //console.log(name);
  let yourHouseMod = sortingHat(name);
  console.log(yourHouseMod);

  let houseArray = ["nothing! Give me ur name silly!","Gryffindor","Ravenclaw","Slytherin","Hufflepuff"];
  let descArray = [" ","Gryffindor values bravery, daring, nerve, and chivalry.",
  "Ravenclaw values intelligence, knowledge, curiosity, creativity and wit.",
  "Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness. It was founded by Salazar Slytherin.",
  "Hufflepuff values hard work, dedication, patience, loyalty, and fair play."];

  $("#output1").html("The sorting hat has sorted you into " + houseArray[yourHouseMod] + "!");
  $("#output2").html(descArray[yourHouseMod]);
}

function sortingHat(string) {
  let length = string.length;

  if (length == 0) {
    return 0;
  } else {
    let mod = ((length % 4)+1);

    console.log(mod);
    return mod;
    /*
    if (mod == 0) {
      return "Gryffindor";
    } if (mod == 1) {
      return "Ravenclaw";
    } if (mod == 2) {
      return "Slytherin";
    } if (mod == 3) {
      return "Hufflepuff";
    } else {
      return "Sorting hat has died. Oops."
    }
    */
  }
}
