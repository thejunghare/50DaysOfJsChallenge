function findEvenIndex(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let rightSum = 0;
        let leftSum = 0;

        // calculate the sum of elments on the left side
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        // Calculate the sum of elements on the right side
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        if (rightSum === leftSum) {
            return i;
        }

    }

    return -1
}
