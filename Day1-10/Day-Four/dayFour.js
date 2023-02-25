/* TODO: Write a function which can convert the time input given in 12 hours format to 24 hours format
        1. The check for 'AM' and 'PM' can be verified using endsWith String method
        2. An extra 0 would be needed if the hours have single digit */

let time = '01:43pm'
let convertTo24HrsFormat = (time) => {
    const timeToLowerCase = time.toLowerCase()
    // console.log(timeToLowerCase)

    let [hours, minutes] = timeToLowerCase.split(':')
    // console.log(timeToLowerCase.split(':'))

    if (timeToLowerCase.endsWith('am')) {
        // console.log('am')
        if (hours == 12) {
            hours = '0'
        } else {
            hours = hours
        }
    } else {
        // console.log('pm')
        if (hours == 12) {
            hours = '12'
        } else {
            hours = String(+hours + 12)
        }
    }

    return `${hours.padStart(2, 0)}:${minutes}`
}
console.log(convertTo24HrsFormat(time))