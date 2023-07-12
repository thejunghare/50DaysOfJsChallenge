function findOdd(arr) {
    //happy coding!
    const counts = {};
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let num in counts) {
        if (counts[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    // If no odd occurrence is found, you can handle the error or return a default value.
    // In this example, returning -1 indicates that no odd occurrence was found.
    return -1;
}
