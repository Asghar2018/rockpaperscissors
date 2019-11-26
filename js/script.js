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
        debugger;
        console.log("paper");
    } else if (randomNumber >= 0.34 && randomNumber <= 0.66) {
        console.log("rock");
    } else {
        console.log("scissors");
    }
});

// DOCUMENT READY FUNCTION BELOW

