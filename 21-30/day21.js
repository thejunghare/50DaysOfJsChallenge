/* 
Union of Two Arrays
Write the code for the function which returns the the union of the two given arrays
Test case:
unionOfArrays(\['a','b','c'\],\['a',1,2,'d'\]) should return \['a','b','c',1,2,'d'\]
unionOfArrays(\['array','object'\],\['value','object','key'\]) should return \['array','object', 'value', 'key'\]
unionOfArrays(\[1, 2, 34, 45, 3\], \[3, 24, 21\]) == \[1,2,34,45,3,24,21\]) should return \[1,2,34,45,3,24,21\]

*/

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
