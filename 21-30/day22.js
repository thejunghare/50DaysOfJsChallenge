/* 
  Problem statement :
  Unique In Order
  Implement the function unique_in_order which takes as argument a sequence and returns a list 
  of items without any elements with the same value next to each other and preserving the original order of elements.
  The argument can contain a string or an array
  For example: uniqueInOrder([1,2,2,3,3]) should return [1,2,3]
  uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']
*/

/* 
  All test cases:
  uniqueInOrder('AAAABBBCCDAABBB') should return \['A', 'B', 'C', 'D', 'A', 'B'\]
  uniqueInOrder('ABBCcAD') should return \['A', 'B', 'C', 'c', 'A', 'D'\]
  uniqueInOrder(\[1,2,2,3,3\]) should return \[1,2,3\]

*/

let uniqueInOrder = (iterable) => {
    return iterable.filter((element, index) => element !== iterable[index - 1]);
  
    /* 
      // return  [...iterable].filter((element, index) => element !== iterable[index - 1]);
      If you used these return statement instead, code from line number 31 - 50 is useless as this will pass all the test case for this problem statement
    */
};


// For iterable type string
let forString = (iterable) => {
    return removeDuplicateElements([...iterable]);
};

// For iterable type array / object
let forArray = (iterable) => {
    return removeDuplicateElements(iterable);
};

// Find type of iterable
let findtype = (iterable) => {
    if (typeof iterable === "string") {
        return forString(iterable);
    } else if (Array.isArray(iterable) || typeof iterable === "object") {
        return forArray(iterable);
    }
};

console.log(findtype(iterable));
