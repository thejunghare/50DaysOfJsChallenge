let totalGrains = () => {
    let total = BigInt(0);
    for (let i = 1; i <= 64; i++) {
        total += grainOn(i);
    }
    return total;
}

let grainOn = (input) => {
    return BigInt(2 ** (input - 1));
}

console.log(grainOn(5))
console.log(totalGrains())