//Pseudo Code for Magic 8 Ball:

//“Display magic 8 ball” -> Graphic, if available. (Picture of magic 8 ball)

//Ask user if they’d like to ask a question:
  //“Welcome to the Magic 8 ball, would you like to ask a question?” (Y/N)
    //IF Y = Proceed to next step
    //IF N = Exit program

//Ask user for question:
  //“What is your question?”
  //User input = "question"
    //Save user input -> To variable “question”

//Display text: “Lets Ask the Magic 8 ball!”

//Generate random answer:
  //Generate random number: “randomNumber” between 0 and the number of answers you have.
  //( A list of 15 - 20 hard coded magic 8 ball answers exist within the code. This might be in an if/else structure OR an array of strings.)

//Select the random answer from the table, based on the random number,
  //save the answer to a variable named “answer”.

//Display User question:
  //“Your question was: “question”

//Display random answer:
  //The Magic 8 Ball says: “answer”

//Ask user if they would like to ask another question (Y/N)
  //If “Y” -> Restart program from "Ask user for question"
  //If “N” -> Exit -> Display exit message, end program.
