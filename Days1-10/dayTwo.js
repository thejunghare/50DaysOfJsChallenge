/***** Write a program to reverse a string *****/

/***** 1. Use the split(), reverse(), and join() function *****/
function reverseString(str) {

    // convert string to array use split()
    const strArray = str.split('')

    // reverse the convert array use reverse()
    const reversedArray = strArray.reverse()

    // Join the reversed array use join()
    const joinReversedArray = reversedArray.join('')

    return joinReversedArray
}
console.log(reverseString(`javascript`))

/***** 2. Using three function's combined *****/
let anotherMethod = (str) => {
    return str.split('').reverse().join('')
}
console.log(anotherMethod('javascript'));

/***** 3. Using for loop *****/
let usingForLoop = (str) => {
    let loopedString

    for (let index = str.length - 1; index >= 0; index--) {
        loopedString += str[index]
    }

    return loopedString
}
console.log(usingForLoop(`javascript`))

/***** 4. Using recursion function *****/
let usingRecursionFunction = (str) => {
    if (str === '') {
        return ''
    } else {
        return usingRecursionFunction(str.substr(1)) + str.charAt(0)
    }
}
console.log(usingRecursionFunction(`javascript`))

/***** 5. Using ternary operator *****/
let usingTernaryOperator = (str) => {
    return (str === '') ? '' : usingTernaryOperator(str.substr(1)) + str.charAt(0)
}
console.log(usingTernaryOperator(`javascript`))