function factorial(n) {
	// write your code here
    if (n == 0 || n == 1){
        return n
    }

    let result = 1

    for (let i = 1; i <= n; i++) {
        result = result * i
    }

  //  return result
	return n * factorial(n-1)
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));
