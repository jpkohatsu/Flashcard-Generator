var inquirer = require("inquirer");
var clozeCard = require("./ClozeCard");
var basicCard = require("./BasicCard");


function greetingPrompt() {
  inquirer.prompt([
{
  type: "list",
  message: "Would you like to play basic or the cloze game?",
  choices: ["basic", "cloze", "do not play"],
  name: "basicOrCloze"
}
]).then(function(inquirerResponse) {
  // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
  if (inquirerResponse.basicOrCloze=== "basic") {
    console.log("Great, lets begin!");
    BasicCard();
  }

  else if (inquirerResponse.basicOrCloze=== "cloze") {
    console.log("Great, lets begin!");
    ClozeCard();
  }

  else (inquirerResponse.basicOrCloze=== "do not play") {
      console.log("Ok");
    }

});}
