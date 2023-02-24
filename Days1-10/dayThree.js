/* Write a program to reverse a given integer number */

let reversedNumber = (num) => {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
}
console.log(reversedNumber(-12))