"use strict";

    var planetsStrings = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsStrings.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsNewString = planetsArray.join('<br>');
    console.log(planetsNewString);

//BONUS:

    var planetsBrTag = planetsArray.join("<br>");

        console.log(planetsBrTag);

var planetsHTML = '<ul><li>' + planetsArray.join('<li></li>') + "</li></ul>";
        console.log(planetsHTML);