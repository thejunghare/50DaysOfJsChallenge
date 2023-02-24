/* Write a function which can convert the time input given in 12 hours format to 24 hours format
1. The check for 'AM' and 'PM' can be verified using endsWith String method
2. An extra 0 would be needed if the hours have single digit */

/* let convertTo24HrsFormat = (time12Format) => {
    const [time, modifier] = time12Format.split(" ")
    console.log(time12Format.split(" "))

    let [hours, minutes] = time.split(":")
    console.log(time.split(":"))

    if (hours === '12') {
        hours = '00'
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12
    }

    return `${hours}:${minutes}`
}

console.log(convertTo24HrsFormat(`01:10 PM`)) */

let time = '01:43 PM'
function convertTo24HrsFormat(timeText) {
    var timeTextLower = timeText.toLowerCase();
    console.log(timeText.toLowerCase())

    let [hours, mins] = timeTextLower.split(":");
    console.log(timeTextLower.split(":"))

    // 12 o clock is the special case to be handled both for AM and PM
    if (timeTextLower.endsWith("am")) hours = hours == 12 ? "0" : hours;
    else if (timeTextLower.endsWith("pm"))
        hours = hours == 12 ? hours : String(+hours + 12);

    return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
