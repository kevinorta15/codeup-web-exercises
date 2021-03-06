(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Kevin', 'Kenneth', 'Joanna', 'Patric'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log("This first name is: " + names[0]);
    console.log("This second name is: " + names[1]);
    console.log("This third name is: " + names[2]);
    console.log("This fourth name is: " + names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for ( var i = 0; i < names.length; i++){
    console.log('The name at index: ' + i + ' is ' + names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

  // When using a forEach, you put in a function with a single item from the array, i.e name(s) array, singular name, dog(s) array, singular dog,

    // This is the way that Joanna did it: Why does taking the S off of the string name work? Does Javascript understand plural?
    names.forEach(function (name){
        console.log("This is a single item of the names array: " + name)
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var fruits = ['apple', 'banana', 'pear', 'strawberry', 'mango'];

    console.log(fruits.length);

    function firstFruit(){
       return fruits[0];
    }

    firstFruit();

    function secondFruit(){
        return fruits[2];
    }

    secondFruit();

    function lastFruit(){
        return fruits[4];
    }

    lastFruit();
})();