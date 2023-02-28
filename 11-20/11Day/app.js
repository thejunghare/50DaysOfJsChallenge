let n = 0; // declare value to be checked

function fibonacci(n) {
    // Declare value of firstTerm and secondTerm
    let firstTerm = 0, secondTerm = 1, nTerm;

    // loop starts form 2 because we already know first two values i.e. firstTerm and secondTerm 
    for (let index = 2; index <= n; index++) {
        // get the nth / nTerm by adding firstTerm and secondTerm
        nTerm = firstTerm + secondTerm;

        // updated the firstTerm with value of firstTerm
        firstTerm = secondTerm;

        // updated the secondTerm with value of secondTerm
        secondTerm = nTerm;
    }
    // if number is 0 return firstTerm else secondTerm
    return n ? secondTerm : firstTerm;
}
console.log(`fibonacci value at position ${(n)}: ${fibonacci(n)}`);