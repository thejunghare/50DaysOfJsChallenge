const longestConsecutiveSequence = (inputArray) => {
    // Your code here
//    inputArray.sort()
    let result = []

    for (let i = 0; i < inputArray.length; i++) {
        //        Sorting the elements
        if (inputArray[i] > inputArray[i + 1]) {
            let temp = inputArray[i]
            inputArray[i] = inputArray[i + 1]
            inputArray[i + 1] = temp
            i = -1
        }
    }

    console.log(inputArray)

//    inputArray.sort((a, b) => a - b)


    let temp = 1
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === temp) {
            result.push(inputArray[i])
            temp++
//            break
        }
    }
//    let output = new Set(result)
//    console.log(output)

    /*    for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === temp) {
                result.push(inputArray[i]);
                temp++;
            } else if (inputArray[i] > temp) {
                temp = inputArray[i];
                result = [inputArray[i]];
                temp++;
            }
        }*/

    let output = [...new Set(result)]
        console.log("output",output)
    
    return output.length
//    return [...new Set(result)];
}

//const inputArray = [100, 4, 200, 1, 3, 2]
const inputArray = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

console.log(longestConsecutiveSequence(inputArray))


