function gcd(a, b) {
    // write your code here
    let result = 1
    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            result = i
            // return i // this return smallest comman divisor

        }
    }
    return result 

   /*
   using while loop
   while (b != 0){
        let temp = b
        b = a %b
        a = temp
    }

    return a */
}

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
// console.log(gcd(2, 4));
