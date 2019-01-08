// destructiring
let numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; //spread operator
[num1, num2] = numbers;
console.log(num1, num2);

//object destructuring
const number = 1;
const num2 = number;

const person = {
    name: = 'max'
};

const newPers = {...person }; // copy the rela content


const secondPerson = person; // reference pointer;

person.name = 'Manu';

console.log(secondPerson);

// array functions
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => { return num * 2; });

console.log(numbers);
console.log(doubleNumArray);