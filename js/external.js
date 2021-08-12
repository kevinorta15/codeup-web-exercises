"use strict"

console.log("Hello from external JS");
alert("Welcome to my website!");

var userColor = prompt("What is your favorite color?");

alert("Sweet! " + userColor + " is my favorite color too!");

// This is where my exercise 3 problems will live: SEE BELOW


var LM = parseInt(prompt("How many days would you like to rent the Little Mermaid for?"));
var BB = parseInt(prompt("How many days would you like to rent Brother Bear for?"));
var HR = parseInt(prompt("How many days would you like to rent Hercules for?"));

alert("Great! Your total for all the movies will be " + "$" + (LM + BB + HR) * 3);

//Problem 2

var GOOG = parseInt(prompt("How many hours did you work at Google?"));
var FACE = parseInt(prompt("How many hours did you work at Facebook?"));
var AMAZ = parseInt(prompt("How many hours did you work at Amazon?"));

alert("Your total weekly payment is: " + "$" + ((GOOG * 400) + (FACE * 350) + (AMAZ * 380)));

//Problem 3

var enroll = confirm("Is the class full?");
if (enroll == true) {
    alert("Sorry! The class is full!")
} else{
        var conflict = confirm("Is there a conflict with this class and your schedule?");
        if (conflict == true){
            alert("Sorry! You can enroll.")
        } else {
            alert("Great! You're enrolled!")
        }
    }

// Problem 4

var items = confirm("Are you buying more than two items?");
if (items == false){
    confirm("Are you a Premium member?")
}
    var expire = confirm("Is the offer expired?");
    if (expire == true){
        alert("Sorry! The offer is not valid at this time!")
    } else {
        alert("Sweet! Let's save you some money!")
    }






