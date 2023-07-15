function accum(s) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i).toUpperCase();
        const repeatedChars = char + char.toLowerCase().repeat(i);
        //   result += (i === 0 ? repeatedChars : '-' + repeatedChars);
        if (i === 0) {
            result += repeatedChars;
        } else {
            result += '-' + repeatedChars;
        }

    }

    return result;
}

let s = "Prasad"
console.log(accum(s))
