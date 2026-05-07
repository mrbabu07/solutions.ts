//problem: 1

function filterEvenNumbers(numbers: number[]):  number[]{
    return numbers.filter((num) => num %2 === 0);
}

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result);

//problem: 2

function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

const reversed = reverseString('typescript');
console.log(reversed);

//problem: 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
    if (typeof value === 'string'){
        return 'String';
        
    }
    else {
        return 'Number';
    }
}

console.log(checkType('Hello'))
console.log(checkType(42));