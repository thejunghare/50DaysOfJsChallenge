const remove = (inputarray) => {
    let empty = []

    inputarray.forEach(function (item) {
        if (!empty.includes(item)) {
            empty.push(item)
        }
    })

    return empty
}

const longestConsecutiveSequence = (inputArray) => {
    // Your code here

    // remove the duplicate item
    inputArray = remove(inputArray)
    // console.log(`Removed duplicates : ${inputArray}`)

    // sort the array
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > inputArray[i + 1]) {
            let temp = inputArray[i]
            inputArray[i] = inputArray[i + 1]
            inputArray[i + 1] = temp
            i = -1
        }
    }

    // console.log(`sorted array : ${inputArray}`)

    // Find the length of longest pair
    let temp = inputArray[0]
    let result = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === temp) {
            result.push(inputArray[i])
            temp++
        }
    }

    return result.length
}

const inputArray = [100, 4, 200, 1, 3, 2]
//const inputArray = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

console.log(longestConsecutiveSequence(inputArray))