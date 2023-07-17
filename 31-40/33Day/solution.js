function set(arrOfNum) {

    // using includes and push methods
    /* var empty = []

    arrOfNum.forEach(function (item) {
        if (!empty.includes(item)) {
            empty.push(item)
        }
    })

    return empty */

    // uisng  map method
    /* let arr = new Map()
    var empty = []

    arrOfNum.forEach(function (item) {
        if (!arr.has(item)) {
            arr.set(item, true)
            empty.push(item)
        }
    })

    return empty 
    */



    // using new set Method
    // The set remove all the duplicate element of an array

    /*  
    const newValues = new Set(arrOfNum)
     return [...newValues] 
 
     // return [...newValues] = new Set(arrOfNum)
    
 */
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6]
console.log(set(arrOfNum));
