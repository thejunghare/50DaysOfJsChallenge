const str = 'Javascipt';

function getTheGapX(str) {
    if (str.indexOf('X') === -1) return -1
    return str.lastIndexOf('X') -  str.indexOf('X')
}

console.log(getTheGapX(str))
