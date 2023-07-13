let uniqueInOrder = (iterable) => {
    return iterable.filter((element, index) => element !== iterable[index - 1]);

    /* 
      // return  [...iterable].filter((element, index) => element !== iterable[index - 1]);
      If you used these return statement instead, code from line number 31 - 50 is useless as this will 
      pass all the test case for this problem statement
    */
};


// For iterable type string
let forString = (iterable) => {
    return uniqueInOrder([...iterable]);
};

// For iterable type array / object
let forArray = (iterable) => {
    return uniqueInOrder(iterable);
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
