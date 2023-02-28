/* TODO: Write a function which accepts a string argumnet and returns the count of characters between thr first and last character X */

/* Test case
1. getTheGapX('XeroX') returns 4
2. getTheGapX('Xamarin') returns 0
3. getTheGapX('JavaScript') returns -1
4. getTheGapX("F(X) !== G(X) !== F(X)") returns 18
*/

const str = 'Javascipt';

function getTheGapX(str) {
    if (str.indexOf('X') === -1) return -1
    return str.lastIndexOf('X') - str.indexOf('X')
}

console.log(getTheGapX(str))
