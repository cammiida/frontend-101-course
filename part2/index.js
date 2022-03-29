// var vs const and let
var variable = "hello";

function printSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

// let // kan endres
// const // read-only

printSomething();

// console.log(i); // error!

// object destructuring
const person = {
  firstName: "Mark",
  age: 35,
};

console.log(person.firstName);
const { firstName, age } = person;

console.log(firstName);
console.log(age);

const personArray = [
  {
    firstName: "Mark",
    age: 35,
  },
  { firstName: "Ada", age: 100 },
];

const [mark, ada] = personArray;
console.log(mark);

// arrow functions
function sayHello() {
  console.log("hello");
}

const sayHello2 = () => console.log("hello");

// functions as fist-class citizens
const saySomethingThenGoodbye = (saySomething) => {
  saySomething();
  console.log("goodbye");
};

saySomethingThenGoodbye(sayHello2);

// spread operator
const numbers = [1, 2, 3];

const sum = (x, y, z) => {
  console.log(x + y + z);
};

sum(...numbers);

// filter, map

const personArray2 = [
  {
    firstName: "Mark",
    age: 35,
  },
  { firstName: "Ada", age: 100 },
];

const filteredArray = personArray2.filter((person) => person.age >= 40);

console.log(filteredArray);

const mappedArray = personArray2.map((person) => ({
  ...person,
  age: 20,
}));

console.log(mappedArray);
