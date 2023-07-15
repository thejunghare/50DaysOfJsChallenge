function wave(str) {
    const waveArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            const waveWord = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
            waveArr.push(waveWord);
        }
    }

    return waveArr;
}

const input = "hello";
const output = wave(input);
console.log(output);
