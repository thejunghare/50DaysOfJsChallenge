const unionOfArrays = (arr1, arr2) => {
    return removeDuplicateElements(arr1.concat(arr2))
};

const removeDuplicateElements = (arr) => {
    seen = new Map()
    let result = []

    arr.forEach(function (val) {
        if (!seen.has(val)) {
            result.push(val)
            seen.set(val, true)
        }
    })

    return result
}

console.log(`The union is ${unionOfArrays(['array', 'object'], ['value', 'object', 'key'])}`);
