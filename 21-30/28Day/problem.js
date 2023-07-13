function toWeirdCase(string) {
    // Your code goes here
    words = [...string]

  // store array int this to new array
    var a = []

    // logic for the
    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            a[i] = words[i].toUpperCase()
        } else {
            a[i] = words[i].toLowerCase()
        }
        
    }

  // store the new array into the string
    let returnstr = ""
    for (let j = 0; j < a.length; j++) {
         returnstr +=  ( (a[j]))
    }
  
  // return the string 
    return returnstr
}

var arr = []
str = "This is a test"
console.log(toWeirdCase(str))
// toWeirdCase(str)
// console.log(`The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
// );
// str = "A test case"
// console.log(toWeirdCase(str));
// toWeirdCase(str)
