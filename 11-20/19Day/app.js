let color = 'black'
const colorCode = (color) => {
    // Code here
    
    let bandValue = 0

    switch (color) {
        case 'black':
            bandValue = 0
            break;
        case 'brown':
            bandValue = 1
            break;
        case 'red':
            bandValue = 2
            break;
        case 'orange':
            bandValue = 3
            break;
        case 'yellow':
            bandValue = 4
            break;
        case 'green':
            bandValue = 5
            break;
        case 'blue':
            bandValue = 6
            break;
        case 'violet':
            bandValue = 7
            break;
        case 'grey':
            bandValue = 8
            break;
        case 'white':
            bandValue = 9
            break;
        default:
            return 'color out of bond'
    }
    return bandValue
}
console.log(colorCode(color))