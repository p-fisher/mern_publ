// 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

// the const "randomCar" returns the first index in the array (Tesla)
// the cons "otherRandomCar" is preceded by a comma so it returns the second index in the array (Mercedes)

console.log(randomCar)     // Tesla
console.log(otherRandomCar)     // Mercedes

//---------------------------------------------------//
// 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

// the key "name" has a value of "Elon" but a new variable is introduced to call the name key of the employee list and holds "Elon"; name as a variable is then unavailable? i tried running but it errd; i also saw in VSCode the "name" in console.log was striken, so I am unsure

console.log(name);     // err
console.log(otherName);     // err

//---------------------------------------------------//
// 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

// 12345
// 12345 (stored with a different variable name of "hashedPassword")
// well, running it shows the second answer as undefined but i dont understand why when looking at the reading

console.log(password);     // 12345
console.log(hashedPassword);     // undefined

//---------------------------------------------------//
// 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

// "first" actually returns the second index position due to preceding comma.... 2
//  "second" actually returns 4th index posn, or value .... 5
// "third" actually returns the final index posn, or value... 2

// the console log then compares 2 matching 5 (false)
// next the console log compares 2 matching 2 (true)

console.log(first == second);     // false
console.log(first == third);     // true

//---------------------------------------------------//
// 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

// 'value' is a string value for the key of "key" and will be printed
// secondKey is a key with an array value of [1,5,1,8,3,3] and will be printed as called
// secondKey at index [0] is the value 1
// the comma preceding willThisWork causes the variable to represent the second index posn of 5

console.log(key);     // value
console.log(secondKey);     // [1,5,1,8,3,3]
console.log(secondKey[0]);     // 1
console.log(willThisWork);     // 5

