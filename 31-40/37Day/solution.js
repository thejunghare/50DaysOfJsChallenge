/*on every year that is evenly divisible by 4
except every year that is evenly divisible by 100
unless the year is also evenly divisible by 400*/

const isLeap = (year) => {
    // code here
    if (year % 4 === 0) {
        return true
    } else if (year % 400 === 0) {
        return true
    } else if (year % 100 === 0) {
        return false
    }

    return false
}

console.log(isLeap(2020)) // true
console.log(isLeap(2022)) // false