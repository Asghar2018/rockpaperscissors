// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var userChoice= "";
var compChoice= "";
var winner= "";
let randomNumber= 0;
$("#shoot").click(function() {
    let randomNumber=Math.random();
    let userChoice= $("#input").val();
    $("#result").text(userChoice);
    if (randomNumber <= 0.33) {
        console.log("paper");
        let compChoice= "paper";
    } else if (randomNumber >= 0.34 && randomNumber <= 0.66) {
        console.log("rock");
        let compChoice= "rock";
    } else {
        let compChoice= "scissors";
        console.log("scissors");
    }

if (userChoice === "scissors" ) {

} else if (userChoice === "rock") {

}else if (userChoice === "paper") {

}
});

// DOCUMENT READY FUNCTION BELOW

