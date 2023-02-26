/* Write a function to check if an object is empty or not in javaScript?
How to check if an object is empty or not in javaScript? */

/* Test Case
    1. isEmpty({}) returns true
    2. isEmpty({key: 1}) returns false */

const obj = {
    name: "John Doe",
    username: "jonnydoe",
    age: 14
}

function isEmpty(obj) {
    return Object.keys(obj).length ===  0 ? true : false
}

console.log(isEmpty(obj))