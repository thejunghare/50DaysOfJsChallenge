function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart

}

console.log(randomNumberGeneratorInRange(5, 10))