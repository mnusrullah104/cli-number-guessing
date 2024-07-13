#! /usr/bin/env node
import inquirer from "inquirer";
// compare user input from computer genrated input
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt({
    name: "userGuessNumber",
    type: "number",
    message: "please guess a number between 1-10:",
});
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guess right number");
}
else {
    console.log("You guessed wrong number");
}
console.log(answers);
