function expandedForm(num) {
    // your code here
    let tostring = num.toString().split("");

    for (let i = 0; i < tostring.length; i++) {
        for (let j = tostring.length - i; j > 1; j--) {
            tostring[i] += "0";
        }
    }

    return tostring.join("+");
}
