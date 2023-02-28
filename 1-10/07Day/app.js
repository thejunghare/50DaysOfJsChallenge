/* TODO: Create a regular expression to validate if the given input is valid Indian mobile number or not */

/* Test case
    1. validateMobile('+919876543210') returns true
    2. validateMobile('+91 9876543210') returns true
    3. validateMobile('09876543210') returns true
    4. validateMobile('9876543210') returns true
    5. validateMobile('99876543210') returns false
*/

const number = '+919004289600'

function validateMobile(number) {
    let pattern =  /^(\+91|0)?\s?\d{10}$/;
    return pattern.test(number)
}
console.log(validateMobile(number))