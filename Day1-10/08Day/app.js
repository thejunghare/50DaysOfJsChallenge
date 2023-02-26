/* TODO: Write a function which accepts two valid dates and returns the difference between them as number of days.

1. The difference between 2 dates in JavaScript will give the time difference in milliseconds
2. Time difference can be converted in to days by dividing the 24Hrs time in milliseconds */

/* Test Case
    1. getDaysBetweenDates('10/15/2020', '12/1/2020') returns 47
    2. getDaysBetweenDates('11/10/2021', '11/12/2021') returns 2
    3. getDaysBetweenDates('11/01/2020', '11/05/2020') returns 4 */
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    let date1 = new Date(dateText1)
    let date2 = new Date(dateText2)

    //1. The difference between 2 dates in JavaScript will give the time difference in milliseconds 
    let timeDifference = Math.abs(date2 - date1)
    console.log(timeDifference)

    //  Time difference can be converted in to days by dividing the 24Hrs time in millisecond
    let dayDifference = Math.ceil(timeDifference / DAY_IN_MILLISECONDS)
    console.log(dayDifference)

    return dayDifference
}

console.log(getDaysBetweenDates('10/15/2020', '12/1/2020'))