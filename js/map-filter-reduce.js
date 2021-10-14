const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threeLanguages = users.filter((language) => {
    return language.languages.length >= 3;
})

console.log(threeLanguages);

//TODO: Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map((info) => {
return info.email;
});

console.log(userEmails);

//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience

}, 0)

console.log(totalExperience);
//Average of Experience below
let avgExp = totalExperience / users.length

console.log(avgExp);

//TODO: Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((object, next) => {
    return object.email.length > next.email.length ? object : next;
});

console.log(longestEmail);

//TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let listofUsers = users.reduce((object, single, index) => {
//     if (index !== users.length-1) {
//         return object + single.name + ', '
//     }
//     return object + single.name + '.'
// }, "The instructors are: ");

let listofUsers = users.map((user) => {
    return user.name
}).join(', ')

console.log(listofUsers);
