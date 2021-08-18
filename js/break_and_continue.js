"use strict";

// var randomNumber = Math.floor(Math.random() * (50 - 1) + 1);

do {
    var randomNumber = parseInt(prompt("Choose a random number:"));
} while (randomNumber % 2 == 0)

console.log(randomNumber + ": is your number to skip.. ")

for (var i = 1; i < 50; i++) {

    if (i % 2 == 0) {
        continue;
    }
    if (i == randomNumber) {
        console.log("Yikes! Skipping number: " + randomNumber);
        continue;
    } else (i % 2 !== 0)
        console.log("Here is an odd number: " + i)
}

