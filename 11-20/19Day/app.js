let color = 'black'
const colorCode = (color) => {
    // Code here

    let bandValue = 0

    switch (color) {
        case 'black':
        case 'Black':
            bandValue = 0
            break;
        case 'brown':
        case 'Brown':
            bandValue = 1
            break;
        case 'red':
        case 'Red':
            bandValue = 2
            break;
        case 'orange':
        case 'Orange':
            bandValue = 3
            break;
        case 'yellow':
        case 'Yellow':
            bandValue = 4
            break;
        case 'green':
        case 'Green':
            bandValue = 5
            break;
        case 'blue':
        case 'Blue':
            bandValue = 6
            break;
        case 'violet':
        case 'Violet':
            bandValue = 7
            break;
        case 'grey':
        case 'Grey':
            bandValue = 8
            break;
        case 'white':
        case 'White':
            bandValue = 9
            break;
        default:
            return 'color out of bond'
    }
    return bandValue
}
console.log(colorCode(color))