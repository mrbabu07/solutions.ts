"use strict";
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result);
