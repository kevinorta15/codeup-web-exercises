
$(document).ready(function (){

//saved gitapi in Keys.js

    function getcommitDate(username) {
        fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'gitAPI'}})
            .then(function(results){
                console.log(results)
                results.json()

                    .then((resultsArray) => {
                        console.log(resultsArray); //see exactly what we get back, and take commit time from this
                        console.log("created Date and Time: " + new Date (resultsArray[0].created_at));
                        return new Date (resultsArray[0].created_at); //takes in object from response (created_at)
                    })
                    .catch(error => console.error(error))
            });
    }

    console.log(getcommitDate("kevinorta15")); //put username to find commit time
});


