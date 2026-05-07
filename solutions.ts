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

//problem: 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const user = {id: 1, name: "John Doe", age: 21};
const userName = getProperty(user, 'name');
console.log(userName);

//problem: 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean} {
    return {
        ...book,
        isRead: true
    };
}

const myBook: Book = {title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
};

const resultBook = toggleReadStatus(myBook);
console.log(resultBook);

//problem: 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;

    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails();
console.log(student.getDetails());

//problem: 7

function getIntersection(arr1: number[], arr2: number[]): number[]{
    return arr1.filter((num) => arr2.includes(num));
}

const intersection = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(intersection);