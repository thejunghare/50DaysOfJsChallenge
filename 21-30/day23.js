function findEvenIndex(arr) {
    let sum = 0, leftsum = 0, rightsum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        console.log("Value of " + arr[i])
        sum += arr[i]
    }

    console.log(sum)
 
    if (rightsum == leftsum) {
        return true
    } else {
        return false
    }
}

const arr = [1, 2, 3, 4, 3, 2, 1]
findEvenIndex(arr)
