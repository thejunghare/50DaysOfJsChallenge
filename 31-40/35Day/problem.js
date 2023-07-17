function largestElement(arr, n) {
    let largest = arr[0]

    for (let i = 0; i <= n; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }

    return largest
}

const arr = [10, 100, 1000, 10000]
console.log(largestElement(arr, 2));
