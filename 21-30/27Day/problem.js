function getCount(str) {
    let vowelsCount = 0;
    // enter your magic here

    // make the str to lower case
    words = str.toLowerCase()

    // making array of vowels
    vowels = ['a', 'e', 'i', 'o', 'u']

    // check if includes
    for (char of words) {
        if (vowels.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount
}
