/* Write a function to remove array element based on object property?
How to remove array element based on object property */

/* Test case
    1. removeArrayElement("money") returns the array without the money object
    2. removeArrayElement("id") returns the array without the id object
    3. removeArrayElement("cStatus") returns the array without the cStatus object */

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
]

const filterField = 'money'

function removeArrayElement(filterField) {
    return array.filter(function (obj) {
        return obj.field !== filterField;
    });
}

console.log(removeArrayElement(filterField))