/* TODO : Write a function to truncate a string to a certain number of words */

/* Test case
1. truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
2. truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"
*/

const str = 'JavaScript is simple but not easy to master'
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    return str.split(" ").splice(0, wordLimit).join(" ").toString()
}

console.log(truncateWithWordLimit(str, wordLimit))