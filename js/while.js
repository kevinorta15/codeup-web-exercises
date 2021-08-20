// While LOOP
"use strict";

// var i = 1
//
// while (i < 65536){
//     console.log(i *= 2);
// }


// DO WHILE TODO: An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * (100 - 50) + 50);

do {

    console.log(allCones + " is how many cones I have to sell today!");

// This expression will generate a random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;
   console.log("I am going to sell you " + cones);

    // allCones = allCones - cones

     if (cones > allCones){
        console.log("I cannot sell you " + cones + ", I have only: " + allCones)
     } else {
         allCones = allCones -cones;
         console.log("I sold " + cones + " cones and have " + allCones + " left");
     }
} while (allCones > 0){
    console.log("I'm all sold out! Come Back Tomorrow!");
}


