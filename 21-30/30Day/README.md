## Task
To create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules
The input string will always be lower case but maybe empty.

If the character in the string is whitespace then pass over it as if it was an empty seat

Example
- wave("hello") returns the array ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


## Test Case

- \`wave("hello")\` should return \`\["Hello", "hEllo", "heLlo", "helLo", "hellO"\]\`
- \`wave("two words")\` should return \`\["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"\]\`
- \`wave(" gap ")\` should return \`\[" Gap ", " gAp ", " gaP "\]\`
