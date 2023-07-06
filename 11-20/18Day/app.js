let totalGrains = () => {
    let total = BigInt(0);
  for (let i = 1; i <= 64; i++) {
    total += grainsOn(i);
  }
  return total;
}

let grainsOn = (input) => {
    let result = 1
    for (let i = 1; i < input; i++){
        result *= 2
    }

    return BigInt(result)
}
console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains(5)}`)
